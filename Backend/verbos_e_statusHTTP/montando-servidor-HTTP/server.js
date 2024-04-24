// Biblioteca para criar servidor HTTP
const http = require('http')

// Criando servidor HTTP
const server = http.createServer((req,res) => {
    console.log(req.method)
    console.log(req.url)
    // devolvendo uma informação para o cliente
    res.statusCode = 404;
    res.end('<h1>Hello, world!</h1>')
});

server.listen(3000, () => {
    console.log('Servidor Ativo!')
})