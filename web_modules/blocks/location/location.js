import './location.styl';
import '../icon/icon'

import $ from 'jquery'
import ymaps from 'ymaps'


class Location {
    constructor({ root }) {
        this.$root = $(root);
        this.render();
    }

    render() {  
        const coordinates = this.$root.data('coordinates');

        ymaps.ready(() => {
            const locationMapId = this.$root.find(".js-location__map").prop("id"); 

            const map = new ymaps.Map(locationMapId, {
                center: coordinates,
                zoom: 15,
                controls: []
            }); 

            const placemark = new ymaps.Placemark(coordinates, {}, {
                iconLayout: 'default#image',
                iconImageHref: require('./img/marker.png'),
                iconImageSize: [56, 60]
            })

            map.geoObjects.add(placemark);
        });
    }
}

$(() => {

    $('.js-location').each(function() {
        new Location({ root: this });
    });
});