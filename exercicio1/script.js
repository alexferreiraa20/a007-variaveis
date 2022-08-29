let nome = prompt("Qual o seu nome?")
let idade = Number  (prompt("Qual sua idade"))
console.log(typeof nome, nome)
console.log(typeof idade, idade)
// foi verificado que o nome consta como uma string pois trata-se de um texto, determinado no prompt "qual seu nome?"
// no segundo caso, foi atribuido o número para que a página identificasse que o valor atribuido é um número e não um texto
console.log(`Olá ${nome}, você tem ${idade} anos`)