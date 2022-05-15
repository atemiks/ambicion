(function () {
	var megamenu = $('#megamenu');

	function openMegamenu() {
		$(megamenu).addClass('is-open');
	}

	function closeMegamenu() {
		$(megamenu).removeClass('is-open');
	}

	function collapseMegamenu() {
		$('.megamenu-catalog-content.collapse').collapse('hide');
        $('.megamenu-catalog-nav.collapse').collapse('hide');
	}

	function unCollapseMegamenu() {
		$('.megamenu-catalog-content.collapse').collapse('show');
        $('.megamenu-catalog-nav.collapse').collapse('show');
	}


	$(function () {
		// open megamenu
		$('.header-megamenu-toggle').on('click', openMegamenu);

		// close megamenu
		$('.megamenu-close').on('click', closeMegamenu);


        if( !windowSizeHelper.isPhone() ) {
            unCollapseMegamenu()
        }
	});


	beforeWindowWidthResizeFunctions.push(function() {
        if(windowSizeHelper.isPhoneToTabletResize()) {
            unCollapseMegamenu()
        }

        if(windowSizeHelper.isTabletToPhoneResize()) {
            collapseMegamenu();
        }
    });
})();