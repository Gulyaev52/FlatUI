import './percentage.styl'

import $ from 'jquery'
import 'peity'


class Percentage {
    constructor({ root }) {
        this.$root = $(root);
        this.render();
    }

    render() {
        const color = this.$root.data('color');

        this.$root.find('.js-percentage__chart').peity('donut', {
            fill: [color, 'white'],
            radius: 50,
            innerRadius: 45
        });
    }
}

$(() => {
    $('.js-percentage').each(function() { 
        new Percentage({ root: this });
    });
});