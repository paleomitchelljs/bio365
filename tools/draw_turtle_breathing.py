#!/usr/bin/env python3
"""Draw the turtle-ventilation stills for the Diapsida deck (after Lyson et al. 2014).

usage: python3 tools/draw_turtle_breathing.py      writes diapsida/img/turtle-breathing-*.svg

One schematic, side view, shell cut away, head to the left, in four states that the
slide steps through: rest, exhale, inhale, and the pulmonalis. Only the muscles that are
working in a state are red and named; the lung and viscera change size and place so the
volume change is visible; an arrow at the nostril says which way the air goes.
"""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W, H, DX = 1240, 640, 120  # DX: the turtle is drawn from x=0 and shifted right to leave room for labels
RED, PALE, INK, MUTED = '#c62828', '#ecc8c8', '#3b3226', '#8a8174'
SHELL, SHELL_EDGE, LUNG, LUNG_EDGE, GUT, GUT_EDGE = '#d9c49b', '#6b5a3e', '#a9cfee', '#4f7ea8', '#e8c9a0', '#8a6a44'

# per state: lung (cy, ry), viscera cy, girdle tilt (deg), flank bulge (px, + = out), active muscles, title, air
STATES = {
    'rest':   dict(lung=(232, 62), gut=318, tilt=0,   flank=0,   on=[], title='At rest', air=None),
    'out':    dict(lung=(222, 40), gut=292, tilt=8,   flank=-22, on=['tt', 'ta'], title='Exhale: squeeze the viscera up into the lungs', air='out'),
    'in':     dict(lung=(240, 80), gut=332, tilt=-14, flank=26,  on=['ob', 'se'], title='Inhale: make the body cavity bigger', air='in'),
    'pulm':   dict(lung=(232, 62), gut=318, tilt=0,   flank=0,   on=['pu'], title='Pulmonalis: a sheet around the lung', air=None),
}
NAMES = {'tt': 'transversus thoracis', 'ta': 'transversus abdominis (sling)', 'ob': 'obliquus abdominis',
         'se': 'serratus', 'pu': 'pulmonalis (role unclear)'}


def spindle(x1, y1, x2, y2, w):
    """A muscle belly from (x1, y1) to (x2, y2), w thick at the middle."""
    mx, my = (x1 + x2) / 2, (y1 + y2) / 2
    dx, dy = x2 - x1, y2 - y1
    n = (dx * dx + dy * dy) ** 0.5
    ox, oy = -dy / n * w / 2, dx / n * w / 2
    return f'M{x1:.0f},{y1:.0f} Q{mx + ox:.0f},{my + oy:.0f} {x2:.0f},{y2:.0f} Q{mx - ox:.0f},{my - oy:.0f} {x1:.0f},{y1:.0f}Z'


def label(x, y, tx, ty, text, on, anchor='start'):
    col = RED if on else MUTED
    wt = 700 if on else 400
    return (f'<line x1="{x}" y1="{y}" x2="{tx}" y2="{ty}" stroke="{col}" stroke-width="1.5"/>'
            f'<circle cx="{x}" cy="{y}" r="3.5" fill="{col}"/>'
            f'<text x="{tx + (6 if anchor == "start" else -6)}" y="{ty + 6}" text-anchor="{anchor}" font-size="28" font-weight="{wt}" fill="{col}">{text}</text>')


