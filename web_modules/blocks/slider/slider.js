import '../arrow-box/arrow-box'
import '../scale/scale'

import $ from 'jquery'

import 'jquery-ui/ui/widgets/slider.js'
import 'jquery-ui/themes/base/slider.css'

import './slider.styl'


class Slider {
    constructor({ root }) {
        this.$root = $(root);
        this.render();
    }

    render() {
        const $slider = this.$root;

        const value = $slider.data('value');

        const $widget = $slider.find('.slider__widget');

        const $tooltip = $slider.find('.arrow-box');
        
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
    }
}

$(() => {

    $('.slider').each(function () { 
        new Slider({ root: this });
    });

});