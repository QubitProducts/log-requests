'use strict'
const _ = require('lodash')
const chalk = require('chalk')
const prettyjson = require('prettyjson')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const attributes = ['url', 'body', 'query', 'headers', 'cookies']
const log = console.log.bind(console)

module.exports = function logger (options) {
  options = _.extend({}, { port: 2345 }, options)
  const app = express()
  if (!_.some(attributes, attr => options[attr])) options.all = true
  const picked = attributes.filter(attr => options[attr] || options.all)
  app.use(cookieParser())
  app.use(bodyParser.json({limit: '50mb'}))
  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
  app.use(bodyParser.raw())
  app.use(bodyParser.text())
  app.use((req, res) => {
    const summary = _.pick(req, picked)
    log(chalk.bold.inverse('\n\n________________REQUEST SUMMARY________________'))
    log(prettyjson.render(summary))
    res.json(summary)
  })
  return app.listen(options.port)
}
