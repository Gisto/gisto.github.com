$(function () {

    $('body').on('click', '.innsite', function (e) {
        e.preventDefault();
        $.scrollTo(e.currentTarget.hash, 800);
    });

    $('body').on('click', '.download-link', function() {
        _gaq.push(['_trackEvent', 'Gisto Download', 'Downloaded', this.href]);
    });

/* Determine OS and provide ling respectively */

    var platform = window.navigator.platform,
        mainText = ' <a class="download innsite" href="#footer">Not running {{OS}}? Click Here</a>',
        linux = /Linux/g,
        windows = /Win/g,
        mac = /Mac/g;

    if (linux.test(platform)) {
        downloadLink('Linux 64bit', 'download/Gisto-0.1.2a-Linux_x86_64.tar.gz','icon-linux');
    } else if (mac.test(platform)) {
        downloadLink('OSX 10.7+', 'download/Gisto-0.1.2a-OSX_x86.dmg','icon-apple');
    } else if (windows.test(platform)) {
        downloadLink('Windows', 'download/Gisto-0.1.2a-Win_x86.zip','icon-windows');
    } else {
        $('.download').html('<a class="btn links innsite" href="#footer">View download options</a>');
    }

    function downloadLink(os, link, icon) {
        $('.download').html('<a class="btn links download-link" href="' + link + '"><i class="' + icon + ' icon-3x down-os"></i> Download for <br /> <strong>' + os + '</strong> </a>' + ' <br />' +mainText.replace('{{OS}}', os) );
    };

    /*
    $.getJSON('https://raw.github.com/Gisto/Gisto/master/app/package.json?callback=?', function(data) {
        console.log('JSON',data);
    });
    */


});
