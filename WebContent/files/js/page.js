// Page load script for ShopShark.

var redraw;     /* Global name for redraw function (changes) */
var main_visible, cart_visible;       /* Global boolean variable */

function init(page) {
    
    /* First, let's put that LOADING sign in the proper language: */
    main_visible = true;
    cart_visible = (getFromURL('cart') == 'true');

    switch(page) {
        case 'index':
            redraw = redraw_index;
            break;
    }

    window.onresize = redraw;
}

function load(page) {
    init(page);

    if (redraw)
        redraw();

    if (translate)
        translate(document);

}

function redraw_index() {

    if (main_visible) {
        var mainH = document.getElementById('main').clientHeight;
        var headerH = document.getElementById('header').clientHeight;
        var footerH = document.getElementById('footer').clientHeight;

        var contentMaxH = mainH - headerH - footerH;
        
        var cart = document.getElementById('cart');
        var content = document.getElementById('content');
        var contentsb = document.getElementById('content-searchbar');

        if (cart_visible) {
            cart.style.visibility = 'visible';
            content.style['height'] = contentMaxH - cart.clientHeight + 'px';
        }

        contentsb.style.marginTop = Math.round(content.clientHeight / 2 - contentsb.clientHeight / 2) + 'px';
        
        return;
    }
}

