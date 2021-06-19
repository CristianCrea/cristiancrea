

let nombre = prompt("Para comenzar con la experiencia de compra ingresa tu nombre");
let msg;
let medida;

while (msg != "ver cuadros") {
  msg = prompt("Ingresa la palabra de tu referencia favorita, elefante, caballo, flamingo, toronja");
  switch (msg) {
    case "elefante":
      alert("Hola " + nombre + " " + "en espacio queda bien un Elefante de Mañana en Oleo sobre lienzo, 100 x 70cms por 650.000, escribe ver cuadros para verlo");
      break;

    case "cabello":
      alert("Hola " + nombre + " " + "en espacio queda bien un Galopando Colores en Oleo sobre lienzo, 120 x 80cms por 700.000, escribe ver cuadros para verlo");
      break;

    case "flamingo":
      alert("Hola " + nombre + " " + "en espacio queda bien un Tropical flamingo en Oleo sobre lienzo, 150 x 210cms por 750.000, escribe ver cuadros para verlo");
      break;

    case "toronja":
      alert("Hola " + nombre + " " + "en espacio queda bien un Jungle orange en Oleo sobre lienzo, 80 x 50cms por 800.000, escribe ver cuadros para verlo");
      break;

    default:
      alert("Bienvenido a Didacus Shop");
      break;
  }
}


//Creación de objetos, función constructora y método de las obras de arte

function obraDeArte (nombre, sustrato, tamaño, precio) {
  this.nombre = nombre;
  this.sustrato = sustrato;
  this.tamaño = tamaño;
  this.precio = precio
}

let cuadelefante = new obraDeArte("Elefante de Mañana", "Oleo sobre lienzo", "100 x 70cms", "650.000");
let caballo = new obraDeArte("Galopando Colores", "Oleo sobre lienzo", "120 x 80cms", "700.000");
let flamingo = new obraDeArte("Tropical flamingo", "Oleo sobre lienzo", "150 x 210cms", "750.000");
let toronja = new obraDeArte("Jungle orange", "Oleo sobre lienzo", "80 x 50cms", "800.000");

console.log(elefante);
console.log(caballo);
console.log(flamingo);
console.log(toronja);




