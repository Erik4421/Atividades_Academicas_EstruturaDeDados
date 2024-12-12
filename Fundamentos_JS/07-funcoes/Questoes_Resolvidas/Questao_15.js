/*
Crie uma função chamada deepCloneUpdate que receba um objeto aninhado e altere uma de suas propriedades após fazer uma cópia profunda. Fora da função, verifique se o objeto original foi alterado.
*/

function deepCloneUpdate(product) {
    let productCopy = JSON.parse(JSON.stringify(product)) // Eu que fiz, pode alterar
    productCopy.specs.ram = "16GB"
    console.log("Copia: ", productCopy)
}

// Exemplo de uso:
let product = { name: "Laptop", specs: { ram: "8GB" } };
deepCloneUpdate(product);
console.log(product.specs.ram); // Deve imprimir "8GB"