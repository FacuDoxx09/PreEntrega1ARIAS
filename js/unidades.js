
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
console.log("¿El ususario acepta los terminos y condiciones?:" + condiciones);

let compra = prompt("¿Desea adquirir una de las unidades?");

while (compra != "si") {
    alert ("El usuario no desea adquirir una unidad");

    compra = prompt ("Ingresar otra opcion");
}
console.log("¿El ususario desea adquirir una propiedad?:" + compra);

const departamentos = [
    { id: 1, nombre: "Departamento 2 Ambientes", precio: 120000 },
    { id: 2, nombre: "Departamento 3 Ambientes", precio: 250000 },
    { id: 3, nombre: "Departamento 4 Ambientes", precio: 580000 },
];

function mostrarMenu(departamentos) {
    let mensaje = "Seleccione un departamento ingresando el número:\n";
    departamentos.forEach(depto => {
        mensaje += `${depto.id}. ${depto.nombre} - $${depto.precio} USD\n`;
    });
    return mensaje;
}

function calcularCotizacion(departamento, cuotas) {
    const tasaInteres = 0.0005;
    const precioFinal = departamento.precio * (1 + tasaInteres * cuotas);
    const precioMensual = (precioFinal / cuotas).toFixed(2);
    return { precioFinal, precioMensual };
}

function procesarCompra(departamento) {
    let cuotas = parseInt(prompt("Ingrese el número de cuotas en el que desea pagar (Se le aplicara una tasa de interes y el precio final reflejado la incluye):"));
    
    if (cuotas > 0) {
        const { precioFinal, precioMensual } = calcularCotizacion(departamento, cuotas);
        alert(`El precio final en ${cuotas} cuotas es de $${precioFinal.toFixed(2)} USD.`);
        alert(`El precio mensual sería de $${precioMensual} USD.`);
        
        let confirmacion = prompt(`¿Desea proceder con la compra del ${departamento.nombre} por $${precioFinal.toFixed(2)} USD en ${cuotas} cuotas? (si/no)`).toLowerCase();
        
        if (confirmacion === "si") {
            alert(`¡Gracias por tu compra del ${departamento.nombre}!`);
        } else {
            alert("Compra cancelada.");
        }
    } else {
        alert("Número de cuotas inválido.");
    }
}

let seleccion = parseInt(prompt(mostrarMenu(departamentos)));
let departamentoSeleccionado = departamentos.find(depto => depto.id === seleccion);

if (departamentoSeleccionado) {
    alert(`Has seleccionado el ${departamentoSeleccionado.nombre} con un precio de $${departamentoSeleccionado.precio} USD.`);
    procesarCompra(departamentoSeleccionado);
} else {
    alert("Selección no válida. Por favor, ingrese un número correcto.");
}