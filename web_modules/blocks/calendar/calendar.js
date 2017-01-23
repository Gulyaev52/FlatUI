import '../input/input.styl'
import './calendar.styl'

import $ from 'jquery'

import 'jquery-ui/ui/widgets/datepicker.js';
import 'jquery-ui/themes/base/datepicker.css'; 

class Calendar {
    constructor({ root }) {
        this.$root = $(root);
        this.$widget = this.$root.find('.calendar__widget'); 
        this.render();
    }

    render() {
        const $day = this.$root.find('.calendar__day');

        this.$widget.datepicker({
            changeYear: false,
            altField: $day,
            altFormat: "dd",
            firstDay: 1,
            showOtherMonths: true 
        });

        this.setTodayDate();
    }

    setTodayDate() {
        this.$root.find('.calendar__btn-today').on('click', () => {
            this.$widget.datepicker('setDate', new Date());
        })
    }
}

$(() => { 
    $('.calendar').each(function () {
        new Calendar({ root: this });
    });
});
