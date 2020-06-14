$(document).ready(function () {

  AOS.init();
  
  

  $('.navbar .nav-link').on('click', function () {
    $('.navbar-toggler').toggleClass('collapsed')
  })

  
  
  
  $('nav a[href*="#').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 400
    }, 900);
  });


  
  
  
})