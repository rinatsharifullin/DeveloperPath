$(document).ready(function(){
    console.log('loaded');

    // Run Video on top of map
    $('#map-video').delay(13000).queue(function(){                          //Delay 13s, duration of video
        $(this).animate({'opacity':0},1000).delay(1000).queue(function(){   //Fade out for 1s
            $(this).css('display', 'none');                                 //Hide video
            $(this).dequeue();
        });
        $(this).dequeue();
    })

    

});

