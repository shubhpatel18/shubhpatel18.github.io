/*!
    * Start Bootstrap - Agency v6.0.1 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
    */

(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ===
            this.pathname.replace(/^\//, "") &&
            location.hostname === this.hostname
        ) {
            let target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                target[0].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'start'
                })
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("#page-container").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    const navbarCollapse = function () {
        const mainNav = $("#mainNav");
        if (mainNav.offset().top > 100) {
            mainNav.addClass("navbar-shrink");
        } else {
            mainNav.removeClass("navbar-shrink");
        }
    };

    // Collapse now if page is not at top
    navbarCollapse();

    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
