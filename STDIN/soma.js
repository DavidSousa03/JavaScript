let input = require("fs").readFileSync('stdin','utf-8')
let valores = input.split('\r\n')
let numero1 = Number(valores[0])
let numero2 = Number(valores[1])
let soma = numero1 + numero2
console.log(soma)
