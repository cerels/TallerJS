function cambiarVariable(){
    var numero1 = parseFloat(document.getElementById("numero12_1").value);
    var numero2 = parseFloat(document.getElementById("numero12_2").value);
    var numero3 = parseFloat(document.getElementById("numero12_3").value);
    
    if (numero2 > numero1 && numero2>numero3) {
        document.getElementById("ejer12").innerHTML = "Se cambiaron los valores de las variables:<br>Variable 1: " + numero2 + "<br>Variable 2: " + numero3 + "<br>Variable 3: " + numero1;
    } else {
        document.getElementById("ejer12").innerHTML = "No se cambiaron los valores de las variables:<br>Variable 1: " + numero1 + "<br>Variable 2: " + numero2 + "<br>Variable 3: " + numero3;
    }
}
