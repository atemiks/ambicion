(function () {
	var reInitSlider = function () {
        $('.product-gallery').each(function (_, wrapperEl) {
            var wrapper = $(wrapperEl);

            var thumbsWrapper = wrapper.find('.product-thumbnails');
            var thumbsContainer = thumbsWrapper.find('.swiper-container');

            var imagesWrapper = wrapper.find('.product-images');
            var imagesContainer = imagesWrapper.find('.swiper-container');

            if (thumbsContainer.length === 1 && thumbsContainer.get(0).swiper) {
                thumbsContainer.get(0).swiper.destroy(true, true);
            }

            if (imagesContainer.length === 1 && imagesContainer.get(0).swiper) {
                imagesContainer.get(0).swiper.destroy(true, true);
            }

            var width = $(window).width();
            var imagesSwiper = null;
            var thumbsSwiper = null;
            if (width >= 768) {
                var thumbsDirection;
                var slidesPerView = 3;
                
                if (width >= 1024) {
                    thumbsDirection = 'vertical';
                } else {
                    thumbsDirection = 'horizontal';
                }

                var thumbsPrev = thumbsWrapper.find('.swiper-thumbnail-button-prev');
                var thumbsNext = thumbsWrapper.find('.swiper-thumbnail-button-next');

                if (slidesPerView < thumbsContainer.find('.swiper-slide').length) {
                    thumbsPrev.addClass('visible');
                    thumbsNext.addClass('visible');
                    thumbsSwiper = new Swiper(thumbsContainer, {
                        direction: thumbsDirection,
                        slidesPerView: slidesPerView,
                        watchSlidesVisibility: true,
                        watchSlidesProgress: true,
                        navigation: {
                            prevEl: thumbsPrev,
                            nextEl: thumbsNext
                        }
                    });
                }
            }

            if (imagesContainer.find('.swiper-slide').length > 1) {
                var swiperOptions = {
                    // loop: true,
                    pagination: {
                        el: imagesWrapper.find('.swiper-pagination'),
                        clickable: true
                    }
                };
                if (thumbsSwiper) {
                    $.extend(swiperOptions, {
                        thumbs: {
                            swiper: thumbsSwiper
                        }
                    });
                }

                imagesSwiper = new Swiper(imagesContainer, swiperOptions);
            }

            if(thumbsContainer.find('.swiper-slide').length > 1) {
                var slideElements = thumbsContainer.find('.swiper-slide');

                slideElements.click(function (e) {
                    e.preventDefault();

                    var index = slideElements.index(e.currentTarget);
                    // if loop in main slider enable
                    // index += 1;

                    imagesSwiper.slideTo(index);
                });
            }
        });
    };

	$(function () {
        reInitSlider();
        var reInitThumbsTimeout;
        $(window).on('resize', function () {
            if (reInitThumbsTimeout) {
                clearTimeout(reInitThumbsTimeout);
            }
            setTimeout(function () {
                reInitSlider();
            }, 300)
        });
    });
})();