
let nombre = prompt("Ingrese su Nombre");   
console.log("El nombre ingresado es:" + nombre);

let apellido = prompt("Ingrese su Apellido");
console.log("El apellido ingresado es:" + apellido);

let verificacion = prompt("Verifique su edad");
console.log("La edad ingresada es:" + verificacion);

let edad = parseInt(verificacion);

if (!isNaN(edad)) {
    if (edad >= 18) {
        alert("Sos mayor de edad.");
    } else {
        alert("Sos menor de edad.");
    }
} 
else {
    alert("Por favor, ingresá un número válido.");
}

function esNuevoUsuario (){
    let nuevo = prompt("¿Es usted nuevo en la pagina?");
    console.log("¿El usuario es nuevo?:" + nuevo);
}

esNuevoUsuario ();

let condiciones = prompt("¿Acepta los términos y condiciones?");

while (condiciones != "si") {
    alert ("El usuario no aceptó los términos y condiciones");

    condiciones = prompt ("Ingresar otra opcion");
}