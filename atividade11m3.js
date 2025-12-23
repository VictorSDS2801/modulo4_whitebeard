const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})
let listausuarios = []

function programa() {
    console.log("\nBem vindo ao cadastro de usuários!")
    console.log("Digite 1 se você deseja adicionar um novo usuário.")
    console.log("Digite 2 se você deseja buscar um usuário pelo seu email.")
    console.log("Digite 3 se você deseja sair do programa.")
    rl.question("Digite aqui sua resposta: ", escolha)
}
function escolha(opcao) {
    switch(opcao) {
        case '1':
            addusuario()
            break
        case '2':
            buscarusuario()
            break
        case '3':
            rl.close()
            break
        default:
            console.log("Digite um número correspondente.")
            programa()
    }
}
function addusuario() {
    rl.question("\nDigite aqui o nome do usuário que você deseja adicionar: ", (nome) => {
        rl.question("Digite o email do novo usuário: ", (email) => {
            rl.question("Digite a idade do novo usuário: ", (idade) => {
                let nomeusuario = nome.trim()
                let emailusuario = email.trim()
                let idadeusuario = parseInt(idade.trim())

                listausuarios.push({nome: nomeusuario, email: emailusuario, idade: idadeusuario})
                console.log("Usuário adicionado com sucesso!\n")
                programa()
            })
        })
    })
}
function buscarusuario() {
    rl.question("\nDigite o email do usuario que você quer buscar: ", (email) => {
        let emailbuscar = email.trim()

        let usuario = listausuarios.find(u => u.email === emailbuscar);

        if (usuario) {
            console.log("\nUsuário encontrado!\n")
            console.log("nome:", usuario.nome, "email:", usuario.email,"idade:", usuario.idade)
            programa()
        }
        else {
            console.log("\nEsse usuário não existe!")
            programa()
        }
    })
}
programa()