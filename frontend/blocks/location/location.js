$(() => {

    $('.location').each(function() {   
        const coordinates = $(this).data('coordinates');

        ymaps.ready(() => {
            const locationMapId = $(this).find(".location__map").prop("id"); 

            const map = new ymaps.Map(locationMapId, {
                center: coordinates,
                zoom: 15,
                controls: []
            }); 

            const placemark = new ymaps.Placemark(coordinates, {}, {
                iconLayout: 'default#image',
                iconImageHref: './blocks/location/img/marker.png',
                iconImageSize: [56, 60]
            })

            map.geoObjects.add(placemark);
        });
    });
});