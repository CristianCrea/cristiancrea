//Eventos de mouse para botones de compra


$(function(){
  

  $('.buyButton').mouseleave(function(){
    $('.callToAction').fadeOut();
  })


  $('.buyButton').mouseenter(function(){
    $('.callToAction').fadeIn();
  })

})

