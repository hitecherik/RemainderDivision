/**
 * Thanks to abeautifulsite.net for providing the code below.
 */

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

/**
 * The code from here onwards is by Alexander Nielsen. alex@hitecherik.site11.com
 * 30 December 2012
 */

if (isMobile.any()) {
    window.location = "http://remainder.eu5.org/m";
};