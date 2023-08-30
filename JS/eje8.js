function maximo (){
    var numero1a = parseFloat(document.getElementById("num8a_1").value);
    var numero2a = parseFloat(document.getElementById("num8a_2").value);
    var numero3a = parseFloat(document.getElementById("num8a_3").value);
    
    document.getElementById("ejer8a").innerHTML = "El numero mayor entre los ingresados es: " + Math.max(numero1a, numero2a, numero3a);
    
}

function minimo (){
    var numero1b = parseFloat(document.getElementById("num8b_1").value);
    var numero2b = parseFloat(document.getElementById("num8b_2").value);
    var numero3b = parseFloat(document.getElementById("num8b_3").value);
    
    document.getElementById("ejer8b").innerHTML = "El numero menor entre los ingresados es: " + Math.min(numero1b, numero2b, numero3b);
    
}

function promedio (){
    var numero1c = parseFloat(document.getElementById("num8c_1").value);
    var numero2c = parseFloat(document.getElementById("num8c_2").value);
    var numero3c = parseFloat(document.getElementById("num8c_3").value);
    
    var prom = (numero1c + numero2c + numero3c)/3
    
    document.getElementById("ejer8c").innerHTML = "El promedio es: " + prom;
    
}

function whatCase(){
    let letter = document.getElementById("lttr").value;
    
    if (!isNaN(parseFloat(letter))){
        document.getElementById("ejer8d").innerHTML = "no es una letra. es un numero";
    }
    
    else if(letter === letter.toUpperCase()) {
        document.getElementById("ejer8d").innerHTML = "La letra es mayúscula";
    } else {
        document.getElementById("ejer8d").innerHTML = "La letra es minúscula";
    }
    
}

function isANumber(){
    let letter = document.getElementById("nmbr").value;
    
    if (!isNaN(parseFloat(letter))){
        document.getElementById("ejer8e").innerHTML = "Es un numero";
        }
    else {
        document.getElementById("ejer8e").innerHTML = "no es un numero";
    }
    
    }