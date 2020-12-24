const fs = require('fs');
const colors = require('colors');

function createFile(base, limit) {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`The value entered ${base} is not a number`)
      return
    }
    let data = '';
    for (let i = 1; i <= limit; i++) {
      data += `${base} * ${i} = ${base * i}\n`
    }

    fs.writeFile(`tables/table-${base}-of-${limit}.txt`, data, 'utf8', (err) => {
      if (err)
        reject(err)
      else 
        resolve(`table-${base}-of-${limit}.txt`)
    })
  })
}

function listTable(base, limit = 10) {
  console.log('======================================'.green)
  console.log('Table from ${base} to ${limite}'.green)
  console.log('======================================'.green)
  for (let i = 1; i <= limit; i++) {
    console.log(`${base} * ${i} = ${base * i}`)
  }
}

module.exports = {
  createFile,
  listTable
}