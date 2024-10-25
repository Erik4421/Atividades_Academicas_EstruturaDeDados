

// Exemplo de uso:
let nomes = ["Alice", "Bob", "Carlos"];
let objetos = criarObjetos(nomes, function(nome) {
  return { nome: nome };
});
console.log(objetos); // Deve retornar [{nome: "Alice"}, {nome: "Bob"}, {nome: "Carlos"}]
