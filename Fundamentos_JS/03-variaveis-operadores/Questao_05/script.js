function funcao() {
    var n1 = parseFloat(document.getElementById("n1").value);
    
    let area = 3.1415 * (n1 ** 2)
    let perimetro = (2 * 3.1415) * n1

    alert("Area: " + area.toFixed(2) + "\n" + "Perimetro: " + perimetro.toFixed(2));
}