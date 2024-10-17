function funcao() {
    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;

    if (valor1 === valor2) {
        alert(`(${valor1}) é igual a (${valor2})`)
    } else {
        alert(`(${valor1}) é diferente de (${valor2})`)
    }

}