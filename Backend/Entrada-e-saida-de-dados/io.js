const process = require('process');

console.log(process.argv)


console.log('Digite seu nome: ')

process.stdin.on('data', (keyboard) => {
    process.stdout.write(`Texto do usuário:  ${keyboard.toString()}`)
    process.exit()
})