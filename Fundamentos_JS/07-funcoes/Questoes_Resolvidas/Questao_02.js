
function saudar(nome, f) {
    f(nome)
}

saudar("Alice", function(nome) {
    console.log("Olá, " + nome + "!");
  });