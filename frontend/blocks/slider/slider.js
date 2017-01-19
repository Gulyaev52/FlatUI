$(function () {

    $('.slider').each(function () { 
        const $widget = $('.slider__widget', $(this));
        const $tooltip = $('.slider__tooltip', $(this))

        $widget.slider({
            animate: true,
            range: "min",
            min: 0,
            max: 100,
            slide: (_, ui) => {
                $tooltip.html(ui.value)
            }
        });
    });

});