$(document).ready(function(){
    console.log('loaded');

    // Set up arrow for scroll up button
    $('#arrow').css({ 'position': 'fixed', 'right': 30 +'px', 'bottom': -70+'px', 'transition': 'bottom ease 1s'});

    // Trigger arrow behaviour on scroll
    $(document).scroll(function(){
        //Calculate position of top window from 0 to 10
        var position =Math.round( (10/ ($(document).height() - $(window).height()))*$(document).scrollTop());
        //If position over 2, show arrow
        if (position > 2){
            $('#arrow').css('bottom', 30+'px')
        }else{
            $('#arrow').css('bottom', -70+'px')
        }
    });

    //Click on arrow bring document to top
    $('#arrow').click(function(){
        $(document).scrollTop(0);
    });

    // Show, hide mobile menu
    $('#hamburger-icon').click(function(){
        $('nav').slideToggle();
    });

    // Run image slider
    backgroungImgQuotes(0);


    // On resize make menu visible or hide
    $(window).resize(function(){
        if($(window).outerWidth(true)>768){
            $('nav').css('display','flex');
        }else{
            $('nav').css('display','none');
        }
    });

    // On load hide mobile menu or make visible desktop menu
    if($(window).outerWidth(true)>768){
        $('nav').css('display','flex');
    }else{
        $('nav').css('display','none');
    }

    // Logo scalling on hover
    $('.logo').mouseenter(function(){
        $(this).css('transform', 'scale(1.2)').delay(1000).queue(function(){
            $(this).css('transform', 'scale(1)');
            $(this).dequeue();
        });
    });

    // Open modal window with map
    $('.contactus>p').click(function(){
        $('#modalmap').removeClass('close');
    });
    // Close modal window with map
    window.onclick = function(event) {
        if (event.target.id == "modalmap") {
            $('#modalmap').addClass('close');
        }
    }

    // Start testimonia slider
    testimonialSlider(0);


    // Click on testimonia bullets
    $('#testimonial-bullets').click(function(e){
        clearTimeout(myTimer);                                             //Variable to identify image position
        switch(e.target.id){                                            //Extract clicked button id
            case 'zero': numberTestim=0; break;                     //Select futton and assign position
            case 'one': numberTestim=1; break;
            case 'two': numberTestim=2; break;
            case 'three': numberTestim=3; break;
            case 'four': numberTestim=4; break;
            case 'five': numberTestim=5; break;
        }
        testimonialSlider(numberTestim);

    });


});
// Variables
var number = 0;
var numberTestim = 0;
var myTimer;

// Quotes data base
var quotes=[
    'Tell me and I forget, teach me and I may remember, involve me and I learn. - Benjamin Franklin',
    'Those people who develop the ability to continuously acquire new and better forms of knowledge that they can apply to their work and to their lives will be the movers and shakers in our society for the indefinite future. - Brain Tracy',
    'The more that you read, the more things you will know. The more that you learn, the more places you’ll go. - Dr.  Seus',
    'Change is the end result of all true learning. - Leo Buscaglia',
    'The more I live, the more I learn. The more I learn, the more I realizes, the less I know. – Michel Legrand'
];

// Run banner slider
function backgroungImgQuotes(nextSlideData){
    $('.im').css('transition', 'none');             //Remove transition
    $('.im').css('opacity', 0);                     //Previous image change opacity to 0 instantly
    $('.im').css('transition', 'opacity 1s ease');  //Restore opacity
    nextSlideData = number;                         //Assign next image number
    $('.im').eq(nextSlideData).css('opacity', 1);   //Show image
    $('#text').html(quotes[nextSlideData]).css('top','35%').css('opacity', 1).delay(8000).queue(function(){     //Display text sliding to middle and slowly appering, then wait 8s
        $(this).css('top','100%').css('opacity',0);                                                             //Then move image down and opacity to 0
        $(this).dequeue();                                                                                      //Restore queue
    });
    number++;                                                                                                   //Iterate next position
    if (number>quotes.length-1){number=0; };                                                                    //If number over array length, start from 0
    setTimeout(backgroungImgQuotes, 10000, number)
}

// Testimonial slider
function testimonialSlider(nextSlideData){
     $('#testimonial>p').animate({'opacity': 0});                                   //Fade out previous qoute
    $('#testimonial-bullets p').css('color', '#fff');                               //All bullets colour to white
    nextSlideData = numberTestim;                                                   //Assign next image number
    $('#testimonial-bullets p:eq(' + nextSlideData + ')').css('color', '#B80924');  //Colour our bullet to red
    $('#testimonial>p:eq(' + nextSlideData + ')').animate({'opacity': 1});          //Fade in next quote
    numberTestim++;                                                                 //Iterate next position
    if (numberTestim>6){numberTestim=0; };                                          //If iterator exceed 6 quotes, reset to zero
    myTimer = setTimeout(testimonialSlider, 10000, numberTestim)                    //Start timeout
}