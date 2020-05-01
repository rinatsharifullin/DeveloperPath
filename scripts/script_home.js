$(document).ready(function(){
    console.log('loaded');

        
    // Animate counter on scroll
    $(window).scroll(function(){
        if((document.getElementById('stats').getBoundingClientRect().top -$(window).innerHeight() + $('#stats').innerHeight()/3*2)<0){  //element must be 2/3 visible from bottom to start function
            $('#stats').css('opacity', 1);
            $({ Counter: 1991 }).animate({ Counter: $('#year').text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $('#year').text(Math.ceil(this.Counter));
                }
            });
            $({ Counter: 0 }).animate({ Counter: $('#courses').text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $('#courses').text(Math.ceil(this.Counter));
                }
            });
            $({ Counter: 400 }).animate({ Counter: $('#students').text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $('#students').text(Math.ceil(this.Counter));
                }
            });
    
            $(window).off('scroll');    //Run once
        }
    });
    
    

});


