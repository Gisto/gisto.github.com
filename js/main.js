var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        width: '100%',
        height: 230,
        videoId: 'lICNPYgv7Ac',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'modestbranding': 1,
            'rel': 0,
            'showinfo': 0,
            'color': 'white',
            'theme': 'light'
        },
        events: {
            'onReady': onReady
        }
    });
}

function onReady() {
    player.addEventListener('onStateChange', function (e) {
        if (e.data === 1) {
            $('.not-a-player').fadeOut('fast');
            $('#ytplayer').removeClass('w-col-6');
            $('#ytplayer').addClass('w-col-12');
            $('#ytplayer iframe').width('100%').height('500px');
        }
        if (e.data === 0) {
            $('.not-a-player').fadeIn('fast');
            $('#ytplayer').removeClass('w-col-12');
            $('#ytplayer').addClass('w-col-6');
            $('#ytplayer iframe').width('100%').height('230px');
        }
    });
}