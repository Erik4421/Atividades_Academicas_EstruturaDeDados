/*
Crie uma função chamada criarObjetos que recebe um array de nomes e um callback que converte cada nome em um objeto com uma propriedade nome. A função deve retornar o novo array de objetos.
*/

function criarObjetos(nomes, f) {
    var resultado = []

    for (const nome of nomes) {
      resultado.push(f(nome))
    }

    return resultado;
}

// Exemplo de uso:
let nomes = ["Alice", "Bob", "Carlos"];
let objetos = criarObjetos(nomes, function(nome) {
  return { nome: nome };
});
console.log(objetos); // Deve retornar [{nome: "Alice"}, {nome: "Bob"}, {nome: "Carlos"}]
