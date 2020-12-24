const colors = require('colors')
const argv = require('./config/yargs').argv
const { createFile, listTable } = require('./multiply')
const command = argv._[0]

switch (command) {
  case 'list':
    console.log('to list')
    listTable(argv.base, argv.limite)
    break
  case 'create':
    console.log('crear')
    createFile(argv.base, argv.limite)
      .then(file => console.log('File created:', colors.green(file)))
      .catch(err => console.error(err))
    break
  default:
    console.log('command not recognized')
    break
}