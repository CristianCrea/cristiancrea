//Desafio entregable clase 3 y 4 Simulador de precio + impuesto de un producto 

function masIva(precio, iva){
      iva = iva || 19
      var coniva = (precio + precio*iva/100);
      return coniva;
    }
    var precio = Number(prompt("Introduce el precio de la obra de arte para calcular su iva y precio final. Las opciones son 650000, 700000, 750000, 800000"));
    var iva = Number(prompt("Introduce el iva del 19% ingresando el numero 19"));
    if(iva > 0){
      var resultado = masIva(precio, iva);
    }
    else{
      var resultado = masIva(precio);
    }
    alert(`El Precio de tu producto sin iva es: ${precio} y el precio más Iva es de: ${resultado}`);

    
/* 

Ejercicio While para elección de producto

let nombre = prompt("Para comenzar con la experiencia de compra ingresa tu nombre");
let msg;
let medida;

while (msg != "ver cuadros") {
  msg = prompt("Ingresa la palabra de tu referencia favorita, elefante, caballo, flamingo, toronja o ver cuadros para salir");
  switch (msg) {
    case "elefante":
      alert("Hola " + nombre + " " + "en tu espacio queda bien un Elefante de Mañana en Oleo sobre lienzo, 100 x 70cms por 650.000, escribe ver cuadros para verlo");
      break;

    case "cabello":
      alert("Hola " + nombre + " " + "en tu espacio queda bien un Galopando Colores en Oleo sobre lienzo, 120 x 80cms por 700.000, escribe ver cuadros para verlo");
      break;

    case "flamingo":
      alert("Hola " + nombre + " " + "en tu espacio queda bien un Tropical flamingo en Oleo sobre lienzo, 150 x 210cms por 750.000, escribe ver cuadros para verlo");
      break;

    case "toronja":
      alert("Hola " + nombre + " " + "en tu espacio queda bien un Jungle orange en Oleo sobre lienzo, 80 x 50cms por 800.000, escribe ver cuadros para verlo");
      break;

    default:
      alert("Bienvenido a Didacus Shop");
      break;
  }
}

*/