import fs from "node:fs"
/*
FORMA ASSÍNCRONA

export function createFile(text) {
    fs.writeFile("./meuarquivo.txt", text, "utf-8", (error) => {
        if (error) {
            console.log("Erro ao criar o arquivo: ", error.message)
        }
    })
}


export function showFile() {
    fs.readFile("meuarquivo.txt", "utf-8", (error, text) => {
        if (error) {
            console.log("Erro ao ler o arquivo: ", error.message)
        } else {
           console.log(text)
        }

    })
}

export function updateFile(newText) {
    fs.writeFile("meuarquivo.txt", newText, "utf-8", (error) => {
        if (error) {
            console.log("Erro ao modificar o arquivo: ", error.message)
        }
    })
}


export function deleteFile() {
    fs.unlink("meuarquivo.txt", (error) => {
        if (error) {
            console.log("Erro ao excluir o arquivo: ", error. message)
            return 
        } else {
            console.log("Arquivo excluido com sucesso.")
        }

    })
}


*/

// COM PROMISES

export function createFile(text) {
    return new Promise((resolve, reject) => {
        fs.writeFile("meuarquivo.txt", text, "utf-8", (error) => {
            if (error) {
                reject("Erro ao escrever arquivo: ", error.message)
            } else {
                resolve()
            }
        })
    })
}

export function showFile() {
    return new Promise((resolve, reject) => {
        fs.readFile("meuarquivo.txt", "utf-8", (error, text) => {
            if (error) { 
                reject('Erro ao ler arquivo: ', error.message)
            } else {
                console.log(text)
                resolve()
            }
        })
    })
}

export function updateFile(newText) {
    return new Promise((resolve, reject) => {
        fs.writeFile("meuarquivo.txt", newText, (error) => {
            if (error) {
                reject("Erro ao modificar arquivo: ", error.message)
            } else {
                resolve()
            }
        })
    })
}

export function deleteFile() {
    return new Promise((resolve, reject) => {
        fs.unlink("meuarquivo.txt", (error) => {
            if (error) {
                console.log("Erro ao excluir o arquivo: ", error.message)
                resolve()
            } else {
                console.log("Arquivo excluido com sucesso!")
                resolve()
            }
        })
    })
}