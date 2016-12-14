# Configuration for project for noce


## How to debug the native wrappers
if a test fails with a segmentation error follow these steps:
1. rebuild wrappers using 'gulp build --debugBuild'
2. run 'gdb node src/debugTest.js <path-to-test-file>'
3. inside gdb type `run` and when the error occurs type `backtrace`
