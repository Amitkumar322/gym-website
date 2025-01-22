$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  
  // Smooth scroll to top when the button is clicked
  $('#back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });