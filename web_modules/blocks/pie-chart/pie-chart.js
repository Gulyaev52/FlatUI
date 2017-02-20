import './pie-chart.styl'

import $ from 'jquery'
import 'peity'


class PieChart {
    constructor({ root }) {
        this.$root = $(root);
        this.render();
    }

    render() {  
        this.$root.find(".js-pie-chart__items").peity('donut', { 
            radius: 47.5,
            innerRadius: 30.5
        });
    }
}

$(() => {
    $('.js-pie-chart').each(function() {
        new PieChart({ root: this });
    });
});