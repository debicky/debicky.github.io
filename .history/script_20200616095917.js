$(document).ready(function () {

  AOS.init();
  

  $('nav a[href*="#').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 900);
  });

  $('#project-down').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#projects').offset().top - 10
    }, 900);
  });

  $('#up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 900);
  });

  

  
  
  
})