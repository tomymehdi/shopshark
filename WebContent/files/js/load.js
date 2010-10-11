// Page load script for ShopShark.

var translate, resize;

function init() {

    translate = doTranslate; /* in lang.js */

    switch(document.getElementById('main').getAttribute('role')) {
        case 'index':
            resize = resize_index;
            break;
    }

    window.onresize = resize;
}

function load() {
    init();

    if (resize)
        resize();

    if (translate)
        translate();
}

function resize_index() {
    var ids = ['main', 'header', 'footer', 'content-wrapper',
               'content', 'sidebar', 'content-searchbar'];
                        
    var elements = getElementsById(ids);

    var contentH = elements['content'].clientHeight;
    var contentsb = elements['content-searchbar'];
    var contentsbH = contentsb.clientHeight;

    //alert(contentH + "and " + contentsbH);
    contentsb.style['margin-top'] = contentH / 2 - contentsbH + 'px';

    return;
}
