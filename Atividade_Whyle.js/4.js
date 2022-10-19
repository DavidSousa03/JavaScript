const input= require("fs").readFileSync("stdin", "utf-8")
let [codigo, qtd] = input.split("\r\n").map(intem =>Number(intem))
let objeto = [
  {
    CódigodoProduto: 1,
    Preçodoproduto: 5.00,
    Nome: "Cachorro Quente"
  },  
  {
    CódigodoProduto: 2,
    Preçodoproduto: 3.50,
    Nome: 'Sanduíche Natural'
  },
  {
    CódigodoProduto: 3,
    Preço_do_produto: 4.80,
    Nome: "Bolo"
   
  },
  {
    CódigodoProduto: 4,
    Preçodoproduto: 8.90,
    Nome: "misto qunte "
   
  },
  {
    CódigodoProduto: 5,
    Preçodoproduto: 7.30,
    Nome: "Coca cola"
   
  },
]
switch(codigo){ 
    case 1:
        console.log(`
        Produto selecionado: 1
        Nome do produto: ${objeto[0].Nome}
        Preço unitário: R$ ${objeto[0].Preçodoproduto}
        Total a pagar: R$ ${objeto[0].Preçodoproduto*qtd}
        `)
       
    break;
    case 2:
        console.log(`
        Produto selecionado: 2
        Nome do produto: ${objeto[1].Nome}
        Preço unitário: R$ ${objeto[1].Preçodoproduto}
        Total a pagar: R$ ${objeto[1].Preçodoproduto*qtd}
        `)
    break;    
    case 3:
        console.log(`
        Produto selecionado: 3
        Nome do produto: ${objeto[2].Nome}
        Preço unitário: R$ ${objeto[2].Preçodoproduto}
        Total a pagar: R$ ${objeto[2].Preçodoproduto*qtd}
        `)
    break;    
    case 4:
        console.log(`
        Produto selecionado: 4
        Nome do produto: ${objeto[3].Nome}
        Preço unitário: R$ ${objeto[3].Preçodoproduto}
        Total a pagar: R$ ${objeto[3].Preçodoproduto*qtd}
        `)
    break;    
    case 5:
        console.log(`
        Produto selecionado: 5
        Nome do produto: ${objeto[4].Nome}
        Preço unitário: R$ ${objeto[4].Preçodoproduto}
        Total a pagar: R$ ${objeto[4].Preçodoproduto*qtd}
        `)
    break;    
}

 
