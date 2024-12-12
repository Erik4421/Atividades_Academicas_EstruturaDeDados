/*
Crie uma função chamada appendString que receba uma string e tente adicionar um valor a ela. Chame essa função passando uma string e verifique se a string foi alterada fora da função.
*/
// Exemplo de uso:

function appendString(str1, str2) {
    str1 += str2;
    console.log("Dentro da função:", str1)
}

let str = "Hello";
appendString(str, " World");
console.log("Fora da função:", str); // Deve imprimir "Hello"
