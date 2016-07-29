$(document).ready(function(){
	// Google Analytics.
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
	  ga('create', 'UA-66110956-1', 'auto');
	  ga('send', 'pageview');
	


	var isMenuOpen = false;
	var menuSlide = true;

	// when the site loads
	$('.logo').addClass('animated fadeIn');

	$('#menu > div > ul > li > a').click(function(){
		$( "#menu" ).slideUp( "slow" );
  	  	$('.logo').show();
  	  	$('.main-button-container').delay(1000).show().delay(1000);
  	  	$('.nav-icon2').removeClass('open');
  	  	isMenuOpen = false;
	});

	$('.nav-icon2').hover(function(){
		$(this).addClass('animated pulse');
	}, function(){
		$(this).removeClass('animated pulse');
	});

	$('.nav-icon2').unbind().click(function(){
		$('.nav-icon2').toggleClass('open');
		$('#top-menu-bar').toggleClass('top-menu-bar');
		$('.menu-bar').hide();
		menuSlide = true;

	if ( $( "#menu" ).is( ":hidden" ) ) {
  	  	$( "#menu" ).slideDown( "slow" );
  	  	$('.logo').hide();
		$('.main-button-container').hide();
		isMenuOpen = true;

 	} else {
    		$( "#menu" ).slideUp( "slow" );
  	  	$('.logo').show();
  	  	$('.main-button-container').delay(1000).show().delay(1000);
		isMenuOpen = false;

  	}
	});


	$('.smooth-scroll').on('click', function(e){
    	e.preventDefault();
    	var target = $(this).attr('href');
    	target = $(target);
    	console.log(target); 
    	$('html, body').stop().animate({
    	   scrollTop: target.offset().top
    	}, 1000);
	});

	$('.masonry-list > li > a').click(function(){
		// disable clicks in tiles
		return false;
	});
	$(window).scroll(function () {
		var top = $(window).scrollTop();
		$('.row.description-section').each(function(){
			var height = $(this).height();
			var opc = (((height - top)) / height)+0.7

			if(opc<0) return;
			$(this).css({
				'opacity':  opc
			});
		});

// menu bar 
		$('.scrollable').each(function(){
			var offsetTop = $(this).offset().top;
			d = offsetTop - top;
			if(d < 0){
				if(!menuSlide || isMenuOpen) return;
				$('.menu-bar').slideDown();
				menuSlide = false;
			}
			else{
				$('.menu-bar').slideUp();
				menuSlide = true;
			}
		});

// logo animation on scroll
		$('.logo').each(function () {
			var imagePos = $(this).offset().top;
			var imageHeight = $(this).height();
			var topOfWindow = $(window).scrollTop();

			if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
				$(this).addClass("animated slow");
			} else {
				$(this).addClass("animated slow");
			}
		});

		// pipeline animation

		$('#pipeline').each(function(){
			var divPos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			var offsetPipe = 500;

			if(window.screen.width < 600){
				offsetPipe = 1300;

			}
			else{
				offsetPipe = 500;
			}

			var color = topOfWindow-divPos + offsetPipe;// 500  default offset
			var divHeight = $('#pipeline').height();
			
			if(color > divHeight)
				$(this).height(color);

			$('.circle').each(function(){
				var circle = $(this).offset().top;
				
				if(topOfWindow+400 > Math.floor(circle)){
					$(this).addClass('animated bounceIn');
				}
			});

			
		});

 	
});

	//initialize swiper when document ready  
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
		pagination: '.swiper-pagination',
    paginationClickable: true,  

  })    


});