function determinarEquipo() {
  let edad = parseFloat(document.getElementById("edad").value);
  let cedula = parseFloat(document.getElementById("cedula").value);
  let nombre = document.getElementById("nombre").value;
  let equipo = "";

  if (edad <= 40 && edad >= 25) {
    equipo = "Profesional";
  } else if (edad < 25 && edad >= 18) {
    equipo = "Aficionado";
  } else if (edad < 18 && edad >= 12) {
    equipo = "Novato";
  }

  if (edad <= 40 && edad >= 12) {
    document.getElementById("ejer11").innerHTML =
      "el jugador " +
      nombre +
      " de cedula de ciudadania " +
      cedula +
      " es asignado al equipo " +
      equipo;
  } else {
    document.getElementById("ejer11").innerHTML =
      "Edad no valida, no se puede asignar a un equipo";
  }
}
