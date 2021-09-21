//Construcción inicial del shoppingCart

let shoppingCartID = document.getElementById('cartList') 
let printCart = document.getElementById('artContainers') 
let total = document.getElementById('totalPrice') 
let shoppingList = document.getElementById('cartList')
let btnCleanCart = document.getElementById("cleanCart")


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
}

let elefanteDeManana = new Producto(
  1, 
  'Elefante de Mañana', 
  'Oleo sobre lienzo', 
  'La fuerza, tranquilidad y la vibración color permearán tu espacio de la mejor forma',
  190, 
  "../images/art-elephant.jpg",
  50
)

let galopandoColores = new Producto(
  2,
  'Galopando Colores',
  'Oleo sobre lienzo',
  'Si galopas conmigo, encontrarás paz, tranquilidad y shot de energia y vitalidad que transmite mi ser.',
  210,
  "../images/art-horse.jpg",
  10
)

let tropicalFlamingo = new Producto(
  3,
  'Tropical Flamingo', 'Oleo sobre lienzo', 'La tranquilidad y el garbo plasmados en un solo lugar. Déjate conquistar por la elegancia de esta pieza.',
  230,
  "../images/art-flamenco.jpg",
  30
  )

let jungleOrange = new Producto(
  4, 
  'Jungle Orange', 'Oleo sobre lienzo', 'Toronjea de color tu vida con esta pieza llena de tropicalidad y naturaleza.',
  250, 
  "../images/art-orange.jpg",
  15)


products.push(elefanteDeManana) 
products.push(galopandoColores)
products.push(tropicalFlamingo)
products.push(jungleOrange)

// >>> HTML ELEMENTS <<< // 

products.forEach((e) => {
  
  printCart.innerHTML +=`
  <div class="artContainer">
        <div class="artContainer_text">
          <div class="artContainer_text-dmTitle">
            <h2>${e.title}</h2>
            <h3>${e.material}</h3>
          </div>
          <p class="artContainer_text-dmBio">${e.description}</p>
          <div class="artContainer__price dmPrice__Container">
            <p class="price dmPrice">$${e.price} USD</p>
            <a class="buyButton" onclick="addToShoppingCart(${e.id})">COMPRAR</a>
          </div>
        </div>
        <div class="artContainer__photo">
            <img id="artImage" src=${e.imgUrl}  alt="Cuadro de peces formando un circulo cromático pintado en oleo sobre lienzo">
        </div>
  </div>
  `
})

// >>> API <<< // 

const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

$.get(url, (reply, state) => {
  
  if (state === "success") {
    
    reply.forEach((e) => {
      $(".apiData").append(`
            <h6 class="apiData_name">Casa - ${e.casa.nombre}</h6>
            <p class="apiData_values dm__apiData_values">Compra: ${e.casa.compra}</p>
            <p class="apiData_values dm__apiData_values">Venta: ${e.casa.venta}</p>
            <p class="apiData_values dm__apiData_values">Variacion: ${e.casa.variacion}</p>
          `);
    });
    console.log(reply);
  }
});

// >>> FUNCTIONS <<< // 


const addToShoppingCart = (idOnClick) =>{  

  const identifiedObject = products.find (e => e.id == idOnClick) 

  if(JSON.parse(localStorage.getItem("shoppingCart")) != null){ 
        
        let shoppingCartNEW = JSON.parse(localStorage.getItem("shoppingCart"))
        shoppingCartNEW.push(identifiedObject)

        localStorage.setItem("shoppingCart",JSON.stringify(shoppingCartNEW))
        location.reload()

  } else { 

        shoppingCart.push(identifiedObject) 
        localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart))
        location.reload()
  }

}


const printShoppingCart = () =>{

  
  let shoppingCartStorage = JSON.parse(localStorage.getItem("shoppingCart"))

  shoppingCartStorage.forEach(e =>  { 
  
    let shopListContainer = document.createElement('div')
    shopListContainer.setAttribute("class", "shoopingList")

      let productPhoto = document.createElement('img')
      shopListContainer.appendChild(productPhoto)
      productPhoto.setAttribute('src', e.imgUrl)
      productPhoto.setAttribute('class', 'shoopingList__productPhoto')

      let listTitle = document.createElement('p')
      shopListContainer.appendChild(listTitle)
      listTitle.textContent = e.title
      listTitle.setAttribute("class", "dm__shoopingList")

      let productPrice = document.createElement('p')
      shopListContainer.appendChild(productPrice)
      productPrice.setAttribute("class", "shoopingList_price dm__shoopingList")
      productPrice.textContent = e.price

      let btnDeleteProduct = document.createElement("button")
      shopListContainer.appendChild(btnDeleteProduct)
      btnDeleteProduct.setAttribute("class", "deleteProduct") 
      btnDeleteProduct.setAttribute("id", `${e.id}`)
      btnDeleteProduct.setAttribute("onclick", `deletePurchase(${e.id})`) 
      btnDeleteProduct.textContent = "Quitar"
    
    shoppingList.appendChild(shopListContainer)  

  })

}

printShoppingCart() 

const totalPrice = () => {
    
    let shoppingCartStorage = JSON.parse(localStorage.getItem("shoppingCart"))
    let totalPrice = 0;

    shoppingCartStorage.forEach(e=> {
        totalPrice = totalPrice + e.price 
    })
    total.textContent = totalPrice 
}
totalPrice() 


const deletePurchase = (id) => { 

  let allProducts = JSON.parse(localStorage.getItem('shoppingCart'))
  const indexIdentified = allProducts.findIndex(e => e.id == id)
  
  if (indexIdentified >= 0){
    allProducts.splice(indexIdentified, 1)
    localStorage.setItem('shoppingCart', JSON.stringify(allProducts))
    location.reload()
  }

    // let allProducts = JSON.parse(localStorage.getItem("shoppingCart")) 
    // let allProductsUpdated = allProducts.filter(e => e.id != id)
    // localStorage.setItem("shoppingCart", JSON.stringify(allProductsUpdated)) 
    // location.reload()

}

// >>> EVENTS <<< // 


btnCleanCart.addEventListener("click", () =>{
  localStorage.clear(),
  location.reload()
})


