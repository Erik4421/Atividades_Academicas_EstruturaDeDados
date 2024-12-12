/*
Crie uma função chamada incrementNumber que recebe um número como parâmetro e tenta incrementar esse valor em 1. Fora da função, chame-a com um número e imprima o valor antes e depois da chamada. O número foi alterado fora da função?
*/

function incrementNumber(numero) {
    return numero + 1;
}

// Exemplo de uso:
let num = 5;

console.log("Dentro da função:", incrementNumber(num));
console.log("Fora da função:", num); // Deve imprimir 5