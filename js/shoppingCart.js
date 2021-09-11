//Construcción inicial del shoppingCart de compras

let shoppingCartID = document.getElementById('cartList') //Llamamos al elemento donde queremos que se imprima el producto al que yo le de click
let printCart = document.getElementById('artContainers') //Llamamos al div donde queremos que se impriman las cards dinamicamente
let total = document.getElementById('totalPrice') //Llamamos al elemento donde se va imprimir lo que compremos
let shoppingList = document.getElementById('cartList')//Llamamos el sitio donde se va imprimir la lista de compras
let btnCleanCart = document.getElementById("cleanCart")//Creamos el botón


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
            <a class="buyButton" onclick="addToShoppingCart(${e.id})">COMPRAR</a>
            <p class="callToAction">Lleva un regalo adicional por tu compra</p>
          </div>
        </div>
        <div class="artContainer__photo">
            <img id="artImage" src=${e.imgUrl}  alt="Cuadro de peces formando un circulo cromático pintado en oleo sobre lienzo">
        </div>
  </div>
  `
})

// >>> FUNCTIONS <<< // 

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
        location.reload()
  }

}

// Ahora hacemos una Función para imprimir lo que yo agrege al carrito.

const printShoppingCart = () =>{

  //Necesitamos que lo yo ponga en el carrito se guarde en el localStorage
  //Usamos el localStorage para guardarlo y resetear (refrescando) la información los productos que le ingrese sino se duplicaria cada vez que dé click
  
  let shoppingCartStorage = JSON.parse(localStorage.getItem("shoppingCart"))  //  Con esto ahora traemos (getItem) lo que esta en el local, como está en JSON, lo convertimos a objeto con JSON.parse
  // Lo guardamos en una variable para poder recorrerlo en el forEach 


  shoppingCartStorage.forEach(e =>  { //Hago un forEach para que por cada producto (iteración) que tenga mi array imprima lo que yo le pida
  
    let shopListContainer = document.createElement('div')
    shopListContainer.setAttribute("class", "shoopingList")

      let listTitle = document.createElement('p')
      shopListContainer.appendChild(listTitle)
      listTitle.textContent = e.title

      let productPrice = document.createElement('p')
      shopListContainer.appendChild(productPrice)
      productPrice.setAttribute("class", "shoopingList_price")
      productPrice.textContent = e.price

      let btnDeleteProduct = document.createElement("button")//Creamos el botón
      shopListContainer.appendChild(btnDeleteProduct)
      btnDeleteProduct.setAttribute("class", "deleteProduct") //Le damos la clase que queramos          
      btnDeleteProduct.setAttribute("id", `${e.id}`)
      btnDeleteProduct.setAttribute("onclick", `deletePurchase(${e.id})`) //Le seteo la función de delete user con un evento "onclick"
      btnDeleteProduct.textContent = "Quitar" //Le creo el contenido
    
    shoppingList.appendChild(shopListContainer)  

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


const deletePurchase = (id) => { //Le pasamos por parameto 

    //Tomo toda la info que tengo
    let allProducts = JSON.parse(localStorage.getItem("shoppingCart")) //Primero tomamos todos mis usuarios del local
    //Me fijo que usuario tiene ese ID 
    let allProductsUpdated = allProducts.filter(e => e.id != id) //Creo una variable de todos los usuarios actualizados y con un filter todos los usuarios distintos al usuario que recibe por parametro
    // Tomo toda la info de esos usuarios que no tienen ese id que pase por parametro y lo vuelvo a guardar en el local.
    localStorage.setItem("shoppingCart", JSON.stringify(allProductsUpdated)) //Setee en el local storage mi 
    location.reload()//Recargo la página para que me deje la lista sin el usuario que le acabé de borrar

}

// >>> EVENTS <<< // 


btnCleanCart.addEventListener("click", () =>{
  localStorage.clear(),
  location.reload()
})


