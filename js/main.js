$(function() {

    $('.innsite').click(function(e) {
        e.preventDefault();
        $.scrollTo(e.currentTarget.hash, 800);
    });

});