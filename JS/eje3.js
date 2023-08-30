function verificarNumero2() {
    // Obtener el valor ingresado por el usuario
    var numero = parseFloat(document.getElementById("numero2").value);

    // Verificar si el número es mayor que 0 y mostrar el ejer3
    if (numero > 0) {
        document.getElementById("ejer3").textContent = "El número es mayor que 0.";
    } else if (numero === 0) {
        document.getElementById("ejer3").textContent = "El número es igual a 0.";
    } else {
        document.getElementById("ejer3").textContent = "El número no es mayor que 0.";
    }
    
    if (numero%2 == 0){
        document.getElementById("ejer3_1").textContent = "El número es par.";
    }
    
    else {
        document.getElementById("ejer3_1").textContent = "El número no es par.";
    }
}