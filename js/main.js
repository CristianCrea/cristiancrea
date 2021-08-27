// PRIMERA ENTREGA, Construcción inicial del carrito de compras

let carritoCompras = []

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
        carritoCompras.push(this.getCompra(cantidad))
    }
}

const elefanteDeManana = new Producto(1, 'Elefante de Mañana', 'Oleo sobre lienzo', 'La fuerza, tranquilidad y la vibración color permearán tu espacio de la mejor forma', 650000, "../images/art-elephant.jpg",  50)
const galopandoColores = new Producto(2, 'Galopando Colores', 'Oleo sobre lienzo', 'Si galopas conmigo, encontrarás paz, tranquilidad y shot de energia y vitalidad que transmite mi ser.', 700000, "../images/art-horse.jpg", 10)
const tropicalFlamingo = new Producto(3, 'Tropical Flamingo', 'Oleo sobre lienzo', 'La tranquilidad y el garbo plasmados en un solo lugar. Déjate conquistar por la elegancia de esta pieza.', 750000, "../images/art-flamenco.jpg", 30)
const jungleOrange = new Producto(4, 'Jungle Orange', 'Oleo sobre lienzo', 'Toronjea de color tu vida con esta pieza llena de tropicalidad y naturaleza.', 800000, "/art-flamenco.jpg", 15)

carritoCompras.push(elefanteDeManana)
carritoCompras.push(galopandoColores)
carritoCompras.push(tropicalFlamingo)
carritoCompras.push(jungleOrange)

// ---> Creando elementos en el html dinamicamente <--- //

let showArtCards = document.getElementById('artContainerjs')

carritoCompras.forEach((e) => {
  let artContainer = document.createElement('div')
  artContainer.setAttribute("class", "artContainer")

    let artContainerText = document.createElement('div')
    artContainer.appendChild(artContainerText)
    artContainerText.setAttribute("class", "yellowBox")

        let artTitle = document.createElement('h2')
        artContainerText.appendChild(artTitle)
        artTitle.textContent = e.title
        

        let artMaterial = document.createElement('h3')
        artContainerText.appendChild(artMaterial)
        artMaterial.textContent = e.material

        let artDescription = document.createElement ('p')
        artContainerText.appendChild(artDescription)
        artDescription.textContent = e.description

        let artContainerPrice = document.createElement('div')
        artContainer.appendChild(artContainerPrice)
        

          let artPrice = document.createElement('p')
          artContainerPrice.appendChild(artPrice)
          artPrice.textContent = e.price
          artPrice.setAttribute("class", "pricejs")

          let btnArt = document.createElement('a')
          artContainerPrice.appendChild(btnArt)
          btnArt.textContent = 'Comprar'
          btnArt.setAttribute("class", "btnBuyJs")
      
    let artContainerPhoto = document.createElement('div')
    artContainer.appendChild(artContainerPhoto)

          //Aquí no supe como hacer la iteración de las imágenes, me queda como duda de la entrega. 
          showArtCards.innerHTML +=`
          <img src="../images/art-elephant.jpg" alt="Cuadro de peces formando un circulo cromático pintado en oleo sobre lienzo">
          ` 
      showArtCards.appendChild(artContainer)

})


/*

Hola Cristian, buena semana para vos también! La estrega está muy bien, faltan ver un par de cuestiones y es lógico, pero no te preocupes! Vamos a ir sacando esas dudas.



En cuanto a tus dudas:



Cuando se trata del manejo de un elemento mediante JS, es necesario explicitar específicamente la class, el tipo de etiqueta o el id del elemento que queres interactuar. Por el momento lamentablemento no se puede manejar como en SASS! Asi que si, está perfecto lo que hiciste.



Con el innerHTML, te da la oportunidad de escribir textualmente lo que necesitas que se imprima en el HTML, por lo que podes agregarle los atributos que quieras al elemento que querés agregar, podes agregarle una clase tal cual escribieras en HTML:

   showArtCards.innerHTML +=`
        <div class="artContainer__photo">
            <img src="../images/art-elephant.jpg" alt="Cuadro de peces formando un circulo cromático pintado en oleo sobre lienzo">
        </div>
          ` 
Nota que agregué el div que contiene a las imágenes, junto con su atributo class, tal cual lo tenes en tus cards del HTML.



Con respecto a tu duda de cómo iterar las imágenes dinámicamente, lo ideal es que dentro de tu constructor de Producto, tengas una propiedad que sea "imgURL" por ejemplo (puede ser el nombre que quieras), donde puedas incluir el URL de las imágenes de cada producto. 

Al momento de crear el producto (en el new), lo agregas como si lo hicieras con los otras propiedades, en forma de string. Sería por ejemplo: "../images/art-elephant.jpg".

const elefanteDeManana = new Producto(1, 'Elefante de Mañana', ... , 50, "../images/art-elephant.jpg")
Nota que agregué al último la URL de la imagen correspondiente al producto que estoy creando.



Esto te va a permitir utilizarlas luego dentro del forEach, de la misma forma que lo haces con la otras propiedades (e.title, e.material,... e.imgURL). Por ejemplo siguiendo el ejemplo del innerHTML, quedaría algo así:

   showArtCards.innerHTML +=`
        <div class="artContainer__photo">
            <img src={e.imgURL} alt="Cuadro de peces formando un circulo cromático pintado en oleo sobre lienzo">
        </div>
          ` 


Algo que me gustaría agregar, es que las clases o id nuevas (creadas para manejar el DOM con JS) no es necesario utilizarlas para cambiar los estilos. Tus estilos (CSS o SCSS) serán validos siempre que los elementos nuevos conserven la misma estructura que los elementos que tenías en un principio (los estáticos). Así que por ese lado no es necesario cambiar el estilo, o la estructura! (Nota: No pasa nada si quedan clases definidas en el HTML sin un estilo asignado).



Y con respecto a tu tercer duda, lo que se busca es brindar ejemplos (como el que hizo el profe la ultima clase) para que puedan darse cuenta de cómo se pueden integrar las herramientas para generar lo que necesitan, un carrito por ejemplo en tu caso. Yo creo que con las herramientas que vimos hasta ahora se puede hacer, pero lógicamente hay muchas formas de hacerlo con otras herramientas diferentes!



Lo que te recomiendo personalmente (y profesionalmente), es que veas videos o ejemplos si lo crees necesario. Como desarrolladores es sumamente necesario (y suma mucho) si logramos ver muchos puntos de vista, e ir viendo videos o tutoriales y entendiendo lo que se va haciendo. Yo lo considero muy enriquecedor, así que por mi lado yo te recomendaría que investigues lo que sea necesario, que re-veas las clases la cantidad de veces que consideres necesario, que veas páginas o documentaciones oficiales.



En conjunto todo esto es lo que te va a hacer un gran desarrollador! Espero que te haya servido la devolución.



Si consideras que necesitas más profundización sobre cómo empezar o cómo seguir, no dudes en escribirme por Slack! 

Muy buen Trabajo, la verdad.

Ahora la práctica te va a seguir guiando! Saludos.



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