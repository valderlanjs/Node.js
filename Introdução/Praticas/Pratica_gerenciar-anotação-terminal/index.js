const fs = require("node:fs")
const path = require("node:path")
const readline = require("node:readline")

const notesDirectory = path.join(__dirname, 'notes')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function initializeNotesDirectory() {
    if (!fs.existsSync(notesDirectory)) {
        fs.mkdirSync(notesDirectory)
    }
}

function listNotes() {
    const notes = fs.readdirSync(notesDirectory)

    if (notes.length === 0) {
        console.log("Nenhuma nota encontrada.")
    } else {
        console.log("Notas disponíveis:")
             notes.forEach((note, index) => {
            console.log(`${index + 1}. ${note}`)
        })
    }

}

function readNote() {
    listNotes()

    rl.question("Digite o número da nota que deseja ler:", (index) => {
        const notes = fs.readdirSync(notesDirectory)
        const selectedNote = notes[index - 1]

        if (!selectedNote) {
            console.log("Numero da nota inválido!")
        }  else {
            const notePath = path.join(notesDirectory, selectedNote)
            const content = fs.readFileSync(notePath, "utf-8")
            console.log(`\nConteúdo da nota ${selectedNote}:\n\n${content}`)
        }

        askForNextAction()
    })
}


function creadteNote() {
    rl.question("Digite o nome da nota: ", (noteName) => {
        const notePath = path.join(notesDirectory, noteName)

        rl.question("Digite o conteúdo da nota:\n", (content) => {
            fs.writeFileSync(notePath + ".txt", content, "utf-8")
            console.log(`Nota ${noteName} foi criada com sucesso!`)

            askForNextAction()
        })
    })

}

function deleteNote() {
    listNotes()

    rl.question("Digite o número da nota que deseja excluir:", (index) => {
        const notes = fs.readdirSync(notesDirectory)
        const selectedNote = notes[index - 1]

        if (!selectedNote) {
            console.log("Numero da nota inválido!")
        } else {
            const notePath = path.join(notesDirectory, selectedNote)
            fs.unlinkSync(notePath)
            console.log(`Nota ${selectedNote} foi excluída com sucesso!`)
        }

        askForNextAction()
    })
}

function askForNextAction() {
    rl.question("\nDeseja realizar outra ação? (s/n): ", (answer) => {
        if(answer.toLowerCase() === 's'){
            main()
        } else {
            console.log("Encerrando...")
            rl.close()
            process.exit(0)
        }
    })
}

function main() {
    initializeNotesDirectory()

    console.clear()
    console.log("-----------------------------")
    console.log("Notas Rápidas no Terminal v1.0")
    console.log("-----------------------------\n")

    console.log("Escolha uma opção:")
    console.log("1. Listar notas")
    console.log("2. Ler nota")
    console.log("3. Criar nota")
    console.log("4. Excluir uma nota")
    console.log("5. Sair")

    rl.question("Digite o número da opção desejada:", (option) => {
        switch (option) {
            case "1":
                listNotes()
                askForNextAction()
                break
            case "2":
                readNote()
                break
            case "3":
                creadteNote()
                break
            case "4":
                deleteNote()
                break
            case "5":
                console.log("Saindo...")
                return rl.close()
            default:
                console.log("Opção inválida!")
        }

    })
}


main()