const input= require("fs").readFileSync("stdin", "utf-8")
let dados = input.split ("\r\n")
let nome = dados[0]
let qtdHoras =  Number(dados[1])
let vrDehrs = Number(dados[2])
let salario = qtdHoras * vrDehrs
console.log(`Olá Sr. ${nome}. O salario desse mês é de: R$${salario.toFixed(2)}`)