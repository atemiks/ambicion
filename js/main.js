(function ($) {
    // sticky header
    var headerContainer = $('.header-box');
    var scrollTop = 0;

    function stickyHeader() {
        scrollTop = $(window).scrollTop();

        if (scrollTop >= 80) {
             headerContainer.addClass('is-sticky');
        } else {
            headerContainer.removeClass('is-sticky');
        }
    }


    $(document).ready(function() {
        // sticky header
        stickyHeader();

        // fancybox
        $('[data-fancybox]').fancybox({
            buttons: [
                "close"
            ]
        })

        // offcanvas
        $('.offcanvas-toggle').on('click', function(e) {
            $(e.currentTarget).toggleClass('is-active');
            $('#offcanvas').toggleClass('is-open');
        })


        // sliders
        $('.swiper-products').each(function (_, container) {
            var jContainer = $(container);
            new Swiper(jContainer, {
                slidesPerView: 1.3,
                slidesPerGroup: 1,
                loop: true,
                breakpointsInverse: true,
                navigation: {
                    nextEl: jContainer.find('.swiper-products-button-next'),
                    prevEl: jContainer.find('.swiper-products-button-prev'),
                },

                breakpoints: {
                    480: {
                        slidesPerView: 2.1,
                        slidesPerGroup: 2,
                        loop: true
                    },
                    768: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        loop: true
                    },
                    1024: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        loop: true
                    }
                }
            });
        });

        

        $('.swiper-watched').each(function (_, container) {
            var jContainer = $(container);
            new Swiper(jContainer, {
                slidesPerView: 1.3,
                slidesPerGroup: 1,
                loop: true,
                breakpointsInverse: true,
                navigation: {
                    nextEl: jContainer.find('.swiper-watched-button-next'),
                    prevEl: jContainer.find('.swiper-watched-button-prev'),
                },

                breakpoints: {
                    480: {
                        slidesPerView: 2.1,
                        slidesPerGroup: 2,
                        loop: true
                    },
                    768: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        loop: true
                    },
                    1024: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        loop: true
                    }
                }
            });
        });
    })

    $(window).scroll(function(){
        stickyHeader();
    });
}) (jQuery);