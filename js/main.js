let bienvenida = "Bienvenidos al curso de js";

console.log(bienvenida);

let usuarioValido = "CursoJS";
let contrasenaValida = "CoderHouse";

let usuario = prompt("Ingrese su nombre de usuario:");
console.log("El usuario ingresado es:" + usuario);

let contrasena = prompt("Ingrese su contraseña:");
console.log("La contraseña ingresada es:" + contrasena);

if (usuario === usuarioValido && contrasena === contrasenaValida) {
    alert("¡Inicio de sesión exitoso!");
} 
else {
    alert("Ups, algo salió mal! Usuario o contraseña incorrectos. Inténtalo de nuevo.");
}