#!/bin/bash
set -exu -o pipefail

cd build-task
npm install
tsc
TASK_TEST_TRACE=1 mocha ./tests/_suite.js --verbose
npm prune --production
cd ..

tfx extension create --manifest-globs vss-extension.json