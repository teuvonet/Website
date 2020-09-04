(function($) {
  
    

    var $animation_elements = $('.animate__animated');
    
//    console.log($animation_elements);
    var $window = $(window);
    
function check_if_in_view() {
    
//    console.log("Hello");
    
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
 $.each($animation_elements, function() {
      
    var $element = $(this);
     var $animationType = $element.attr('data-animationType');
     console.log(('animate__' + $animationType));
//     console.log("Hello");
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('animate__' + $animationType);
    } else {
      $element.removeClass('animate__' + $animationType);
    }
  });
    
  
    
}
    
    
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

})(jQuery); // End of use strict
