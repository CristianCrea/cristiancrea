$('#changeTheme').on('click', () =>{

  if (localStorage.getItem('theme') == 'darkMode'){
    originalTheme()
  }else {
    darkTheme()
  }
})

const darkTheme = () => {
  
  $('body').css('background-color', '#0D0A2A')
  $('.dmTextHeader').css('color', '#4a00e0')
  $('.artContainer_text-dmTitle').css({'background-color': '#fcff5c',})
  $('.artContainer_text-dmBio').css('color', '#f2eadf')
  $('.dmPrice__Container').css('background-color', '#0D0A2A')
  $('.dmPrice').css('color', '#f2eadf')
  $('.dm__shoopingList').css('color', '#f2eadf')
  $('.dm__apiData_values').css('color', '#4d4d4d')
  
  localStorage.setItem('theme', 'darkMode')
}

const  originalTheme = () => {

  $('body').css('background-color', '#f2eadf')
  $('.dmTextHeader').css('color', '#4d4d4d')
  $('.artContainer_text-dmBio').css('color', '#4d4d4d')
  $('.dmPrice__Container').css('background-color', '#f2eadf')
  $('.dmPrice').css('color', '#4d4d4d')
  $('.dm__shoopingList').css('color', '#4d4d4d')
  $('.dm__apiData_values').css('color', '#4d4d4d')
  
  localStorage.setItem('theme', 'lightMode')
}




