function estado() {
    var nota = parseFloat(document.getElementById("note").value);
    
    if (nota==5.0) {
        document.getElementById("ejer9").innerHTML = "Estado: EXCELENTE";
    }
    
    else if (nota<5 && nota>=4) {
        document.getElementById("ejer9").innerHTML = "Estado: BUENO";
    }
    
    else if (nota<4 && nota>=3) {
        document.getElementById("ejer9").innerHTML = "Estado: REGULAR";
    }
    else if (nota<3 && nota>=0) {
        document.getElementById("ejer9").innerHTML = "Estado: DEFICIENTE";
    } else{
        document.getElementById("ejer9").innerHTML = "Estado: N/A";
    }
}