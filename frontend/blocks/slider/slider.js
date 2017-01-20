$(function () {

    $('.slider').each(function () { 
        const $slider = $(this);

        const value = $slider.data('value');

        const $widget = $('.slider__widget', $slider);
        const $tooltip = $('.slider__tooltip', $slider);

        $widget.slider({
            animate: true,
            range: "min",
            min: 0,
            max: 100,
            value,
            slide: (_, ui) => {
                $tooltip.html(ui.value)
            }
        });
    });

});