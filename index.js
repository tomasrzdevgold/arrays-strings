/*
exercicio 1

primeiro console.log,  da undefined

segundo console.log, da null

terceiro console.log,  da 11

cuarto console.log, da 3

quinto console.log, da 19

sexto console.log,  da 9


exercicio 2

aprarece: SUBI NUM ONIBUS EM MIRROCOS 27

*/

//exercicio 1 codigo


let emailUsuario = prompt("qual é seu email")
let nomeUsuario = prompt("qual vai ser seu nome de usuario")

console.log(`o email ${emailUsuario} foi cadastrado com sucesso.
Seja bem-vindo(a), ${nomeUsuario}`)



//exercicio 2 codigo


const comidas = ["cachapa", "cochino frito", "parilla", "arepa", "hamburguesa"]

console.log(comidas)

console.log(`essas são as minhas comidas preferidas
${comidas[0]} 
${comidas[1]}
${comidas[2]} 
${comidas[3]}
${comidas[4]} 
`)

const comidaUsuario = prompt("qual é a sua comida favorita")
comidas.splice(1,1,comidaUsuario)

console.log(comidas) 


//exercicio 3

const listaDeTarefas = []

tarefa1 = prompt("qual é sua primeira tarefa")
tarefa2 =prompt("qual é sua segunda tarefa")
tarefa3 = prompt("qual é sua terceira tarefa")


listaDeTarefas.splice(0,0,tarefa1,tarefa2,tarefa3)

console.log(listaDeTarefas)

const indiceUsuario = prompt("digite o indice que deseja apagar, 0, 1 ou 2")

const removerIndice = listaDeTarefas.splice(indiceUsuario,1)

console.log(listaDeTarefas)
