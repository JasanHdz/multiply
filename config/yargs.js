
const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
}

const argv = require('yargs')
  .command('list', 'Print the multiplication table on the console', opts)
  .command('create', 'Generate a file with the multiplication table', opts)
  .argv;

module.exports = {
  argv
}