document.addEventListener("DOMContentLoaded", function () {
    const val_pasaje = 1700
    const inputElement = document.getElementById("textInput");
    const submitButton = document.getElementById("submitButton");
    const outputElement = document.getElementById("ejer1");

    submitButton.addEventListener("click", function () {
        const inputValue = inputElement.value;
        outputElement.textContent = "Usted tiene " + Math.trunc(inputValue/val_pasaje) + " pasajes";
        
        if (Math.trunc(inputValue/val_pasaje)<2){
            window.alert("ATENCION: usted tiene menos de 2 pasajes, deberia recargar")
        }
    });
});