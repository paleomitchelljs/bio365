#!/usr/bin/env python3
"""Copy the photos listed in tools/photos.tsv into <deck>/img, then run tools/assets.py for sizes.

usage: python3 tools/photos.py [--lectures PATH] [deck ...]

Each row names a picture in img/ and where it comes from: a picture inside one of the
BIOL 440 PowerPoints (`<pptx under the Lectures folder>::<media file>`), or a URL. JPEGs
and PNGs become JPEG (at most 1800 px on a side); GIFs are copied as they are. A file
already in img/ is left alone, so delete it to fetch it again. The fourth column records
where the picture came from: the captions in content.js carry the credit.
"""
import os, subprocess, sys, tempfile, zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
LECTURES = os.path.expanduser('~/Dropbox/Professional/Courses/c_BIOL_440_Comparative/Lectures')


def main(argv):
    lectures, decks = LECTURES, []
    it = iter(argv)
    for a in it:
        if a == '--lectures': lectures = next(it)
        else: decks.append(a)
    for line in open(os.path.join(HERE, 'photos.tsv'), encoding='utf-8'):
        if not line.strip() or line.startswith('#'):
            continue
        deck, name, src = line.rstrip('\n').split('\t')[:3]
        if decks and deck not in decks:
            continue
        out = os.path.join(ROOT, deck, 'img', name)
        if os.path.exists(out):
            continue
        if src.startswith('http'):
            # curl, not urllib: Wikimedia turns away urllib's requests (HTTP 429)
            data = subprocess.run(['curl', '-sfL', '-A', 'bio365-decks/1.0 (course slides)', src], check=True, capture_output=True).stdout
            ext = os.path.splitext(src.split('?')[0])[1]
        else:
            pptx, media = src.split('::')
            data = zipfile.ZipFile(os.path.join(lectures, pptx)).read('ppt/media/' + media)
            ext = os.path.splitext(media)[1]
        if name.endswith('.gif'):
            open(out, 'wb').write(data)
        else:
            with tempfile.NamedTemporaryFile(suffix=ext.lower()) as t:
                t.write(data); t.flush()
                subprocess.run(['sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '85', '-Z', '1800', t.name, '--out', out],
                               check=True, stdout=subprocess.DEVNULL)
        print('  ', deck, name)
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
