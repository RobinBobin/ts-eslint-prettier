#!/bin/bash
shopt -s dotglob
mv js/* .
rm -r js
mv base.tsconfig.jsonc tsconfig.json
rm "$0"
