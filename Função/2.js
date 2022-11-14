function triangulo(lado1 , lado2, lado3){
    areaDoTriangulo = lado1 * lado3/2
    return areaDoTriangulo.toFixed(3)
}
function circulo(lado1 , lado2, lado3){
    areaDoCirculo = 3.14159 * lado3**2
    return areaDoCirculo.toFixed(3)
}
function trapezio(lado1 , lado2, lado3){
    areaDoTrapezio = 1/2 * lado3 *(lado1 + lado2) 
    return areaDoTrapezio.toFixed(3)
}
function quadrado(lado1 , lado2, lado3){
    areaDoQuadrado = lado2**2
    return areaDoQuadrado.toFixed(3)
}
function retangulo(lado1 , lado2, lado3){
    areaDoRetangulo = lado1 * lado2
    return areaDoRetangulo.toFixed(3)
}

const lado1 = Number(prompt('Digite o primeoro valor:' ))
const lado2 = Number(prompt('Digite o segundo valor:' ))
const lado3 = Number(prompt('Digite o terceiro valor:' ))


console.log(` Triangulo: ${triangulo(lado1, lado2, lado3)}`) 
console.log(`Circulo: ${circulo(lado1 , lado2, lado3)}`)  
console.log(`Trapezio: ${trapezio(lado1 , lado2, lado3)}`) 
console.log(`Quadrado: ${quadrado(lado1 , lado2, lado3)}`)
console.log(`Retangulo: ${retangulo(lado1 , lado2, lado3)}`)

