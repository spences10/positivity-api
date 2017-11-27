const ura = require('unique-random-array')
const quotes = require('./quotes.json')

module.exports = {
  all: quotes,
  random: ura(quotes)
}

