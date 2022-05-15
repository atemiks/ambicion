(function () {
    $(function () {
        $("#range-slider").slider({
            range: true,
            min: 0,
            max: 50000,
            step: 50,
            values: [5500, 35000],
            slide: function(event, ui) {
                var delay = function() {
                    var handleIndex = $(ui.handle).index() - 1;
                    var label = handleIndex == 0 ? '#range-slide-label-min' : '#range-slide-label-max';
                    $(label).html(ui.value + '<span class="rouble" >руб.</span>').position({
                        my: 'center top',
                        at: 'center bottom',
                        of: ui.handle,
                        offset: "0, 10"
                    });
                };
                
                // wait for the ui.handle to set its position
                setTimeout(delay, 5);
            }
        });

        $('#range-slide-label-min').html($('#range-slider').slider('values', 0) + '<span class="rouble" >руб.</span>').position({
            my: 'center top',
            at: 'center bottom',
            of: $('#range-slider .ui-slider-handle:eq(0)'),
            offset: "0, 10"
        });

        $('#range-slide-label-max').html($('#range-slider').slider('values', 1) + '<span class="rouble" >руб.</span>').position({
            my: 'center top',
            at: 'center bottom',
            of: $('#range-slider .ui-slider-handle:eq(1)'),
            offset: "0, 10"
        });
    });
})();