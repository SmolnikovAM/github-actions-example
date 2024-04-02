const fs = require('fs')
const str =  `Nodejs: ${process.platform} ${process.arch}`

console.log(str)

fs.mkdirSync('./dist', { recursive: true })

const file = fs.readFileSync('./hello.txt').toString()
const package = JSON.parse(fs.readFileSync('./package.json').toString())

console.log(package)

const result = [
 file,
 str,
 package.version
].join('\n')

fs.writeFileSync('./dist/release.txt', result)

