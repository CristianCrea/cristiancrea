// PRIMERA ENTREGA, Construcción inicial del carrito de compras

let cartList = document.getElementById('cartList')
let showArtCards = document.getElementById('artContainerjs')
let products = []
let shoppingcart = []


class Producto {
    constructor(id, title, material, description, price, imgUrl, stock) {
        this.id = id
        this.title = title
        this.material = material
        this.description = description
        this.price = price
        this.imgUrl = imgUrl
        this.stock= stock
    }
    getId () {
        return this.stock
    }

    getTotal (cantidad) {
        return this.price * cantidad
    }

    getCompra (cantidad) {
        return {
            product: this,
            quantity: cantidad,
            monto: this.getTotal(cantidad)
        }
    }

    addToCart (cantidad) {
        products.push(this.getCompra(cantidad))
    }
}

const elefanteDeManana = new Producto(1, 'Elefante de Mañana', 'Oleo sobre lienzo', 'La fuerza, tranquilidad y la vibración color permearán tu espacio de la mejor forma', 650000, "../images/art-elephant.jpg",  50)
const galopandoColores = new Producto(2, 'Galopando Colores', 'Oleo sobre lienzo', 'Si galopas conmigo, encontrarás paz, tranquilidad y shot de energia y vitalidad que transmite mi ser.', 700000, "../images/art-horse.jpg", 10)
const tropicalFlamingo = new Producto(3, 'Tropical Flamingo', 'Oleo sobre lienzo', 'La tranquilidad y el garbo plasmados en un solo lugar. Déjate conquistar por la elegancia de esta pieza.', 750000, "../images/art-flamenco.jpg", 30)
const jungleOrange = new Producto(4, 'Jungle Orange', 'Oleo sobre lienzo', 'Toronjea de color tu vida con esta pieza llena de tropicalidad y naturaleza.', 800000, "../images/art-orange.jpg", 15)

products.push(elefanteDeManana)
products.push(galopandoColores)
products.push(tropicalFlamingo)
products.push(jungleOrange)

// ---> Creando elementos en el html dinamicamente <--- //

products.forEach((e) => {
  
  showArtCards.innerHTML +=`

  <div class="artContainer">
        <div class="artContainer_text">
          <div>
            <h2>${e.title}</h2>
            <h3>${e.material}</h3>
          </div>
          <p>${e.description}</p>
          <div class="artContainer__price">
            <p class="price">${e.price} COP</p>
            <a href="#" onclick="onCart(${e.id})" >COMPRAR</a>
          </div>
        </div>
        <div class="artContainer__photo">
            <img src=${e.imgUrl}  alt="Cuadro de peces formando un circulo cromático pintado en oleo sobre lienzo">
        </div>
  </div>
  `

})

const onCart = (idOnclick) =>{

  const objectIdentified = products.find (e => e.id == idOnclick)
  console.log(objectIdentified);

  shoppingcart.push(objectidentied)

}

const objetsOnCart = () =>{
  
  products.forEach (e => {
  
    cartList.innerHTML =`
    <div>
    <p>${e.title}</p>
    <p>${e.material}</p>
    <p>${e.price}</p>
    </div>
    `

  })

  
}

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