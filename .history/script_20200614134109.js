$(document).ready(function () {

  AOS.init();
  
  
  $('.navbar-toggler').on('click', function () {
    $(this).toggleClass('menu-open')
  })

  $('.navbar-nav .nav-link').on('click', function () {
    $('.navbar-toggler').removeClass('menu-open')
  })

  
  
  
  $('nav a[href^="#').on('click', function () {
    $('html, body').animate(keyframes: {
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, options: 2000);
  });


  
  
  
})