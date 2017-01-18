$(() => {

    $('.stages').each(function() {
        const stagesLength = $(this).data('length');
        const stagesProgress = $(this).data('progress');

        const progressPercent = `${100 * (stagesProgress - 1) / (stagesLength - 1)}%`;

        $(this).find('.stages__progress').css('width', progressPercent)
    });
});