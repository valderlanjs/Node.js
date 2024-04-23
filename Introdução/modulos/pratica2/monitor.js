const os = require("node:os")
const fs = require("node:fs")
const path = require("node:path")


const systemPlatoformMap = {
    "win32": "Windows",
    "linux": "Linux",
    "darwin": "MacOS",
    "freebsd": "FreeBSD"
}

function getSystemInfo() {

    const system = systemPlatoformMap[os.platform()]
    const arch = os.arch()
    const cpu = os.cpus()[0].model

    const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24)
    const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60

    const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60)
    const uptimeHoursInSeconds = uptimeHours * 60 * 60

    const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
    const uptimeMinsInSeconds = uptimeMins * 60

    const uptimeSecs = Math.floor(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)

    const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`

    const ramTotal = os.totalmem() / 1024 / 1024 / 1024
    const ramUsage = (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024 
    const ramUsagePercent = Math.round((ramUsage / ramTotal) * 100)

    return { system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent}
}


function printLog({ system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent}) {

    console.clear()
    console.log("DETALHES DO SISTEMA")
    console.log(`Sistema Operacional: ${system}`)
    console.log(`Arquitetura: ${arch}`)
    console.log(`Modelo do processador: ${cpu}`)
    console.log(`Tempo de atividade do sistema: ${uptime}`)
    console.log(`Uso de memória RAM: ${ramUsage.toFixed(1)} GB de ${ramTotal.toFixed(1)} GB (${ramUsagePercent} %) `)
}

function saveLog({ system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent}) {
    const logContent = `DETALHES DO SISTEMA | Sistema Operacional: ${system} 
    | Arquitetura: ${arch} 
    | Modelo do processador: ${cpu} 
    | Tempo de atividade do sistema: ${uptime} 
    | Uso de memória RAM: ${ramUsage.toFixed(1)} GB de ${ramTotal.toFixed(1)} GB (${ramUsagePercent} %)\n---\n`

    const logDir = path.join("/", "log")

    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir)
    }

    const logFilePath = path.join(logDir, "log.txt")
    fs.appendFileSync(logFilePath, logContent)
}



setInterval(() => {
    const systemInfo = getSystemInfo()
    printLog(systemInfo)
    saveLog(systemInfo)
}, 1000)