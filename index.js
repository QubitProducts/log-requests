#!/usr/bin/env node
const pkg = require('./package.json')
const program = require('commander')
const logger = require('./logger')

program
  .version(pkg.version)
  .option('-p, --port <port>', 'Specify port [2345]', Number)
  .option('-a, --all', 'Log all attributes')
  .option('-u, --url', 'Log url')
  .option('-b, --body', 'Log body')
  .option('-q, --query', 'Log query')
  .option('-h, --headers', 'Log headers')
  .option('-c, --cookies', 'Log cookies')
  .parse(process.argv)

logger(program)
