$(function() {

    $('.links').click(function(e) {
        e.preventDefault();
        $.scrollTo(e.currentTarget.hash, 800);
    });

});