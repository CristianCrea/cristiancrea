const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

//Creamos el método para traer la data

$.get(url, (respuesta, estado) => {
  //Hacemos un condicional para ver si la data entra y para renderizar los datos
  if (estado === "success") {
    //Como lo que me tira respuesta es un array debo recorrerlo con un forEach
    respuesta.forEach((e) => {
      //Creamos los elementos que alojan la info del api
      //Ponemos en esta ocasión e.casa. porque debemos entrar al objeto casa pues el aloja las propiedades de cada casa
      $("body").append(`
            <h1>${e.casa.nombre}</h1>
            <p>${e.casa.compra}</p>
            <p>${e.casa.venta}</p>
          `);
    });
    console.log(respuesta);
  }
});