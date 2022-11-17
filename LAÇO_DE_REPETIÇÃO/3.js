let num = Number(prompt("Quantos numero voce vai digitar?"))
for(let y = 0;y < num; y++ ){
    let numero = Number(prompt("Digite um numero"))
    if (numero == 0){
       console.log("NULLO")
    }else if (numero > 0){
        if(numero % 2==0){
            console.log("PAR POSITIVO")
        }    
        else{
            console.log("IMPAR POSITIVO")
        }    
    
    }
    else{
        if(numero% 2 != 0 ){
            console.log ("IMPAR NEGATIVO")
        }else{
            console.log ("PAR NEGATIVO")
        }
        
    }

}