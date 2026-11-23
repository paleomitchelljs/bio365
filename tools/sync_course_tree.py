#!/usr/bin/env python3
"""Copy the course tree (TREE_SRC) from the phylo repo into shared/js/coursetree.js.

usage: python3 tools/sync_course_tree.py [path/to/phylo]   (default: ../phylo)
"""
import os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
phylo = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, '..', 'phylo')
s = open(os.path.join(phylo, 'docs', 'js', 'course.js'), encoding='utf-8').read()
a = s.index('P.TREE_SRC = `') + len('P.TREE_SRC = `')
b = s.index('`;', a)
out = os.path.join(ROOT, 'shared', 'js', 'coursetree.js')
old = open(out, encoding='utf-8').read()
head = old[:old.index('window.COURSE_TREE = `') + len('window.COURSE_TREE = `')]
open(out, 'w', encoding='utf-8').write(head + s[a:b] + '`;\n')
print('wrote', out)
