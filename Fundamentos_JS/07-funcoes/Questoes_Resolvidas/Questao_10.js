/*
Crie uma função chamada addItem que recebe um array e um valor, e adiciona esse valor ao final do array. Fora da função, imprima o array antes e depois de chamar a função. O array foi alterado fora da função?
*/

function addItem(numbers, n) {
    numbers.push(n)
    console.log("Dentro da função:", numbers)
}

// Exemplo de uso:
let numbers = [1, 2, 3];
console.log("Antes da função:", numbers);
addItem(numbers, 4);
console.log("Depois da função:", numbers); // Deve incluir o novo item [1, 2, 3, 4]