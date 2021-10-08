(function($){
	"use strict";
	jQuery(document).on('ready', function () {

		var wind = $(window);
		var parallaxSlider;
		var parallaxSliderOptions = {
			speed: 1000,
			autoplay: true,
			parallax: true,
			loop: true,

			on: {
				init: function () {
					var swiper = this;
					for (var i = 0; i < swiper.slides.length; i++) {
						$(swiper.slides[i])
							.find('.bg-img')
							.attr({
								'data-swiper-parallax': 0.75 * swiper.width
							});
					}
				},
				resize: function () {
					this.update();
				}
			},

			pagination: {
				el: '.slider-prlx .parallax-slider .swiper-pagination',
				dynamicBullets: true,
				clickable: true
			},

			navigation: {
				nextEl: '.slider-prlx .parallax-slider .next-ctrl',
				prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
			}
		};
		parallaxSlider = new Swiper('.slider-prlx .parallax-slider', parallaxSliderOptions);
	
		// Var Background image
		var pageSection = $(".bg-img, section");
		pageSection.each(function (indx) {
			if ($(this).attr("data-background")) {
				$(this).css("background-image", "url(" + $(this).data("background") + ")");
			}
		});
	
        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
        });
        
        // Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
        });

        // Button Hover JS
        $(function() {
            $('.default-btn')
            .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            })
            .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            });
        });
        
        // Popup Video
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
        });


		// Testimonials owl
		$('#testimonial-slide').owlCarousel({
			margin: 0,
			autoplay: true,
			autoplayTimeout: 4000,
			nav: false,
			smartSpeed: 800,
			dots: true,
			autoplayHoverPause: true,
			loop: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
		
		// Menu of The Day Tab
		$('.menu-day-tab-list  li > a ').on('click', function (e) {
			e.preventDefault();
			var target = $(this).attr('href');
			$(this).closest('li').siblings('li').removeClass('active');
			$(this).closest('li').addClass('active');
			$(target).addClass('active');
			$(target).siblings('.menu-single-tab-content').removeClass('active');
		});

        // Tabs
        (function ($) {
            $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            $('.tab ul.tabs li a').on('click', function (g) {
                var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
        })(jQuery);

        // Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('.go-top').addClass('active');
                if (scrolled < 600) $('.go-top').removeClass('active');
            });  
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });
       

    });
	
	// MagnificPopup 
	$('.gallery-container').magnificPopup({
		delegate: '.popimg',
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	
	// Porfolio isotope and filter
	$(window).on('load', function () {
		var galleryIsotope = $('.gallery-container').isotope({
			itemSelector: '.gallery-grid-item'
		});
		$('#gallery-filters li').on('click', function () {
			console.log('on click')
			$("#gallery-flters li").removeClass('filter-active');
			$(this).addClass('filter-active');
			galleryIsotope.isotope({
				filter: $(this).data('filter')
			});
		});
	});
	
	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW ({
                boxClass:     'wow',      // Animated element css class (default is wow)
                animateClass: 'animated', // Animation css class (default is animated)
                offset:       20,         // Distance to the element when triggering the animation (default is 0)
                mobile:       true,       // Trigger animations on mobile devices (default is true)
                live:         true,       // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });

    // Preloader Area
    $(document).ready(function() {
        setTimeout(function(){
            $('body').addClass('loaded');
        }, 1200);
    });
	
	// Ajax mail js
	$(function() {

		// Get the form.
		var form = $('#contact-form');

		// Get the messages div.
		var formMessages = $('.form-message');

		// Set up an event listener for the contact form.
		$(form).submit(function(e) {
			// Stop the browser from submitting the form.
			e.preventDefault();

			// Serialize the form data.
			var formData = $(form).serialize();

			// Submit the form using AJAX.
			$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData
			})
			.done(function(response) {
				// Make sure that the formMessages div has the 'success' class.
				$(formMessages).removeClass('error');
				$(formMessages).addClass('success');

				// Set the message text.
				$(formMessages).text(response);

				// Clear the form.
				$('#contact-form input,#contact-form textarea').val('');
			})
			.fail(function(data) {
				// Make sure that the formMessages div has the 'error' class.
				$(formMessages).removeClass('success');
				$(formMessages).addClass('error');

				// Set the message text.
				if (data.responseText !== '') {
					$(formMessages).text(data.responseText);
				} else {
					$(formMessages).text('Oops! An error occured and your message could not be sent.');
				}
			});
		});

	});
	
}(jQuery));