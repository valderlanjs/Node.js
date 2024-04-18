const fs = require("node:fs")
const path = require("node:path")
const readline = require("node:readline")

run()

function escapeHtmlSpecialCharacters(text) {
    return text.replace(/[<>&]/g, (match) => {
        switch (match) {
            case "<":
                return "&lt;"
            case ">":
                return "&gt;"
            case "&":
                return "&amp;"
            default:
                return match
        }
    })
}

//console.log(escapeHtmlSpecialCharacters("Isso é um código HTML, nele existe tags como a <div> e <h1>"))

function escapedHtmlFile(inputFilePath, outputFilePath) {
    try {

        const fileContent = fs.readFileSync(inputFilePath, "utf-8")
        const escapedContent = escapeHtmlSpecialCharacters(fileContent)
        fs.writeFileSync(outputFilePath,  escapedContent, "utf-8")
        console.log(`Arquivo escapado com sucesso: ${outputFilePath}`)

    } catch (error) {
        console.log(`Erro ao processar o arquivo: ${error.message}`)
        process.exit(1)
    }
}

function askFilePath(question) {
    const rl = readline.createInterface( {input: process.stdin, output: process.stdout} )

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
            rl.close()
        })
    })
}

async function userInteraction() {
    // node app.js <inputFilePath> <outputFilePath>
    let inputPath = process.argv[2]
    if(!inputPath) {
        inputPath = await askFilePath("Digite o caminho do arquivo de entrada: ")
    }
    inputPath = path.resolve(inputPath)

    const defaultName = `escaped_${path.basename(inputPath)}.txt`
    const answer = await askFilePath(`Digite o caminho do arquivo de saída (padrão: ${defaultName}): `)
    let outputPath = answer.length > 0 ? answer : defaultName
    outputPath = path.resolve(outputPath)

    escapedHtmlFile(inputPath, outputPath)
}

function run() {
    if (process.argv.length >= 4) {
        escapedHtmlFile(
            path.resolve(process.argv[2], 
            path.resolve(process.argv[3]))
        )
    } else {
        console.log("----------------")
        console.log("HTML Tag Escaper v1.0.0")
        console.log("----------------\n")
        console.log("Argumentos não Informados! Por favor, informe os caminhos dos arquivos para realizar o escape.")
        userInteraction()
    }
}