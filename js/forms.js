(function () {
	$(function () {
		// phone mask
        $("input[type='tel']").mask("+7 (999) 999-99-99");


        // custom number
        $('.custom-number .custom-control-button').on('click', function(e) {
            var target = $(e.currentTarget);
            var oldValue = target.parent().find('input').val();

            if (target.hasClass('inc')) {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            target.parent().find('input').val(newVal);
        });


        // custom choose
        $('.form-choose-group .form-choose').on('click', function(e) {
            var target = $(e.currentTarget);
            var container = target.closest('.form-choose-group');
            var elements = container.find('.form-choose');

            elements.removeClass('is-selected');
            target.addClass('is-selected');
        });
	});	
})();