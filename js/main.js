$(function () {

    $('.innsite').click(function (e) {
        e.preventDefault();
        $.scrollTo(e.currentTarget.hash, 800);
    });

/* Determine OS and provide ling respectively *\/

    var platform = window.navigator.platform,
        mainText = 'We auto determined that you need a {{OS}} installer',
        linux = /Linux/g,
        windows = /Win/g,
        mac = /Mac/g;

    if (linux.test(platform)) {
        downloadLink('Linux', '#');
    } else if (mac.test(platform)) {
        downloadLink('Mac', '#');
    } else if (windows.test(platform)) {
        downloadLink('Windows', '#');
    } else {
        $('.download').html('<a class="btn links" href="">View download options on GitHub</a>');
    }

    function downloadLink(os, link) {
        $('.download').html(mainText.replace('{{OS}}', os) + ' ' + '<a class="btn links" href="' + link + '"><i class="icon-download-alt"></i> Download for <br />' + os + ' </a>');
    };
/**/

});