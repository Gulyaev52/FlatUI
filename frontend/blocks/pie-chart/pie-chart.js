$(() => {

    $('.pie-chart').each(function() {
        $(this).find(".pie-chart__items").peity('donut', { 
            radius: 47.5,
            innerRadius: 30.5
        });
    });
});