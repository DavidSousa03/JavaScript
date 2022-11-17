let x = Number(prompt("Digite um numero"))
let y = Number(prompt("Digite um numero"))
 let soma = 0
if (x > y ) {
   let troca = x  
   x = y 
   y = troca 
}
x = x + 1 
for(x; x < y ; x++){     
    if(x % 2 !== 0){
      soma = soma + x 
      console.log(x)
    }
}
console.log(`SOMA DOS IMPARES = ${soma}`)