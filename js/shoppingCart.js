//Construcción inicial del shoppingCart

let shoppingCartID = document.getElementById('cartList') 
let printCart = document.getElementById('artContainers') 
let total = document.getElementById('totalPrice') 
let shoppingList = document.getElementById('cartList')
let btnCleanCart = document.getElementById("cleanCart")


let products = []
let shoppingCart = []

class Producto {
    constructor(id, title, material, description, price, imgUrl, imgUrl2, imgUrl3, altImg) {
        this.id = id
        this.title = title
        this.material = material
        this.description = description
        this.price = price
        this.imgUrl = imgUrl
        this.imgUrl2 = imgUrl2
        this.imgUrl3 = imgUrl3
        this.altImg = altImg
    }
}

let elefanteDeManana = new Producto(
  1, 
  'Elefante de Mañana', 
  'Oleo sobre lienzo', 
  'La fuerza, tranquilidad y la vibración color permearán tu espacio de la mejor forma',
  190, 
  "../images/art-elephant.jpg",
  "../images/art-elephant-2.jpg",
  "../images/art-elephant-3.jpg",
  "../images/art-orange-4.jpg",
  "Cuadro de elefante morado con haz de luz en los valles de áfrica en oleo sobre lienzo",
)

let galopandoColores = new Producto(
  2,
  'Galopando Colores',
  'Oleo sobre lienzo',
  'Si galopas conmigo, encontrarás paz, tranquilidad y shot de energia y vitalidad que transmite mi ser.',
  210,
  "../images/art-horse.jpg",
  "../images/art-horse-2.jpg",
  "../images/art-horse-3.jpg",
  "Cuadro de caballo tecnicolor con mirada galopante en oleo sobre lienzo",
)

let tropicalFlamingo = new Producto(
  3,
  'Tropical Flamingo', 'Oleo sobre lienzo', 'La tranquilidad y el garbo plasmados en un solo lugar. Déjate conquistar por la elegancia de esta pieza.',
  230,
  "../images/art-flamenco.jpg",
  "../images/art-flamenco-2.jpg",
  "../images/art-flamenco-3.jpg",
  "Cuadro de imponente flamingo rosado con plantas verdes en su espalda en oleo sobre lienzo",
  )

let jungleOrange = new Producto(
  4, 
  'Jungle Orange', 'Oleo sobre lienzo', 'Toronjea de color tu vida con esta pieza llena de tropicalidad y naturaleza.',
  250, 
  "../images/art-orange.jpg",
  "../images/art-orange-2.jpg",
  "../images/art-orange-3.jpg",
  "Cuadro de toronjas azules selváticas en oleo sobre lienzo",
  )


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

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            
              <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src=${e.imgUrl} class="d-block w-100" alt=${e.altImg}>
                  </div>
                  <div class="carousel-item">
                    <img src=${e.imgUrl2} class="d-block w-100" alt=${e.altImg}>
                  </div>
                  <div class="carousel-item">
                    <img src=${e.imgUrl3} class="d-block w-100" alt=${e.altImg}>
                  </div>      
              </div>

              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>

              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

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

            <div class="api__HouseCard dm__HouseCard">
            <h6 class="apiData_name">Casa - ${e.casa.nombre}</h6>
            <p class="apiData_values dm__apiData_values">Compra: ${e.casa.compra}</p>
            <p class="apiData_values dm__apiData_values">Venta: ${e.casa.venta}</p>
            <p class="apiData_values dm__apiData_values">Variacion: ${e.casa.variacion}</p>
            </div>
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
  localStorage.removeItem('shoppingCart'),
  location.reload()
})


// >>> IF DARK MODE <<< // 

  if (localStorage.getItem('theme') == 'darkMode') {
  darkTheme()
  } 