def draw(k):
    s = STATES[k]
    on = lambda m: m in s['on']
    fill = lambda m: RED if on(m) else PALE
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" font-family="Helvetica, Arial, sans-serif">',
         f'<rect width="{W}" height="{H}" fill="#fff"/>',
         f'<text x="28" y="52" font-size="40" font-weight="700" fill="{INK}">{s["title"]}</text>',
         f'<text x="28" y="{H - 20}" font-size="24" fill="{MUTED}">side view, shell cut away · head to the left</text>',
         f'<g transform="translate({DX},40)">']
    # head and neck
    o.append(f'<path d="M205,330 C170,322 150,318 128,316" stroke="{SHELL_EDGE}" stroke-width="30" fill="none" stroke-linecap="round"/>')
    o.append(f'<ellipse cx="104" cy="312" rx="44" ry="27" fill="#cdb889" stroke="{SHELL_EDGE}" stroke-width="2.5"/>')
    o.append(f'<circle cx="80" cy="304" r="4" fill="{INK}"/>')
    # limbs
    o.append(f'<path d="M250,378 l-30,70 l40,0 z" fill="#cdb889" stroke="{SHELL_EDGE}" stroke-width="2"/>')
    o.append(f'<path d="M745,378 l20,70 l38,-6 z" fill="#cdb889" stroke="{SHELL_EDGE}" stroke-width="2"/>')
    # body cavity and shell
    o.append(f'<path d="M205,336 C240,130 760,120 815,336 L790,380 L235,380 Z" fill="#fbf6ee"/>')
    o.append(f'<path d="M190,340 C225,105 775,95 832,340 L812,340 C760,128 240,138 208,340 Z" fill="{SHELL}" stroke="{SHELL_EDGE}" stroke-width="2.5"/>')
    o.append(f'<rect x="232" y="380" width="530" height="20" rx="4" fill="{SHELL}" stroke="{SHELL_EDGE}" stroke-width="2.5"/>')
    o.append(f'<text x="497" y="396" text-anchor="middle" font-size="20" fill="{SHELL_EDGE}">plastron</text>')
    o.append(f'<text x="510" y="126" text-anchor="middle" font-size="20" fill="{SHELL_EDGE}">carapace (ribs fused in)</text>')
    # posterior flank: soft skin in the hind-limb pocket, the only part of the wall that moves
    b = s['flank']
    o.append(f'<path d="M812,340 Q{830 + b},362 790,382" fill="none" stroke="{SHELL_EDGE}" stroke-width="3" stroke-dasharray="7 5"/>')
    # lung and viscera
    cy, ry = s['lung']
    o.append(f'<ellipse cx="505" cy="{cy}" rx="250" ry="{ry}" fill="{LUNG}" stroke="{LUNG_EDGE}" stroke-width="2.5"/>')
    o.append(f'<text x="505" y="{cy + 7}" text-anchor="middle" font-size="30" font-weight="700" fill="{LUNG_EDGE}">lungs</text>')
    if on('pu'):
        o.append(f'<ellipse cx="505" cy="{cy}" rx="258" ry="{ry + 8}" fill="none" stroke="{RED}" stroke-width="5"/>')
    g = s['gut']
    o.append(f'<ellipse cx="510" cy="{g}" rx="215" ry="40" fill="{GUT}" stroke="{GUT_EDGE}" stroke-width="2.5"/>')
    o.append(f'<text x="510" y="{g + 7}" text-anchor="middle" font-size="28" fill="{GUT_EDGE}">viscera</text>')
    # shoulder girdle inside the shell, hinged at the carapace; tilt swings its lower end
    import math
    t = math.radians(s['tilt'])
    gx0, gy0, L = 262, 190, 180
    gx1, gy1 = gx0 - L * math.sin(-t) * 1, gy0 + L * math.cos(t)
    gx1 = gx0 + L * math.sin(t)
    o.append(f'<line x1="{gx0}" y1="{gy0}" x2="{gx1:.0f}" y2="{gy1:.0f}" stroke="#bfa774" stroke-width="12" stroke-linecap="round"/>')
    o.append(f'<text x="{gx0 + 12}" y="{gy0 + 30}" font-size="20" fill="{SHELL_EDGE}">shoulder girdle</text>')
    # muscles: serratus (girdle to carapace, anterior), transversus thoracis (girdle under the front of the viscera),
    # transversus abdominis (sling under the viscera to the flank), obliquus abdominis (plastron to the flank)
    gm = (gx0 + gx1) / 2, (gy0 + gy1) / 2
    o.append(f'<path d="{spindle(gm[0], gm[1], 222, 262, 26)}" fill="{fill("se")}"/>')
    o.append(f'<path d="{spindle(gx1, gy1 - 6, 420, g + 36, 24)}" fill="{fill("tt")}"/>')
    o.append(f'<path d="M420,{g + 40} Q620,{g + 70} {800 + b / 2:.0f},360" fill="none" stroke="{fill("ta")}" stroke-width="{12 if on("ta") else 9}" stroke-linecap="round"/>')
    o.append(f'<path d="{spindle(740, 378, 808 + b * 0.8, 356, 26)}" fill="{fill("ob")}"/>')
    # labels, leader lines to the muscle
    o.append(label(int(gm[0] - 18), int(gm[1] - 22), 150, 150, NAMES['se'], on('se'), 'end'))
    o.append(label(340, int(g + 22), 300, 500, NAMES['tt'], on('tt'), 'end'))
    o.append(label(610, int(g + 56), 470, 548, NAMES['ta'], on('ta')))
    o.append(label(int(780 + b * 0.4), 366, 800, 470, NAMES['ob'], on('ob')))
    if on('pu'):
        o.append(label(705, cy - ry + 10, 760, 100, NAMES['pu'], True))
    # air at the nostril
    if s['air']:
        x0, x1 = (60, -60) if s['air'] == 'out' else (-60, 56)
        o.append(f'<defs><marker id="a" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="{LUNG_EDGE}"/></marker></defs>')
        o.append(f'<line x1="{x0}" y1="300" x2="{x1}" y2="300" stroke="{LUNG_EDGE}" stroke-width="7" marker-end="url(#a)"/>')
        o.append(f'<text x="0" y="262" text-anchor="middle" font-size="30" font-weight="700" fill="{LUNG_EDGE}">air {s["air"]}</text>')
    if b:
        o.append(f'<text x="{846 + b:.0f}" y="352" font-size="22" fill="{SHELL_EDGE}">flank skin {"out" if b > 0 else "in"}</text>')
    o.append('</g></svg>')
    return ''.join(o)


def main():
    for k in STATES:
        out = os.path.join(ROOT, 'diapsida', 'img', f'turtle-breathing-{k}.svg')
        open(out, 'w', encoding='utf-8').write(draw(k))
        print('  ', out)


if __name__ == '__main__':
    main()
