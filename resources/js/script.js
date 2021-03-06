$(document).ready(function(){
    // Sticky Nav
    $('.js-section-feature').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky')
        }
    },{
        offset: '10%'
    });

    // Scroll Btn 
    
    $('.js-btn-full').click(function(){
        $('html,body').animate({scrollTop: $('.js-section-plans').offset().top},1000)
    })  
    $('.js-btn-ghost').click(function(){
        $('html,body').animate({scrollTop: $('.js-section-feature').offset().top},1000)
    });

    // Nav Btn Effect

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });
    // Animation Scroll
    $('.js-wp-1').waypoint(function(direction){
        if(direction == 'down'){
            $($('.js-wp-1')).addClass('animate__animated animate__fadeIn')
        }
    },{
        offset: '50%'
    });

    $('.js-wp-2').waypoint(function(direction){
        $('.js-wp-2').addClass('animate__animated animate__fadeInUpBig')
    },{
        offset: '50%'
    });

    $('.js-wp-3').waypoint(function(direction){
        $('.js-wp-3').addClass('animate__animated animate__fadeIn')
    },{
        offset: '50%'
    });

    //Mobile Nav

    $('.mobile-icon').click(function(){
        $('.main-nav').slideToggle(200);
        if($('.mobile-icon i').hasClass('fa-bars')){
            $('.mobile-icon i').removeClass('fa-bars');
            $('.mobile-icon i').addClass('fa-times');
        } else{
            $('.mobile-icon i').removeClass('fa-times');
            $('.mobile-icon i').addClass('fa-bars');  
        }
    })
});