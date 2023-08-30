function mejorPeor() {
  var numero1a = parseFloat(document.getElementById("num10_1").value);
  var numero2a = parseFloat(document.getElementById("num10_2").value);
  var numero3a = parseFloat(document.getElementById("num10_3").value);

  let bestStudent ="";
  let worstStudent = "";
  
  let notaMayor = Math.max(numero1a, numero2a, numero3a);
  let notaMenor = Math.min(numero1a, numero2a, numero3a);
  
  if (numero1a === notaMayor){
    bestStudent = "estudiante 1"
  }
  else if (numero2a === notaMayor){
    bestStudent = "estudiante 2"
  }
  else if (numero3a === notaMayor){
    bestStudent = "estudiante 3"
  }
  
  
  if (numero1a === notaMenor){
    worstStudent = "estudiante 1"
  }
  else if (numero2a === notaMenor){
    worstStudent = "estudiante 2"
  }
  else if (numero3a === notaMenor){
    worstStudent = "estudiante 3"
  }
  
  
  document.getElementById("ejer10").innerHTML =
    "El estudiante con mejor rendimiento es: " + bestStudent +
    "<br>El estudiante con peor rendimiento es: " + worstStudent;
    
}
