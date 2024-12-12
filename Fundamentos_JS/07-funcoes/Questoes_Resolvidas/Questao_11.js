/*
Crie uma função chamada changePrimitive que recebe um número, altera o valor dentro da função e depois retorna o novo valor. Fora da função, veja se o número original foi modificado. O valor original mudou?
*/
function changePrimitive(x) {
    x = 5
    return x;
}

// Exemplo de uso:
let x = 10;

console.log("Dentro da função:", changePrimitive(x));
console.log("Depois da função:", x); // Deve imprimir 10