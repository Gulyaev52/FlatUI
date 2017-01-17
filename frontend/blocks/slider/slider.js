$(function () {

    $('.slider').each(function () { 
        let $widget = $('.slider__widget', $(this));
        let $tooltip = $('.slider__tooltip', $(this))

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