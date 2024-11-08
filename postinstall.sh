#!/bin/bash
cp -r js/* . &&
rm -r js &&
mv base.tsconfig.jsonc tsconfig.json &&
rm "$0"
