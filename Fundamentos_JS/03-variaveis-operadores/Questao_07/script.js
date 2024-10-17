function funcao() {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseInt(document.getElementById("n2").value);
    
    let salario = n1 * n2;

    alert("Salario anual: " + salario.toFixed(2));
}