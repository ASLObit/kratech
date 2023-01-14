$(function () {
  var alturaVentana = $(window).height();
  var barraAltura = $('.barra').innerHeight();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < alturaVentana) {
      $('.barra').addClass('menu-fijo');
      $('body').css({ 'margin-top': barraAltura + 'px' });
    } else if (scroll > alturaVentana) {
      $('.barra').addClass('menu-fijo');
      $('body').css({ 'margin-top': barraAltura + 'px' });
    } else {
      $('.barra').removeClass('menu-fijo');
      $('body').css({ 'margin-top': 'px' });
    }
  });
});

let menuDesplegable = document.querySelector('.menu-desplegable');
let menuDesplegableIcono = document.querySelector('.menu-desplegable i');
let menu = document.getElementById('menu');

menuDesplegable.addEventListener('click', e => {
  menu.classList.toggle('show');

  if (menu.classList.contains('show')) {
    menuDesplegableIcono.setAttribute('class', 'fa fa-times');
  } else {
    menuDesplegableIcono.setAttribute('class', 'fa fa-bars');
  }
});

