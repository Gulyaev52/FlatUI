$(() => {

    $('.calendar').each(function () {

        const $day = $(this).find('.calendar__day');

        const $widget = $(this).find('.calendar__widget'); 
        $widget.datepicker({
            changeYear: false,
            altField: $day,
            altFormat: "dd",
            firstDay: 1,
            showOtherMonths: true 
        });

        $(this).find('.calendar__btn-today').on('click', () => {
            $widget.datepicker('setDate', new Date());
        })
    });
});
