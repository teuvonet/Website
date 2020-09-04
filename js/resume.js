(function($) {
  "use strict"; // Start of use strict
    
//    a[href*='id=ABC']
//    a[href*="#"]
    $('a[href*="#"]:not(.popup)').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    

    
    

//  // Smooth scrolling using jQuery easing
//  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//      var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//      if (target.length) {
//        $('html, body').animate({
//          scrollTop: (target.offset().top)
//        }, 1000, "easeInOutExpo");
//        return false;
//      }
//    }
//  });
  
  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["David Hsiung.", "a Designer.", "a Developer.", "a Researcher."],
      typeSpeed: 100,
      loop: true,
    });
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  //slide icon
  $(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
  // ========================================================================= //
  //  works
  // ========================================================================= //
$(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 350); 
    
  });
});
    

    var $animation_elements = $('.animation-element');
    
    var $animation_elements_today = $('.today');

    var $animation_elements_future = $('.future');
    
    var $window = $(window);
    
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
 $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
    
  $.each($animation_elements_today, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view grayout');
    } else {
      $element.removeClass('in-view grayout');
    }
  });
    
    $.each($animation_elements_future, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view grayin');
    } else {
      $element.removeClass('in-view grayin');
    }
  });
}
    
    
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

})(jQuery); // End of use strict
