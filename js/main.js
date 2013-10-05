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
            'modestbranding': 1,
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
            player.setPlaybackQuality('highres');
            $('.not-a-player').slideUp('fast');
            $('#ytplayerdiv')
                .removeClass('w-col-6')
                .addClass('w-col-12')
                .attr('height','500');
        }
        if (e.data === 0 || e.data === 2) {
            $('.not-a-player').fadeIn('slow');
            $('#ytplayerdiv')
                .removeClass('w-col-12')
                .addClass('w-col-6')
                .attr('height','230');
        }
    });
}
