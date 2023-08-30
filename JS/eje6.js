function calculaNota(){
    var numero1 = parseFloat(document.getElementById("numero6_1").value);
    var numero2 = parseFloat(document.getElementById("numero6_2").value);
    var numero3 = parseFloat(document.getElementById("numero6_3").value);
    
    var nota_final = parseFloat((numero1*0.3 + numero2*0.3 + numero3*0.4).toFixed(2));
    
    
    if (nota_final>=3.2) {
        document.getElementById("ejer6").innerHTML = "usted aprobó con: " + nota_final;
    } else {
        document.getElementById("ejer6").innerHTML = "usted reprobó con: " + nota_final;
    }
}
