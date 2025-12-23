let numerojogo = Math.floor((Math.random() * 100) + 1)

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Seja bem vindo ao jogo de advinhação!")
console.log("Nesse jogo, o programa irá criar um número aleatório entre 1 e 100, e você terá 20 chances para acertar qual é esse número.")
console.log("Vamos começar!")

let tentativas = 20
function tentativa() {
    
    rl.question("Digite um número para ver se você acertou: ", (tentativaa) => {
        let tentativaatual = parseInt(tentativaa.trim())
        
        if (isNaN(tentativaatual) || tentativaatual > 50 || tentativaatual < 1) {
            console.log("Digite um número entre 1 e 100.")
            return tentativa()
        }
        if (tentativaatual == numerojogo) {
            console.log("Parabens! Você acertou o número!")
            rl.close()
            return
        }
        if (tentativas > 0 && tentativaatual != numerojogo) {
            tentativas--
            console.log("Você não acertou o número, tente novamente! Ainda te restam " + tentativas + " tentativas.")
            return tentativa()
        }
        else {
            console.log("Você perdeu o jogo!")
            rl.close()
        }

    })
}
tentativa()