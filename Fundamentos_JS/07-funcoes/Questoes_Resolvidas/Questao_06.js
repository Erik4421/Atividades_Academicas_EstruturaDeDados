/*
Crie uma função chamada filtrarProdutos que receba um array de objetos representando produtos (com propriedades nome e preco) e um callback que define o critério de filtro (como produtos com preco maior que 20). A função deve retornar um array de produtos filtrados.
*/

function filtrarProdutos(produtos, f) {
    let resultado = []

    for (const produto of produtos) {
        if (f(produto)) {
            resultado.push(produto)
        }
    }
    
    return resultado;
}

// Exemplo de uso:
let produtos = [
    { nome: "Camiseta", preco: 25 },
    { nome: "Calça", preco: 50 },
    { nome: "Meias", preco: 5 }
  ];
  let produtosFiltrados = filtrarProdutos(produtos, function(produto) {
    return produto.preco > 20;
  });
  console.log(produtosFiltrados); // Deve retornar [{nome: "Camiseta", preco: 25}, 