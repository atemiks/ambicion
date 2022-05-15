(function () {
	var reInitSlider = function () {
		$('.swiper-collection').each(function (_, container) {
            var jContainer = $(container);
            var sliderDirection;

            if (jContainer.length === 1 && jContainer.get(0).swiper) {
                jContainer.get(0).swiper.destroy(true, true);
            }
            
            let width = $(window).width();
            
            if(window.innerWidth >= 480) {
                sliderDirection = 'vertical';
            } else {
                sliderDirection = 'horizontal';
            }

            new Swiper(jContainer, {
                direction: sliderDirection,
                slidesPerView: 1,
                slidesPerGroup: 1,
                breakpointsInverse: true,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                loop: true,

                breakpoints: {
                    480: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        loop: true,
                    },
                    1200: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        loop: true,
                    }
                },

                navigation: {
                    nextEl: jContainer.find('.swiper-collection-button-prev'),
                    prevEl: jContainer.find('.swiper-collection-button-next'),
                }
            });
        });
	}

	$(function () {
        reInitSlider();
        $(window).on('resize', function () {
            setTimeout(function () {
                reInitSlider();
            }, 300)
        });
    });
})();