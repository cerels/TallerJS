function monitor(){
    let ant = document.getElementById("antecedentes").value;
    var prom = parseFloat(document.getElementById("promedio").value);
    
    if(prom>4 && ant==="No"){
        document.getElementById("ejer13").innerHTML = "Usted puede ser monitor de la institución";
    } else{
        document.getElementById("ejer13").innerHTML = "Usted no puede ser monitor de la institución";
    }
    
}