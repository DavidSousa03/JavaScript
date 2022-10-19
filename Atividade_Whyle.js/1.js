const input= require("fs").readFileSync("stdin", "utf-8")
let [notal, nota2, nota3,  nota4] = input.split("\r\n").map(item => Number(item))
let media = (notal + nota2 + nota3)/3
console.log(`MEDIA - ${media.toFixed(1)}`)