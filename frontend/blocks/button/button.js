$(() => {

    const findPosInk = (event, parent) => {
        const parentOffset = parent.offset();
        return {
            xPos: event.pageX - parentOffset.left,
            yPos: event.pageY - parentOffset.top
        };
    }

    $('.button')
        .on('mousedown', function() {
            $(this).addClass('button_state_pressed');
        })
        .on('mouseup', function() {
            $(this).removeClass('button_state_pressed');
        })
        .on('click', function (event) {
            event.preventDefault();

            const $button = $(this); 
            
            const $ink = $('<div/>'); 
            const { xPos, yPos } = findPosInk(event, $button);
            
            $ink.addClass('button__ripple-effect')
                .css({ top: yPos, left: xPos })
                .appendTo($button);

            window.setTimeout(() => {
                $ink.remove();
            }, 1000);
        });
});