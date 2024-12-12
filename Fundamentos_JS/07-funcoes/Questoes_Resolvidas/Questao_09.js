/*
Crie uma função chamada updatePerson que receba um objeto person com as propriedades name e age, e altere o valor de age. Fora da função, imprima o objeto antes e depois de chamar a função. O valor do objeto mudou fora da função?
*/

function updatePerson(person) {
    person.age = 30;
    console.log("Dentro da função:", person.age);
}

// Exemplo de uso:
let person = { name: "Alice", age: 25 };
console.log("Antes da função:", person.age)
updatePerson(person);
console.log("Depois da função:", person.age); // Deve refletir a mudança feita na função