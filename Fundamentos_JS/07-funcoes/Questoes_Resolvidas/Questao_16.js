/*
Crie uma função chamada modifyMatrix que receba uma matriz (array de arrays) e altere um de seus valores internos. Verifique se a matriz original foi alterada fora da função.
*/

function modifyMatrix(matrix) {
    matrix[0][0] = 255
}

// Exemplo de uso:
let matrix = [[1, 2], [3, 4]];
modifyMatrix(matrix);
console.log(matrix); // Deve refletir a alteração feita na função