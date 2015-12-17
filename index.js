#!/usr/bin/env node
const chalk = require('chalk')
const pkg = require('./package.json')
const program = require('commander')
const logger = require('./logger')

program
  .description('A service that simply echos and logs all requests sent to it')
  .version(pkg.version)
  .option('-p, --port <port>', 'Specify port [2345]', Number)
  .option('-u, --url', 'Log url')
  .option('-b, --body', 'Log body')
  .option('-q, --query', 'Log query')
  .option('-h, --headers', 'Log headers')
  .option('-c, --cookies', 'Log cookies')

program.on('--help', () => {
  console.log(`  Examples:

    to log requests to http://localhost:2345:

    ${chalk.green('log-requests')}

    to log requests to http://localhost:2000:

    ${chalk.green('log-requests -p 2000')}
    ${chalk.green('log-requests --port 2000')}

    to log just the url and cookies for requests to http://localhost:2000:

    ${chalk.green('log-requests -p 2000 -uc')}
    ${chalk.green('log-requests --port 2000 --url --cookies')}

    to log just the headers query and body for requests to http://localhost:2000:

    ${chalk.green('log-requests -p 2000 -hqb')}
    ${chalk.green('log-requests -p 2000 --headers --query --body')}
    `)
})

logger(program.parse(process.argv))
