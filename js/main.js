$(function () {
    initMobile();
    $(window).resize(function () {
        initMobile();
    });

});

function initMobile() {
    if ($(".nav-link").css("display") == "block") {
        $('.nav-column').hide();
        $('header').append('<div class="mobile-menu"><i class="icon-reorder icon-2x"></i></div>');
        $('.mobile-menu').click(function () {
            $('.nav-column').slideToggle();
        });
    } else {
        $('.mobile-menu').hide();
        $('.nav-column').show();
    }
}

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayerdiv', {
        width: '100%',
        height: 230,
        videoId: 'lICNPYgv7Ac',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            modestbranding: true,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onReady': onReady
        }
    });
}

function onReady() {
    player.addEventListener('onStateChange', function (e) {
        if (e.data === 1) {

            $('.not-a-player').slideUp('fast');
            $('#ytplayerdiv')
                .removeClass('w-col-6')
                .addClass('w-col-12');
            var vid_width = $('#ytplayerdiv').width();
            var vid_ratio = 16 / 9;

            $('#ytplayerdiv')
                .attr('width', vid_width)
                .attr('height', vid_width / vid_ratio);
        }
        if (e.data === 0 || e.data === 2) {
            $('.not-a-player').fadeIn('slow');
            $('#ytplayerdiv')
                .removeClass('w-col-12')
                .addClass('w-col-6');
            var vid_width = $('#ytplayerdiv').width();
            var vid_ratio = 16 / 9;

            $('#ytplayerdiv')
                .attr('width', vid_width)
                .attr('height', vid_width / vid_ratio);
        }
    });
}
