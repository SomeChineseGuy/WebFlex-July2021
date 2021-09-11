$(document).ready(() => {
  console.log("Hello")
  // let node = document.createElement("LI");                 // Create a <li> node
  // let textnode = document.createTextNode("Water");         // Create a text node
  // node.appendChild(textnode);                              // Append the text to <li>
  // document.getElementById("movie-list").appendChild(node); 

  $('#movie-list').append("<li>Water 2</li>")
  console.log($('#movie-list'))
  const ul = document.getElementById("movie-list")
  console.log(ul)

  // Events

  // Effects
  $('#movie-list, p, li, section').on('mouseover', (event) => {
    $('h1').css("color", 'green')
    $('body').css("background", "tomato")

  })

  $('#movie-list').on('mouseleave', () => {
    $('h1').css('color', 'cornsilk')
  })


  $('.input-item').on('keypress', () => {
    const $input = $('.input-item').val()
  })

  // keyup, keydown, keypress, blur

  $('.submit').on('click', () => {
    const $input = $('.input-item').val()
    $('#movie-list').append(`<li>${$input}</li>`)
    $('.input-item').val("")
  })



})