#!/usr/bin/env python3
"""Copy the pictures each deck uses out of the lecture outlines folder, and write js/dims.js.

usage: python3 tools/assets.py [--src PATH] [--prune] [deck ...]

  --src    the outlines folder (default: ../comparative/lectures/outlines)
  --prune  delete files in <deck>/img that content.js no longer names
  deck     caudata reptiles squamata aves mammalia (default: all)

content.js names a picture by its file name in img/: a figure or 3D render
`images/L*/<stem>.png|jpg` becomes `<stem>.jpg` (JPEG, at most 1800 px on a side),
and an animation `gifs/<stem>.gif` or `gifs/diagrams/<stem>.gif` becomes `<stem>.gif`
with the title and caption that were drawn into every frame cropped off (see
gif_band), so the slide carries no paragraph of text. Needs macOS `sips` and `ffmpeg`. Nothing else.
"""
import glob, json, os, re, struct, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DECKS = ['caudata', 'reptiles', 'squamata', 'aves', 'mammalia']
REF = re.compile(r"""['"](?:img/)?([A-Za-z0-9][A-Za-z0-9_.\-]*\.(?:jpg|gif))['"]""")


def sh(*a):
    subprocess.run(a, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)


def dims(path):
    with open(path, 'rb') as f:
        head = f.read(10)
    if head[:3] == b'GIF':
        return list(struct.unpack('<HH', head[6:10]))
    out = subprocess.run(['sips', '-g', 'pixelWidth', '-g', 'pixelHeight', path], check=True, capture_output=True, text=True).stdout
    return [int(re.search(r'pixelWidth: (\d+)', out).group(1)), int(re.search(r'pixelHeight: (\d+)', out).group(1))]


def ink_rows(path, w):
    """For each row of the GIF, whether any frame has ink (a pixel darker than 200) there."""
    raw = subprocess.run(['ffmpeg', '-loglevel', 'error', '-i', path, '-vf', 'format=gray', '-f', 'rawvideo', '-'],
                         check=True, capture_output=True).stdout
    _, h = dims(path)
    ink = [False] * h
    for f in range(0, len(raw) // (w * h)):
        base = f * w * h
        for y in range(h):
            if not ink[y] and min(raw[base + y * w: base + (y + 1) * w]) < 200:
                ink[y] = True
    return ink


def runs(ink):
    out, cur = [], None
    for y, v in enumerate(ink + [False]):
        if v and cur is None: cur = y
        if not v and cur is not None: out.append((cur, y)); cur = None
    return out


def gif_band(path):
    """(top, height) of the animation inside a GIF from anim2d.py or diag2d.py.

    Both draw a title (and, in newer renders, a phase line under it) above the
    animation, and a caption, a colour key and a credit below it. The title is the
    first run of ink; the footer is the block of text lines at the bottom whose gaps
    are all small. What lies between, less blank margins, is the animation."""
    w, h = dims(path)
    rs = runs(ink_rows(path, w))
    # header: the title run, and a phase line if one starts within 30 px of it
    k = 1
    while k < len(rs) and rs[k][0] - rs[k - 1][1] < 30 and rs[k][1] - rs[k][0] < 26 and rs[k][1] < 95:
        k += 1
    # footer: from the bottom, text lines (< 26 px tall) separated by gaps < 20 px
    j = len(rs) - 1
    while j > k and rs[j][1] - rs[j][0] < 26 and rs[j][0] - rs[j - 1][1] < 20:
        j -= 1
    foot = j if rs[j][1] - rs[j][0] < 26 else j + 1  # a tall run is animation, not caption
    body = rs[k:foot]
    if not body:
        raise SystemExit(f'{path}: found no animation between title and caption')
    top = max(0, body[0][0] - 12)
    bottom = min(h, body[-1][1] + 12)
    return top, bottom - top


def find(src, stem):
    for pat in (f'images/*/{stem}.png', f'images/*/{stem}.jpg', f'gifs/{stem}.gif', f'gifs/diagrams/{stem}.gif'):
        hits = glob.glob(os.path.join(src, pat))
        if hits:
            return hits[0]
    return None


def main(argv):
    src = os.path.join(ROOT, '..', 'comparative', 'lectures', 'outlines')
    prune, decks = False, []
    it = iter(argv)
    for a in it:
        if a == '--src': src = next(it)
        elif a == '--prune': prune = True
        else: decks.append(a)
    src = os.path.abspath(src)
    missing = []
    for deck in decks or DECKS:
        content = os.path.join(ROOT, deck, 'js', 'content.js')
        if not os.path.exists(content):
            continue
        names = sorted(set(REF.findall(open(content, encoding='utf-8').read())))
        img = os.path.join(ROOT, deck, 'img')
        os.makedirs(img, exist_ok=True)
        table = {}
        for name in names:
            stem, ext = os.path.splitext(name)
            out = os.path.join(img, name)
            s = find(src, stem)
            if not s:
                if os.path.exists(out):
                    table[name] = dims(out)  # already copied; the source moved
                else:
                    missing.append(f'{deck}: {name}')
                continue
            if not os.path.exists(out) or os.path.getmtime(out) < os.path.getmtime(s):
                if ext == '.gif':
                    top, band = gif_band(s)
                    w, _ = dims(s)
                    sh('ffmpeg', '-loglevel', 'error', '-y', '-i', s, '-vf',
                       f'crop={w}:{band}:0:{top},split[a][b];[a]palettegen=stats_mode=diff[p];[b][p]paletteuse=dither=none',
                       '-loop', '0', out)
                else:
                    big = ['-Z', '1800'] if max(dims(s)) > 1800 else []
                    sh('sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '82', *big, s, '--out', out)
                print('  ', deck, name)
            table[name] = dims(out)
        with open(os.path.join(ROOT, deck, 'js', 'dims.js'), 'w', encoding='utf-8') as f:
            f.write('/* Written by tools/assets.py: [width, height] of each picture in img/. */\n')
            f.write('window.DIMS = {\n' + ',\n'.join(f'  {json.dumps(k)}: {json.dumps(v)}' for k, v in sorted(table.items())) + '\n};\n')
        if prune:
            for f in os.listdir(img):
                if f not in table and not f.startswith('.'):
                    os.remove(os.path.join(img, f))
                    print('   removed', deck, f)
        print(deck, len(table), 'pictures')
    if missing:
        print('MISSING:\n  ' + '\n  '.join(missing))
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
