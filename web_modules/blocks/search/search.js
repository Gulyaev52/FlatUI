import './search.styl'

import '../input/input'

import $ from 'jquery'

class Search {
    constructor({ root }) {
        this.$root = $(root);
        this._attachEventHandlers();
    }

    _attachEventHandlers() {
        const $search = this.$root;
        const $searchInput = $search.find('.input'); 

        $search.on('submit', (event) => {  
            event.preventDefault();

            if (!$searchInput.val()) 
                return;
            
            const errorPlaceholder = 'I\'ve not found what I\'m looking for...';
            $search.addClass('search_error');
            $searchInput.val('').attr('placeholder', errorPlaceholder);
        });

        $searchInput.on('focusin', function (event) {
            if (!$search.hasClass('search_error')) 
                return;

            $search.removeClass('search_error');
            $searchInput.attr('placeholder', 'Search');
        });
    }
}

$(() => {

    $('.search').each(function() {
        new Search({ root: this });
    });
});