/* ==========================================================================================
Author          : tean Codiov
Making          : Niran Yousuf & Ibrahim hasnat
Version         : 1.0
Visit Us On       : www.codiov.com
=========================================================================================== */
(function ($) {
	"use strict";
    jQuery(document).ready(function ($) {
        // dropdown menu script ===============================================================
        $('.mainMenu').on('click', '.dropMenu', function () {
            $(this).siblings('.dropMenu').children('.subMenu').slideUp(300);
            $(this).children('.subMenu').slideToggle(300);
        });    
        // res jponsive mobile menu ===========================================================
        
        $('.fa-bars').on('click', function () {
            $('.mainMenu').slideToggle(300);
        });
		// image content hight selection =======================================================
        var imageGrad = $('.img-content'),
            image = $('.fit-image');
        function resizeDiv() {
            if ($(window).width() < 767) {
                image.height();
            } else {
                image.height(imageGrad.height());
            }
        }
        resizeDiv();
        // $(window).resize(function() { resizeDiv(); });
        
        // owl carousel script for testimonials ==================================================
        $('#slider-image').owlCarousel({
            autoPlay: 5000,
            navigation : false,
            singleItem : true,
            pagination : false
        });
        
        // owl carousel script for testimonials ==================================================
        $('#testimonial').owlCarousel({
            autoPlay: true,
            navigation : false,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem : true
        });
		// Owl Carousel script for clients list ===================================================
        $('#client-list').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoPlay: true,
            navigation : false,
            responsive: {
                400: {
                    items: 2
                },
                700: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });
        // wow js animation plugin ===============================================================
        new WOW().init();
        
    });
    // preloader script ===========================================================================
    $(window).on('load', function () {
        setTimeout(function(){
            $('#preloader')
                .fadeOut('slow')
        },700);
    }); 

}(jQuery));