// function getFileType(file) {
//     return fileExtension = file.split('.').reverse()[0];
// }
//
// function getOsType(file) {
//     var fileExtension = getFileType(file);
//     switch (fileExtension) {
//         case 'snap':
//         case 'AppImage':
//         case 'deb':
//         case 'rpm':
//         case 'pacman': {
//             return 'linux';
//         }
//
//         case 'dmg':
//         case 'zip': {
//             return 'mac';
//         }
//
//         case 'exe': {
//             return 'windows';
//         }
//
//         default:
//             return 'unknown';
//     }
// }
//
// function dataStructure(asset) {
//     return {
//         os: getOsType(asset.name),
//         link: asset.browser_download_url,
//         fileType: getFileType(asset.name)
//     }
// }

// function getOsIcon(data) {
//     if (data.os === 'mac') {
//         return 'fa-apple';
//     } else if (data.os === 'linux') {
//         return 'fa-linux';
//     } else if (data.os === 'windows') {
//         return 'fa-windows';
//     }
//
//     return;
// }

function isMobile() {
    if ($(".nav-link").css("display") == "block") {
        return true;
    }
}

function initMobile() {
    if (isMobile() === true) {
        $('.nav-column').hide();
        $('header').append('<div class="mobile-menu"><i class="fa fa-bars fa-2x"></i></div>');
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

$(function () {

    var bodyElement = $('body');
    initMobile();
    $(window).resize(function () {
        initMobile();
    });

    bodyElement.on('click', '.innsite', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(e.currentTarget.hash).offset().top - 50
        }, 1000);
    });

    $('.download ').on('click', 'a', function () {
        _gaq.push(['_trackEvent', 'Gisto Download', 'Downloaded', this.href]);
    });

    // var downloads;
    // function template(data) {
    //     return '<div class="download w-col w-col-3 w-clearfix txt-center">\n' +
    //         '                    <p class="txt-center"><i class="fa ' + getOsIcon(data) + ' fa-4x"></i></p>\n' +
    //         '\n' +
    //         '                    <h3>' + data.os + '<br/> <b>Download</b></h3>\n' +
    //         '                    <a href="' + data.link + '"><b>' + data.fileType + '</b></a>\n' +
    //         '                </div>';
    // }

    // if (!sessionStorage.getItem('gistoReleases')) {
    //     $.ajax({
    //         url: 'https://api.github.com/repos/Gisto/Gisto/releases'
    //     }).done(function (data) {
    //         sessionStorage.setItem('gistoReleases', JSON.stringify(data));
    //         var latest = data[0];
    //         $('.latest-release-version').text('v' + latest.name);
    //
    //         downloads = latest.assets.map(function (asset) {
    //             return dataStructure(asset);
    //         }).filter(function(os) {
    //             return os !== 'unknown';
    //         });
    //     });
    // } else {
    //     var latest = JSON.parse(sessionStorage.getItem('gistoReleases'));
    // console.log('%c LOG ', 'background: #555; color: tomato', latest);
    //     downloads = latest[0].assets.map(function (asset) {
    //         return dataStructure(asset);
    //     }).filter(function(os) {
    //         return os !== 'unknown';
    //     });
    // }

    // downloads && downloads.length > 0 && downloads.map(function(asset) {
    //     console.log('%c LOG ', 'background: #555; color: tomato', '<a href="' + asset.link + '"><b>' + asset.fileType + '</b></a>');
    //     return $('.linux-downloads').append('<a href="' + asset.link + '"><b>' + asset.fileType + '</b></a>');
    // });

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

});
