/*
Crie uma função chamada updateNestedProperty que receba um objeto com uma estrutura aninhada e altere uma propriedade dentro do objeto aninhado. Observe se a alteração persiste fora da função.
*/

function updateNestedProperty(user) {
    user.details.age = 15;
}

// Exemplo de uso:
let user = { name: "Carol", details: { age: 28 } };
updateNestedProperty(user);
console.log(user.details.age); // Deve refletir a alteração feita na função