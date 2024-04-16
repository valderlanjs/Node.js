// CRIANDO O ARQUIVO DE  FORMA SINCRONA
/*
const fs = require("node:fs")

try {

    fs.writeFileSync("./arquivo.txt", "Olá mundo!", "utf-8")
    console.log("Arquivo criado com sucesso.")
} catch (error) {
    console.log("Erro ao escrver o arquivo: " + error.message)
}*/

// CRIANDO O ARQUIVO DE FORMA ASSÍNCRONO

const fs = require("node:fs")

const content = "Conteúdo do novo arquivo assíncrono"

fs.writeFile("./arquivo.txt", content, "utf-8", (error) => {
    if (error) {
        console.log("Erro ao escrver o arquivo: " + error.message)
        return 
    }  

    console.log("Arquivo criado com sucesso de forma assíncrona.")
})

