const path = require("node:path")

//Juntar todos os argumentos que vai ser passado, e cada argumento vai ser 
//considerado como parte de um caminho, e ele vai juntar todos esses caminhos

const dir = "src"
const file = "app.js"

// VARIÁVEL GLOBAL, __dirname => ela vai estar sempre disponivel, ele obtem o nome completo do diretorio atual

const fullPath = path.join(__dirname, dir, file)

const relativePath = path.join(".", dir, file)
// esse ., é o diretorio de onde foi executado 


console.log(fullPath) // src\scripts\arquivo.js,
 //Então dá para vê que ele juntou tudo isso em um caminho
console.log(relativePath)
console.log("-----------------")

const relativePath2 = "../arquivos/relatorio.pdf"

const absolutePath = path.resolve(__dirname, relativePath2) // muito parecido com o join()
console.log(absolutePath)

console.log("----------------------------")

console.log(__filename) // com o nome do arquivo no final

console.log("----------------------------")

const fileName = path.basename(relativePath2) // ele serve para retornar a ultima parte de um caminho

console.log(fileName) // relatorio.pdf


const ext = path.extname(absolutePath) // nome da extensão

console.log(ext) // .pdf