#!/bin/bash
npx tsc
npx eslint .
npx prettier . --check
