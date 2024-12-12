/*
Dado um array de números, use filter() e uma arrow function para retornar um novo array contendo apenas os números ímpares.
*/

// Exemplo de uso:
const numbers = [1, 2, 3, 4, 5, 6, 7];
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5, 7]