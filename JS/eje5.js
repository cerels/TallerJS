function cambiarVariables(){
    var numero1 = parseFloat(document.getElementById("numero5_1").value);
    var numero2 = parseFloat(document.getElementById("numero5_2").value);
    
    if (numero1 > numero2) {
        document.getElementById("ejer5").innerHTML = "Se cambiaron los valores de las variables:<br>Variable 1: " + numero2 + "<br>Variable 2: " + numero1;
    } else {
        document.getElementById("ejer5").innerHTML = "No se cambiaron los valores de las variables:<br>Variable 1: " + numero1 + "<br>Variable 2: " + numero2;
    }
}
