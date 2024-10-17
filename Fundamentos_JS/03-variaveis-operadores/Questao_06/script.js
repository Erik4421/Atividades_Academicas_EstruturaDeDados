function funcao() {
    var n1 = parseFloat(document.getElementById("n1").value);
    
    let celsius = n1 * (9/5) + 32;

    alert("Fahrenheit: " + celsius.toFixed(2));
}