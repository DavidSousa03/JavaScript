const input = require('prompt-sync')()

const cMedia = (n1, n2, n3, n4) => {   
    const media = (n1 + n2 + n3 + n4)/4 
    return media.toFixed(1)
}
const n1 = Number(prompt("Digite a primeira nota:" ))  
const n2 = Number(prompt("Digite a segunda nota:" ))  
const n3 = Number(prompt("Digite a terceira nota:" ))  
const n4 = Number(prompt("Digite a quarta nota:" ))  

console.log(`Nota final =${cMedia(n1, n2, n3, n4)}`)