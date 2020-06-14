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
      scrollTop: $($(this).attr('href')).offset().top 
    }, 900);
  });

  $('#up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 900);
  });

  

  
  
  
})