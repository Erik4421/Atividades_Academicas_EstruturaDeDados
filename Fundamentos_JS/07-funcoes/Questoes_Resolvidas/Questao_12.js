/*
Crie uma função chamada updatePersonCopy que receba um objeto person e altere o valor de uma de suas propriedades, mas primeiro faça uma cópia do objeto. Fora da função, verifique se o objeto original foi alterado.
*/

function updatePersonCopy(person) {
    personCopy = person;
    personCopy.age = 35;
}

// Exemplo de uso:
let person = { name: "Bob", age: 30 };
updatePersonCopy(person);
console.log("Fora da função:", person.age); // Deve imprimir 30