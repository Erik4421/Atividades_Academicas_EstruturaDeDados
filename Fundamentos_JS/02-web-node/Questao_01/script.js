function calcular() {
    const n1 = parseInt(document.getElementById("n1").value)
    const n2 = parseInt(document.getElementById("n2").value)
    
    const op = document.getElementById("op").value

    switch (op) {
        case '1':
            alert(n1+n2)
            break;

        case '2':
            alert(n1-n2)
            break;

        case '3':
            alert(n1*n2)
            break;

        case '4':
            alert(n1/n2)
            break;
    
        default:
            alert("Poxa...")
            break;
    }
}
