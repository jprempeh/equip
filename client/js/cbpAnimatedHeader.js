/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.getElementById( 'newNav' ),
        logo = document.querySelector('.logo-landing'),
        text = document.querySelector('.logo-text-landing'),
        didScroll = false,
        changeHeaderOn = 200;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add(document.getElementById('newNav'), 'navbar-scroll' );
            classie.add(document.querySelector('.logo-landing'), 'logo-scroll' );
            classie.add(document.querySelector('.logo-text-landing'), 'text-scroll');
        }
        else {
            classie.remove(document.getElementById('newNav'), 'navbar-scroll' );
            classie.remove(document.querySelector('.logo-landing'), 'logo-scroll');
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();