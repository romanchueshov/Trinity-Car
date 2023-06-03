$(document).ready(function(){


    // Map adaptation
    var mapHeight = $('#map').height();
    $('#map-container').css('height', mapHeight);


    // Mobile menu
    $('#menu-open').click(function(){
      $('#mobile-menu').removeClass('hidden').fadeIn(500);
      $('body').css({'overflow-y':'hidden'});
    });
    $('#menu-close').click(function(){
      $('#mobile-menu').addClass('hidden');
      $('body').css({'overflow-y':'auto'});
    });

    // $("#menu-open").click(function() {
    //   $("#mobile-menu").removeClass("hidden").fadeIn(500);
    //   $("body").css("overflow-y", "hidden");
    // });
    
    // $("#menu-close").click(function() {
    //   $("#mobile-menu").fadeOut(500, function() {
    //     $(this).addClass("hidden");
    //   });
    //   $("body").css("overflow-y", "auto");
    // });
    


    // Scroll
    $(window).scroll(function() {
        $('.block-hidden').each(function() {
          var top_of_element = $(this).offset().top;
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var top_of_screen = $(window).scrollTop();
          var bottom_of_screen = $(window).scrollTop() + $(window).height();
      
          if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            $(this).animate({
                'opacity':'1'
            }, 1500);
          }
        });
      });

});