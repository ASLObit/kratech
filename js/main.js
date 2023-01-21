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

let resumenLista = jQuery('.resumen-evento');

console.log(resumenLista)
if (resumenLista.length > 0) {
  $('.resumen-evento').waypoint(
    function () {
      $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200);
      $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1200);
      $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1500);
      $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 1500);
    },
    {
      offset: '100%'
    }
  );
}