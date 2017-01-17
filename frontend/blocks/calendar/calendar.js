'use strict';

$(function () {

    $('.calendar').each(function () {

        let $day = $('.calendar__day', $(this));

        let $widget = $('.calendar__widget', $(this));
        $widget.datepicker({
            changeYear: false,
            altField: $day,
            altFormat: "dd",
            firstDay: 1,
            showOtherMonths: true 
        });

        $('.calendar__btn-today', $(this)).on('click', () => {
            $widget.datepicker('setDate', new Date());
        })
    });
});
