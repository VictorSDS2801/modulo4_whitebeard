function serprimo(numero) {
    if (numero <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i == 0) {
            return false
        }
    }
    return true
}

function programa() {
    process.stdout.write("Digite aqui um número para verificar se ele é primo: ")
    process.stdin.once("data", (data) => {
        let numero = parseInt(data.toString().trim())
        if (isNaN(numero)) {
            console.log("Digite um número.")
            programa()
            return
        }
        if (serprimo(numero)) {
            console.log("O número " + numero + " é primo!")
            process.exit()
        }
        else {
            console.log("O número " + numero + " não é primo!")
            process.exit()
        }
    })
}
programa()