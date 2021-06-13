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

    default:
      alert("Bienvenido a Didacus Shop");
      break;
  }
}
