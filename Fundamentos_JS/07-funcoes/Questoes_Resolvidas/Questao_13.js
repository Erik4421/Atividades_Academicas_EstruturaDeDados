/*
Crie uma função chamada addToCopy que receba um array e um valor. A função deve adicionar o valor a uma cópia do array e retornar essa cópia sem modificar o array original. Verifique se o array original foi alterado.
*/

function addToCopy(array, valor) {
    let arrayCopy = array.slice()
    arrayCopy.push(valor)

    return arrayCopy;
}

// Exemplo de uso:
let originalArray = [1, 2, 3];
let newArray = addToCopy(originalArray, 4);

console.log(originalArray); // Deve imprimir [1, 2, 3]
console.log(newArray); // Deve imprimir [1, 2, 3, 4]