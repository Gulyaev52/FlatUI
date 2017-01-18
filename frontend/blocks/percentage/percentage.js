$(() => {
    $('.percentage').each(function() { 
        const color = $(this).data('color');

        $(this).find('.percentage__chart').peity('donut', {
            fill: [color, 'white'],
            radius: 50,
            innerRadius: 45
        });
    });
});