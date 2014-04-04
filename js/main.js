$(function () {
    initMobile();
    $(window).resize(function () {
        initMobile();
    });

    $('body').on('click', '.innsite', function (e) {
        e.preventDefault();
        $('body').animate({
            scrollTop: $(e.currentTarget.hash).offset().top
        }, 1000);
    });

    $('.video-run').click(function(){
        $('.under-nav').slideUp('slow');
        $('.hero-video').slideDown('slow');
        $("#movie").click();
    });

    $('.close-video').click(function(){
        $('.under-nav').slideDown('slow');
        $('.hero-video').slideUp('slow');
        $("#movie").click();
    });

    $("#movie").click(function(){
        if (this.paused) {
            this.play();
        } else {
            this.pause();
            this.currentTime = 0;
            //console.log(this);
        }
    });

});

function isMobile() {
    if($(".nav-link").css("display") == "block") {
        return true;
    }
}

console.log('mobile',isMobile());

$(document).scroll(function() {
    if( $(this).scrollTop() > 300 ) {
        $('.top').fadeIn(1000);
        if (isMobile() !== true) {
            $('header h1').slideUp('slow');
            $('nav.nav-column').css({'margin-top': '12px'});
        }
    } else {
        $('.top').fadeOut(1000);
        if (isMobile() !== true) {
            $('header h1').slideDown('slow');
            $('nav.nav-column').css({'margin-top': 'inherit'});
        }
    }
});


function initMobile() {
    if (isMobile() === true) {
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
/*

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
*/
