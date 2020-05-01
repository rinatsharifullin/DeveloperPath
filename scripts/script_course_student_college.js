$(document).ready(function(){
    console.log('loaded');

    // Make + sign visible
    $('.accordion  h2').addClass('unselected');

    // Hide all under h2 elements until next h2
    var allPanels = $('.accordion h2').nextUntil('h2').hide();

    // Accordion function
    $('.accordion  h2').click(function() {
        if($(this).nextUntil('h2').is(':visible')){     //If click header with visible content
            allPanels.slideUp();                        //Slide up all headers
            $('.accordion h2').addClass('unselected').removeClass('selected');  //Make + visible and hide - sign
            return false;                               //Stop function. Prevent to toggle classes by following code
        }else{                                          //If click any unopened header
            allPanels.slideUp();                        //Slide up all headers
            $('.accordion h2').addClass('unselected').removeClass('selected');  //Make + visible and hide - sign
        };
        $(this).nextUntil('h2').slideDown();            //Slide down elements p and img
        $(this).toggleClass('selected unselected');     //Toggle classes to make - visible and hide + sign
        
    });

});

