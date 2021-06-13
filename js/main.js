let nombre = prompt("Para comenzar con la experiencia de compra ingresa tu nombre");
let msg;
let medida;

while (msg != "ver cuadros") {
  msg = prompt("¿Te interesa un cuadro personalizado o comprar uno del site? Ingresa la palabra personalizado o pintado para continuar. Escribe la frase ver cuadros y pulsa ok para visitar la galeria");
  switch (msg) {
    case "personalizado":
      alert("Hola " + nombre + " " + "Chatea directamente con el artista al +57 305 712 6569 y decora tu espacio a tu gusto. Escribe la frase ver cuadros y pulsa ok para visitar la galeria");
      break;

    case "pintado":
      alert("Hola " + nombre + " " + "Te sugerimos fijarte en los descuentos de temporada. Escribe la frase ver cuadros y pulsa ok para visitar la galeria");
      break;

    //case "chau":
      //alert("Bienvenido a Didacus Shop");
      //break;

    default:
      alert("Bienvenido a Didacus Shop");
      break;
  }
}

/* 

function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "suma":
      return num1 + num2;

    case "resta":
      return num1 - num2;

    case "multiplicacion":
      return num1 * num2;

    case "division":
      return num1 / num2;

    default:
      alert("Operación invalida Mijito");
      break;
  }
}

let resultado = calculadora(500, 150, "suma");
alert(resultado);
resultado = calculadora(500, 150, "resta");
alert(resultado);
resultado = calculadora(500, 150, "multiplicacion");
alert(resultado);
resultado = calculadora(500, 150, "division");
alert(resultado);


let num1;
let num2;
let operacion;

while (operacion !== "exit") {
  let operacion = prompt("Ingrese la operación a realizar o exit para salir");
  if (operacion !== "exit") {
    let num1 = Number(prompt("Ingrese el primer número"));
    let num2 = Number(prompt("Ingrese el segundo número"));
    let resultado = calculadora(num1, num2, operacion);
    alert(resultado);
  }
}

*/