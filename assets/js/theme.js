/*
    Main Js Theme File
*/

$(function () {
    "use strict";

    //* mainNavbar
    function mainNavbar() {
        if ($('#main_navbar').length) {
            $('#main_navbar').affix({
                offset: {
                    top: 10,
                    bottom: function () {
                        return (this.bottom = $('.footer').outerHeight(true))
                    }
                }
            });
        };
    };


    //* Products Carosel
    function productsCarosel() {
        if ($('.products_carosel').length) {
            $('.products_carosel').owlCarousel({
                loop: true,
                items: 3,
                margin: 10,
                autoplay: true,
                response: true,
                responsive: {
                    300: {
                        items: 1,
                        margin: 0,
                    },
                    500: {
                        items: 1,
                    },
                    700: {
                        items: 2,
                    },
                    800: {
                        items: 3,
                        margin: 40,
                    },
                    1000: {
                        items: 3,
                    },
                }
            });
        };
    };
    //* Testimonial Carosel
    function partnersCarosel() {
        if ($('.partners').length) {
            $('.partners').owlCarousel({
                loop: true,
                items: 5,
                margin: 100,
                autoplay: true,
                response: true,
                responsive: {
                    300: {
                        items: 1,
                        margin: 0,
                    },
                    500: {
                        items: 2,
                    },
                    700: {
                        items: 3,
                    },
                    800: {
                        items: 4,
                        margin: 40,
                    },
                    1000: {
                        items: 5,
                    },
                }
            });
        };
    };


    // Scroll Go To Up
    $('.Go_To_Up').click(function (e) {

        e.preventDefault();
        $('html, body').animate({

            scrollTop: 0

        }, 500);

    });

    /*Function Calls*/
    new WOW().init();
    productsCarosel();
    partnersCarosel();
    mainNavbar();

});
