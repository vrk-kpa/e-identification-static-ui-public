#!/usr/bin/env python3
import argparse
import io
import json
import os

def replace_in_json(key_value, filename, opts):
    with io.open(filename, encoding='utf-8', mode='r') as file:
        translation = json.load(file)

    if key_value and key_value[0]:
        value = key_value[1].strip().strip('"').strip("'")
        translation[key_value[0]] = value

    with io.open(filename, encoding='utf-8', mode='w') as file:
        file.write(json.dumps(translation, ensure_ascii=False, **opts))

def replace_in_json_files(key_value, filenames, opts):
    for filename in filenames:
        replace_in_json(key_value, filename, opts)

if __name__ == '__main__':
    script_path=os.path.dirname(os.path.realpath(__file__))

    parser = argparse.ArgumentParser(description='Set or Replace value in translations')
    parser.add_argument('-f', '--format', action='store_true', help='Format the file')
    parser.add_argument('-S', '--sort', action='store_true', help='Sort according to key')
    parser.add_argument('-s', '--set', nargs=2, metavar=('KEY', 'VALUE'), help='Set key to value')
    parser.add_argument('files', metavar='FILE', nargs='+', help='Files to apply to')

    args = parser.parse_args()
    opts = {}
    if args.format:
        opts['indent'] = 2
    opts['sort_keys'] = args.sort
    replace_in_json_files(args.set, args.files, opts)

