(function () {
	function createProductCollections() {
		$('.swiper-product-collection').each(function (_, container) {
            var jContainer = $(container);
            new Swiper(jContainer, {
                slidesPerView: 1.3,
                slidesPerGroup: 1,
                loop: true,
                breakpointsInverse: true,

                navigation: {
                    nextEl: jContainer.find('.swiper-collection-button-next'),
                    prevEl: jContainer.find('.swiper-collection-button-prev'),
                },

                breakpoints: {
                    480: {
                        slidesPerView: 2.1,
                        slidesPerGroup: 2,
                        loop: true
                    }
                }
            });
        });
	}

	function destroyProductCollections() {
		$('.swiper-product-collection').each(function(index, element){
            if (typeof element.swiper != 'undefined' && element.swiper != null) {
                element.swiper.destroy();
            }
        })
	}

	$(function () {
        if( windowSizeHelper.isPhone() ) {
            createProductCollections();
        } else {
            destroyProductCollections();
        }
        
		$('.product-collection-toggle').on('click', function(e) {
			var target = $(e.currentTarget);
			var container = target.closest('.product-collections-box');
			var swiperContainer = container.find('.swiper-product-collection');
			var secondarySlides = container.find('.swiper-slide.secondary-slide');

            target.toggleClass('is-active');
			secondarySlides.slideToggle();
		})
	});


	beforeWindowWidthResizeFunctions.push(function() {
        if(windowSizeHelper.isPhoneToTabletResize()) {
            destroyProductCollections();
        }

        if(windowSizeHelper.isTabletToPhoneResize()) {
            createProductCollections();
        }
    });
})();