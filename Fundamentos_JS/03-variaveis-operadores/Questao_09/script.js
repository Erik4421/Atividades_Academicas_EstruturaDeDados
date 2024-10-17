function funcao() {
    const valor1 = document.getElementById("valor").value;
    const valor2 = document.getElementById("valor2").value;

    var booleano1;
    var booleano2;

    if (valor1 == "True") {
        booleano1 = true;
      } else if (valor1 == "False") {
        booleano1 = false;
      } else {
        alert("Entrada inválida! Digite 'True' ou 'False'.");
      }
    
    if (valor2 == "True") {
        booleano2 = true;
      } else if (valor2 == "False") {
        booleano2 = false;
      } else {
        alert("Entrada inválida! Digite 'True' ou 'False'.");
      }

   alert(booleano1 & booleano2)
   alert(booleano1 | booleano2)
   alert(~booleano1)
   alert(~booleano2)
}