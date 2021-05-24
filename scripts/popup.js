$(document).ready(function($) {
    $('.open-popup').click(function() {
        $('.pop-back').fadeIn();
        return false;
    });

    $('.pop-close').click(function() {
        $(this).parents('.pop-back').fadeOut();
        return false;
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.pop-back').fadeOut();
        }
    });
});