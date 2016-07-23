$(document).ready(function(){
    $('.masonry-list > li>a').click(function(){

        $('.tile-secondary-content>p',this).toggleClass("clicked-secondary-p");

        $('.tile-primary-content>p',this).toggleClass("clicked-primary-p");
        $('.tile-primary-content>img',this).toggleClass("clicked-primary-p");

        if($(this).find('#cms-logos').length != 0){
            $(this).find('#cms-logos').toggleClass('animated slideInDown cms-logos');
        }
        if($(this).find('#front-end-logos').length != 0){
            $(this).find('#front-end-logos').toggleClass('animated slideInDown front-end-logos');
        }
        if($(this).find('#cloud').length != 0){
            $(this).find('#cloud').toggleClass('animated slideInRight cloud');
        }
        
        $('.tile-primary-content', this).toggleClass('remove-bg-image');
    });

    $('.masonry-list>li>a').mouseleave(function(){
        $('.tile-secondary-content>p',this).removeClass("clicked-secondary-p");
        $('.tile-primary-content>p',this).removeClass("clicked-primary-p");
        $('.tile-primary-content>img',this).removeClass("clicked-primary-p");
        $(this).find('#cms-logos').removeClass('cms-logos');
        $(this).find('#front-end-logos').removeClass('front-end-logos');
        $(this).find('#cloud').removeClass('slideInRight cloud');
        $('.tile-primary-content', this).removeClass('remove-bg-image');


    });


});