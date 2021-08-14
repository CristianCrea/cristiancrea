// PRIMERA ENTREGA, Construcción inicial del carrito de compras

let carritoCompras = []

class Producto {
    constructor(id, nombre, precio, inventario) {
        this.inventario = inventario
        this.nombre = nombre
        this.precio = precio
        this.inventario = inventario
    }
    getId = function () {
        return this.inventario
    }

    getTotal = function (cantidad) {
        return this.precio * cantidad
    }

    getCompra = function (cantidad) {
        return {
            product: this,
            quantity: cantidad,
            monto: this.getTotal(cantidad)
        }
    }

    addToCart = function (cantidad) {
        carritoCompras.push(this.getCompra(cantidad))
    }
}

const elefanteDeManana = new Producto(1, 'Elefante de Mañana', 650000, 50)
const galopandoColores = new Producto(2, 'Galopando Colores', 700000, 10)
const tropicalFlamingo = new Producto(3, 'Tropical Flamingo', 750000, 30)
const jungleOrange = new Producto(4, 'Jungle Orange', 800000, 15)


let productos = [elefanteDeManana, galopandoColores, tropicalFlamingo, jungleOrange]

console.log(carritoCompras)
elefanteDeManana.addToCart(5)
console.log(carritoCompras)
galopandoColores.addToCart(3)
console.log(carritoCompras)
tropicalFlamingo.addToCart(10)
console.log(carritoCompras)
jungleOrange.addToCart(6)


/* 

---->  ENTREGA DESAFIO INCORPORAR OBJETOS Y ARRAYS - Creación de objetos, función constructora <----

function obraDeArte (nombre, sustrato, tamaño, precio) {
  this.nombre = nombre;
  this.sustrato = sustrato;
  this.tamaño = tamaño;
  this.precio = precio
}

let elefanteDeManana = new obraDeArte('Elefante de Mañana', 'Oleo sobre lienzo', '100 x 70cms', '650.000');
let galopandoColores = new obraDeArte('Galopando Colores', 'Oleo sobre lienzo', '120 x 80cms', '700.000');
let tropicalFlamingo = new obraDeArte('Tropical flamingo', 'Oleo sobre lienzo', '150 x 210cms', '750.000');
let jungleorange = new obraDeArte('Jungle orange', 'Oleo sobre lienzo', '80 x 50cms', '800.000');

console.log(elefanteDeManana);
console.log(galopandoColores);
console.log(tropicalFlamingo);
console.log(JungleOrange);

---> ENTREGA DESAFIO INCORPORAR OBJETOS Y ARRAYS - Array con los objetos del los cuadros y un filter de precio. <--- 

let didacusCuadros = [
  {nombre:'Elefante de Mañana', sustrato:'Oleo sobre lienzo', medida:'100 x 70cms', precio:'650000'},
  {nombre:'Galopando Colores', sustrato:'Oleo sobre lienzo', medida: '120 x 80cms', precio:'700000'},
  {nombre:'Tropical flamingo', sustrato:'Oleo sobre lienzo', medida:'150 x 210cms', precio:'750000'},
  {nombre:'Jungle orange', sustrato:'Oleo sobre lienzo', medida:'80 x 50cms', precio:'800000'},
]

let filtroPrecio = didacusCuadros.filter(function(articulo){
  return articulo.precio <= 700000
})

console.log(filtroPrecio)

*/


//Desafio entregable clase 3 y 4 Simulador de precio + impuesto de un producto 

/* 

function masIva(precio, iva){
      var coniva = (precio + precio*iva/100);
      return coniva;
    }
    var precio = Number(prompt('Introduce el precio de la obra de arte para calcular su iva y precio final. Las opciones son 650000, 700000, 750000, 800000'));
    var iva = Number(prompt('Introduce el iva del 19% ingresando el numero "19"'));
  
    if(iva > 0){
      var resultado = masIva(precio, iva);
    }
    alert(`El Precio de tu producto sin iva es: ${precio} y el precio más Iva es de: ${resultado}`);



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