import './stages.styl'

import $ from 'jquery'

class Stages {
    constructor({ root }) {
        this.$root = $(root);
        this.render();
    }

    render() {
        const stagesLength = this.$root.data('length');
        const stagesProgress = this.$root.data('progress');

        const progressPercent = `${100 * (stagesProgress - 1) / (stagesLength - 1)}%`;

        this.$root.find('.js-stages__progress').css('width', progressPercent)
    }   
}

$(() => {
    $('.js-stages').each(function() {
        new Stages({ root: this });
    });
});