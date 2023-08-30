function verificarNumero() {
    // Obtener el valor ingresado por el usuario
    var numero = parseFloat(document.getElementById("numero").value);

    // Verificar si el número es mayor que 0 y mostrar el ejer2
    if (numero > 0) {
        document.getElementById("ejer2").textContent = "El número es mayor que 0.";
    } else if (numero === 0) {
        document.getElementById("ejer2").textContent = "El número es igual a 0.";
    } else {
        document.getElementById("ejer2").textContent = "El número no es mayor que 0.";
    }
}