$(function() {

	$(window).scroll(function() {
		/************************
		 * Paralax image effect *
		 ************************/
		var FACTOR = 0.5;
		var $heroImage = $('.hero-image');
		var $heroHeader = $('.hero h1');
		

		/* Calculate percentComplete, which goes from 0 to 1 */
		var distanceScrolled = Math.max(0, $(window).scrollTop());
		var totalDistanceToScroll = $heroImage.height();
		var percentComplete = Math.min(distanceScrolled / totalDistanceToScroll, 1);

		/* Use percentComplete to determine how much we translate */
		var translateY = (percentComplete * 100 * FACTOR);
		var opacityfactor = (1-percentComplete)*(1-percentComplete)*(1-percentComplete);
		/* Apply the transform */
		$heroImage.css({'transform': 'translateY(' + translateY + '%)'});
		$heroHeader.css({'opacity':opacityfactor});

		/**********************
		 * Pinning the navbar *
		 **********************/

		var $navbar = $('nav');
		var $navbarWrapper = $('.navbar-wrapper')

		/* navbarWrapper never moves, so it's a good pinPoint */
		var pinPoint = $navbarWrapper.offset().top;

		/* add or remove the 'pinned' class depending on what side of the pin
		 * point we are.
		 */
		if (distanceScrolled >= pinPoint) {
			$navbar.addClass('pinned');
		} else {
			$navbar.removeClass('pinned')
		}
		
		/***********************
		 * Highlighting buttons*
		 * *********************/
		 
		 var pinpointHome     =  $('.hero').offset().top;
		 var pinpointAbout    =  $('.vision').offset().top;
		 var pinpointSkills   =  $('.product').offset().top;
		 var pinpointProjects =  $('.projects').offset().top;
		 var pinpointContact  =  $('.team').offset().top;
		 
		 var $oldHighlight = $('.button.action-item');
		 
		 if(pinpointAbout>distanceScrolled>0){
		 	$('.button[data-no="1"]').addClass('action-item');
		 	$oldHighlight.removeClass('action-item');
		 }
		 else if(pinpointSkills>distanceScrolled>pinpointAbout){
		 	$('.button[data-no="2"]').addClass('action-item').addClass('action-item');
		 	$oldHighlight.removeClass('action-item');
		 }
		 else if(pinpointProjects>distanceScrolled>pinpointSkills){
		 	$('.button[data-no="3"]').addClass('action-item').addClass('action-item');
		 	$oldHighlight.removeClass('action-item');
		 }
		 else if(pinpointContact>distanceScrolled>pinpointProjects){
		 	$('.button[data-no="4"]').addClass('action-item').addClass('action-item');
		 	$oldHighlight.removeClass('action-item');
		 }
		 else{
		 	$('.button[data-no="5"]').addClass('action-item').addClass('action-item');
		 	$oldHighlight.removeClass('action-item');
		 }
	});

	/*************
	 * Scroll to *
	 *************/

	$('a[href*="#"]').click(function(e) {
		e.preventDefault();
		var $target = $($(this).attr('href'));
		var scrollTop = $target.offset().top;
		$('html, body').animate({'scrollTop': scrollTop}, 500);
	});

});
