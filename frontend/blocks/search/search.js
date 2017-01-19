$(() => {

    $('.search').each(function() {

        const $search = $(this);
        const $searchInput = $search.find('.search__input'); 

        $search.find('.search__button').on('click', event => { 
            event.preventDefault();

            if (!$searchInput.val()) 
                return;
            
            const errorPlaceholder = 'I\'ve not found what I\'m looking for...';
            $search.addClass('search_error');
            $searchInput.val('');
            $searchInput.attr('placeholder', errorPlaceholder);
        });

        $searchInput.on('focusin', function (event) {
            if (!$search.hasClass('search_error')) 
                return;

            $search.removeClass('search_error');
            $searchInput.attr('placeholder', 'Search');
        });
    });
});