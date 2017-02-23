#!/bin/bash

unamestr=$(uname)
SCRIPTFILE="undefined"
# check os, os x users install coreutils: brew install coreutils
if [ $unamestr == "Linux" ]; then
  SCRIPTFILE=$(readlink -f "$0")
elif [ $unamestr == "Darwin" ]; then
  SCRIPTFILE=$(greadlink -f "$0")
fi
SCRIPTPATH=$(dirname "$SCRIPTFILE")

$SCRIPTPATH/transform_translation.py -f -S -s testword FI_kala $SCRIPTPATH/../default_translations/*fi.json
$SCRIPTPATH/transform_translation.py -f -S -s testword SV_kala $SCRIPTPATH/../default_translations/*sv.json
$SCRIPTPATH/transform_translation.py -f -S -s testword EN_kala $SCRIPTPATH/../default_translations/*en.json
