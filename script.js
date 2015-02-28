$(function() {

	$(window).scroll(function() {
		/************************
		 * Paralax image effect *
		 ************************/
		var FACTOR = 0.5;
		var $heroImage = $('.hero-image');
		

		/* Calculate percentComplete, which goes from 0 to 1 */
		var distanceScrolled = Math.max(0, $(window).scrollTop());
		var totalDistanceToScroll = $heroImage.height();
		var percentComplete = Math.min(distanceScrolled / totalDistanceToScroll, 1);

		/* Use percentComplete to determine how much we translate */
		var translateY = (percentComplete * 100 * FACTOR);
		var opacityfactor = (1-percentComplete)*(1-percentComplete);
		/* Apply the transform */
		$heroImage.css({'transform': 'translateY(' + translateY + '%)'});
		

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
		 * 
		 
		 var pinpointHome     =  0;
		 var pinpointAbout    =  0;
		 var pinpointSkills   =  0;
		 var pinpointProjects =  0;
		 var pinpointContact  =  0;*/
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
