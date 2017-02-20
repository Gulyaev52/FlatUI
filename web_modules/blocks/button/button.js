import './button.styl'

import $ from 'jquery'


class Button {

    constructor({ root }) {
        this.$root = $(root);
        this._attachEventHandlers();
    }

    _attachEventHandlers() { 
        this.$root
            .on('mousedown', function() { 
                $(this).addClass('button_state_pressed');
            })
            .on('mouseup', function() {
                $(this).removeClass('button_state_pressed');
            })
            .on('click', this._showRippleEffect.bind(this));
    }

    _showRippleEffect(event) {
        event.preventDefault();
        
        const $button = this.$root;
        
        const $ink = $('<div/>'); 

        const buttonOffset = $button.offset(); 
        const { xPos, yPos } = this._findPosInk(event, buttonOffset);
        
        $ink.addClass('button__ripple-effect')
            .css({ top: yPos, left: xPos })
            .appendTo($button);

        window.setTimeout(() => {
            $ink.remove();
        }, 1000);
    }

    _findPosInk(event, parentOffset) { 
        return {
            xPos: event.pageX - parentOffset.left,
            yPos: event.pageY - parentOffset.top
        };
    }
}
 
$(() => {

    $('.js-button').each(function() {
        new Button({ root: this })
    });
});