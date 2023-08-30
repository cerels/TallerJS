function determinarClase() {
    var numero = parseFloat(document.getElementById("numero4").value);


if (numero>=2000) {
    document.getElementById("ejer4").textContent = "Puede tomar la clase ejecutiva.";
}
else if (1000 <= numero && numero < 2000) {
    document.getElementById("ejer4").textContent = "Puede tomar la clase Normal.";
}
else if (1 <= numero && numero < 1000) {
    document.getElementById("ejer4").textContent = "Puede tomar la clase Economica.";
} else {
    document.getElementById("ejer4").textContent = "Puntos no validos";
}

}