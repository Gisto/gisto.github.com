$(function () {

    $('body').on('click', '.innsite', function (e) {
        e.preventDefault();
        $.scrollTo(e.currentTarget.hash, 800);
    });

/* Determine OS and provide ling respectively */

    var platform = window.navigator.platform,
        mainText = ' <a class="download innsite" href="#download">Not running {{OS}}? Click Here</a>',
        linux = /Linux/g,
        windows = /Win/g,
        mac = /Mac/g;

    if (linux.test(platform)) {
        downloadLink('Linux 64bit', 'download/0.1.0a/Gisto-0.1.0a-Linux_x86_64.tar.gz');
    } else if (mac.test(platform)) {
        downloadLink('OSX 10.7+', 'download/0.1.0a/Gisto-0.1.0a-OSX_x86.dmg');
    } else if (windows.test(platform)) {
        downloadLink('Windows', 'download/0.1.0a/Gisto-0.1.0a-Win_x86.exe');
    } else {
        $('.download').html('<a class="btn links" href="">View download options on GitHub</a>');
    }

    function downloadLink(os, link) {
        $('.download').html(mainText.replace('{{OS}}', os) + ' ' + '<a onclick="_gaq.push([\'trackPageview\', \'download\']);" class="btn links" href="' + link + '"><i class="icon-download-alt"></i> Download for <br />' + os + ' </a>');
    };

});