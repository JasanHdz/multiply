const colors = require('colors')
const argv = require('./config/yargs').argv
const { createFile, listTable } = require('./multiplicar/')
const command = argv._[0]

switch (command) {
  case 'listar':
    console.log('Listar')
    listTable(argv.base, argv.limite)
    break
  case 'crear':
    console.log('crear')
    createFile(argv.base, argv.limite)
      .then(file => console.log('Archivo creado:', colors.green(file)))
      .catch(err => console.error(err))
    break
  default:
    console.log('no se reconocio el comendo')
    break
}