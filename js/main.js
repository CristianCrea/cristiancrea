//Construcción inicial del shoppingCart de compras

let shoppingCartID = document.getElementById('cartList') //Llamamos al elemento donde queremos que se imprima el producto al que yo le de click
let printCart = document.getElementById('artContainers') //Llamamos al div donde queremos que se impriman las cards dinamicamente
let total = document.getElementById('totalPrice') //Llamos al elemento donde se va imprimir lo que compremos

let products = []
let shoppingCart = []

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

    getTotal (quantity) {
        return this.price * quantity
    }

    getPurchase (quantity) {
        return {
            product: this,
            quantity: quantity,
            monto: this.getTotal(quantity)
        }
    }

    addToCart (quantity) {
        products.push(this.getPurchase(quantity))
    }
}

let elefanteDeManana = new Producto(1, 'Elefante de Mañana', 'Oleo sobre lienzo', 'La fuerza, tranquilidad y la vibración color permearán tu espacio de la mejor forma', 650000, "../images/art-elephant.jpg",  50)
let galopandoColores = new Producto(2, 'Galopando Colores', 'Oleo sobre lienzo', 'Si galopas conmigo, encontrarás paz, tranquilidad y shot de energia y vitalidad que transmite mi ser.', 700000, "../images/art-horse.jpg", 10)
let tropicalFlamingo = new Producto(3, 'Tropical Flamingo', 'Oleo sobre lienzo', 'La tranquilidad y el garbo plasmados en un solo lugar. Déjate conquistar por la elegancia de esta pieza.', 750000, "../images/art-flamenco.jpg", 30)
let jungleOrange = new Producto(4, 'Jungle Orange', 'Oleo sobre lienzo', 'Toronjea de color tu vida con esta pieza llena de tropicalidad y naturaleza.', 800000, "../images/art-orange.jpg", 15)


products.push(elefanteDeManana) //Pusheamos todos los productos adentro del array 
products.push(galopandoColores)
products.push(tropicalFlamingo)
products.push(jungleOrange)

// ---> Creamos elementos en el html dinamicamente, esto con un forEach para recorrerlos  <--- //

products.forEach((e) => {
  
  // Lo trabajamos con += para que concatene los resultados, 
  // si lo dejamos sin eso se pisan los resultados y solo saldría el último

  // Para que el botón me agregue las cosas al carrito yo le agrego un evento al botón
  // esto lo hacemos con onclick="addToShoppingCart(${e.id})" Uso el id para que agregue solo ese y no todos
  printCart.innerHTML +=`
  <div class="artContainer">
        <div class="artContainer_text">
          <div>
            <h2>${e.title}</h2>
            <h3>${e.material}</h3>
          </div>
          <p>${e.description}</p>
          <div class="artContainer__price">
            <p class="price">${e.price} COP</p>
            <a id="buyButton" onclick="addToShoppingCart(${e.id})">COMPRAR</a>
            <p id="callToAction">¡Solo quedan pocas unidades!</p>
          </div>
        </div>
        <div class="artContainer__photo">
            <img id="artImage" src=${e.imgUrl}  alt="Cuadro de peces formando un circulo cromático pintado en oleo sobre lienzo">
        </div>
  </div>
  `
})

//Ahora creamos la función para añadir los elementos al carrito  al tomar el elemento
// que toque y lo pushee, para eso creamos otro array para que se alojen ahí (shoppingCart)

const addToShoppingCart = (idOnClick) =>{  //iOnClick se refiere al producto al que yo le dé click

  const identifiedObject = products.find (e => e.id == idOnClick) //en mis productos busque el elemento que sea igual == al parametro idOnClick osea al elemento que quiero comprar

  if(JSON.parse(localStorage.getItem("shoppingCart")) != null){ //No podemos pushear algo null así que debemos hacer este condicional para que solventar el error. (Si todo lo que pasa es distinto != Ejecutame esta función)
        
        let shoppingCartNEW = JSON.parse(localStorage.getItem("shoppingCart"))// Traigo lo que tenga el carrito en el localStorage y me lo guarde en shoppingCartNEW
        shoppingCartNEW.push(identifiedObject) //Luego que haga un push a identifiedObject y este lo agrege a addToShoppingCart

        localStorage.setItem("shoppingCart",JSON.stringify(shoppingCartNEW))
        location.reload()// Cada vez que compramos un producto se recargue la página y no nos duplique la compra

  } else { 

        shoppingCart.push(identifiedObject) //Cuando no tengo ningun producto me hace esto
        localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart)) //Cada vez que apretamos un botón lo agregamos al localStorage (setItem) Convertimos el dato a JSON con .stringify
  }

}

// Ahora hacemos una Función para imprimir lo que yo agrege al carrito.

const printShoppingCart = () =>{

  //Necesitamos que lo yo ponga en el carrito se guarde en el localStorage
  //Usamos el localStorage para guardarlo y resetear (refrescando) la información los productos que le ingrese sino se duplicaria cada vez que dé click
  
  let shoppingCartStorage = JSON.parse(localStorage.getItem("shoppingCart"))  //  Con esto ahora traemos (getItem) lo que esta en el local, como está en JSON, lo convertimos a objeto con JSON.parse
  // Lo guardamos en una variable para poder recorrerlo en el forEach 


  shoppingCartStorage.forEach(e =>  { //Hago un forEach para que por cada producto (iteración) que tenga mi array imprima lo que yo le pida
  
    shoppingCartID.innerHTML +=`
    <div>
    <p>${e.title}</p>
    <p> <b>$ ${e.price}</b$></p>
    </div>
    <br>
    `
  })
}
printShoppingCart() //Ejecuto la función de imprimir si no no funcionaría y no saldría lo que yo ponga en el carrito

//Ahora creamos una Función para totalizar el precio de lo que seleccione

const totalPrice = () => {
    
  
    // Primero debemos saber todos los precios y eso lo hacemos trayendolos del localStorage (getItem)
    let shoppingCartStorage = JSON.parse(localStorage.getItem("shoppingCart"))
    let totalPrice = 0; //Inicializamos en cero el precio para comenzar 

    //Hago un for each que me itere por todos los objetos que estén en el carrito del localStorage
    shoppingCartStorage.forEach(e=> {
        totalPrice = totalPrice + e.price // totalPrice es igual totalPrice(Que está en cero) + precio del elemento
    
    })
    total.textContent = totalPrice //Imprimirmos lo de la función totalPrice en el total en el elemento creado en html
}
totalPrice() //Ejecutamos la función sino no funciona 

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