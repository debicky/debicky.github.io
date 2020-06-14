$(document).ready(function () {

  AOS.init();
  
  
  $('.navbar-toggler').on('click', function () {
    $(this).toggleClass('menu-open');
  })
  
  $('.navbar .nav-link').on('click', function () {
    $('.navbar-collapse').toggleClass('show')
    $('.navbar-toggler').removeClass('menu-open')
  });

  $('nav a[href*="#').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 10
    }, 900);
  });

  $('#up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 900);
  });

  const gra = function(min, max) {
    return Math.random() * (max - min) + min;
}
const init = function(){
    let items = document.querySelectorAll('section');
    for (let i = 0; i < items.length; i++){
        items[i].style.background = randomColor({luminosity: 'light'});
    }
    cssScrollSnapPolyfill()
}
init();

  
  
  
})