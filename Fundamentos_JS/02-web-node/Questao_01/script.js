
const n1 = parseFloat(prompt("Digite o numero 1:"));
const n2 = parseFloat(prompt("Digite o numero 2:"));

const op = prompt("Digite o operador(+, -,*, /):");

switch (op) {
    case '+':
        alert(n1+n2)
        break;

    case '-':
        alert(n1-n2)
        break;

    case '*':
        alert(n1*n2)
        break;

    case '/':
        alert(n1/n2)
        break;
    
    default:
        alert("Poxa...")
        break;
}
