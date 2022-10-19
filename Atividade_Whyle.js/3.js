const input= require("fs").readFileSync("stdin", "utf-8")
let funcionario = input.split("\r\n")
let nome = funcionario[0]
let salariomin = Number(funcionario[1])
let vendas = Number(funcionario[2]) 
let bonus = (vendas * 15)/100
let sTotal = salariomin + bonus 
console.log(`Funcionario: ${nome}`)
console.log(`Bônus: ${bonus.toFixed(2)}`)
console.log(`Salario Total: ${sTotal.toFixed(2)}`)
