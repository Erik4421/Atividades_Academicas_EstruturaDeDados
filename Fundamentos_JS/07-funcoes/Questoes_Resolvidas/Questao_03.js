function filtrar(array, f) {
    const resultado = []
    
    for (let i = 0; i < array.length; i++) {
        let numero = array[i]
        if (f(numero)) {
            resultado.push(numero)
        }
    }

    return resultado;
}

// Exemplo de uso:
let numeros = [1, 12, 5, 8, 130, 44];
let pares = filtrar(numeros, function(numero) {
    return numero % 2 === 0;
});
console.log(pares); // Deve retornar [12, 8, 130, 44]


  
// Maiores que dez

let maiores = maioresQueDez(numeros, function(numero) {
    return numero % 2 === 0 && numero > 10;
});

function maioresQueDez(array, f) {
    const resultado = []
    
    for (let i = 0; i < array.length; i++) {
        let numero = array[i]
        if (f(numero)) {
            resultado.push(numero)
        }
    }

    return resultado;
}

console.log(maiores);