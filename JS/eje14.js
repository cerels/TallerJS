function nivel() {
  var sueldo = parseFloat(document.getElementById("sueldo").value);
  var tiempo = parseFloat(document.getElementById("tiempo").value);

  if (sueldo <= 500 && tiempo < 4) {
    document.getElementById("ejer14").innerHTML = "el empleado es Nivel 1";
  } else if (sueldo > 500 && tiempo < 4) {
    document.getElementById("ejer14").innerHTML = "el empleado es Nivel 2";
  } else if (tiempo >= 10) {
    document.getElementById("ejer14").innerHTML = "el empleado es Nivel 3";
  } else if (sueldo < 2000 && tiempo >= 5 && tiempo <= 9) {
    document.getElementById("ejer14").innerHTML = "el empleado es Nivel 4";
  } else {
    document.getElementById("ejer14").innerHTML = "el empleado es Nivel 0";
  }
}
