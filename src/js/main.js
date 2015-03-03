$(function () {

    initMobile();
    $(window).resize(function () {
        initMobile();
    });

    $('body').on('click', '.innsite', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(e.currentTarget.hash).offset().top -50
        }, 1000);
    });

    $('.video-run').click(function () {
        $('.hero-video').slideDown('slow');
        $('.under-nav').slideUp('slow');
        //$("#movie").click();
        Slides('play');
    });

    $('.close-video').click(function () {
        $('.hero-video').slideUp('slow');
        $('.under-nav').slideDown('slow');
        //$("#movie").click();
        Slides('stop');
    });

    $("#movie").click(function () {
        if (this.paused) {
            this.play();
        } else {
            this.pause();
            this.currentTime = 0;
        }
    });
    var interval = null;

    function Slides(play) {
        if (play === 'play') {
            var fheight = $('#fader img:first').height();
            $('#fader img:gt(0)').hide();
            $('#fader').animate({
                height: fheight
            }, 2500, function () {
                console.log('ANIM');
            });
            interval = window.setInterval(fader, 6000);
        } else {
            window.clearInterval(interval);
            interval = null;
            console.log('slide stop');
        }
    }

    function fader() {
        $('#fader :first-child')
            .fadeTo(1000,0)
            .next('img')
            .fadeTo(1000,1)
            .end()
            .appendTo('#fader');
        console.log('slide run');
    }


    $('body').on('click', '.download', function () {
        _gaq.push(['_trackEvent', 'Gisto Download', 'Downloaded', this.href]);
    });

    $('body').on('click', '.video-run', function () {
        _gaq.push(['_trackEvent', 'Gisto screenshots run', 'Screenshots']);
    });


});


function isMobile() {
    if ($(".nav-link").css("display") == "block") {
        return true;
    }
}

//console.log('mobile', isMobile());

$(document).scroll(function () {
    if ($(this).scrollTop() > 100) {
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

function sharePost(wUrl, wTitle, wWidth, wHeight) {
    var wTop = (screen.height / 2) - (wHeight / 2);
    var wLeft = (screen.width / 2) - (wWidth / 2);
    window.open(wUrl, wTitle, 'top=' + wTop + ',left=' + wLeft + ',toolbar=0,status=0,width=' + wWidth + ',height=' + wHeight);
}

if (window.location.href.match('tour')) {
    var enjoyhint_instance = new EnjoyHint({});
    var enjoyhint_script_steps = [
        {
            'next .tour_logo': 'Welcome to Gisto, take a small tour or just hit "SKIP"'
        },
        {
            'next .tour_search': 'This is the search box, you can search tags too something like "#css" or "#build-process"'
        },
        {
            'next .tour_star': 'This is indicator of starred gist'
        },
        {
            'next .tour_lock': 'This is indicator of public or private gist'
        },
        {
            'next .tour_gist1': 'This is gist...'
        },
        {
            'next .tour_gist1_file1': '... and it\'s files'
        },
        {
            'next .tour_gist_count': 'I got 61 gits in total. Hmmm.'
        },
        {
            'next .tour_notification_server_online': 'The notification server is on-line!'
        },
        {
            'last .tour_gist_comments': ':( I have no comments'
        }
    ];
    enjoyhint_instance.set(enjoyhint_script_steps);
    enjoyhint_instance.run();
}