$(document).ready(function() {
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });

    function serviceLinks() {
        var links = $('.service-links');
        var item = links.find('.m_table-item');

        links.each(function (){
            var l = $(this).find('.m_table-item').length;
            if ( l == 1 ) {$(this).addClass('elements-1');} else if ( l == 2){$(this).addClass('elements-2');} else if ( l == 3) {$(this).addClass('elements-3');} else if ( l == 4) {$(this).addClass('elements-4');} else if ( l == 5) {$(this).addClass('elements-5');} else if ( l == 6) {$(this).addClass('elements-6');} else if ( l == 7) {$(this).addClass('elements-7');} else if ( l == 8) {$(this).addClass('elements-8');} else if ( l == 9) {$(this).addClass('elements-9');} else if ( l == 10) {$(this).addClass('elements-10');}
        });

    };
    serviceLinks();

    function tabs() {
        var tabsControls = $('.m_tabs-control li a');
        var tabsItems = $('.m_tabs-content .tabs-item');
        tabsControls.on('click', function(){
            if ( !$(this).hasClass('current') ) {
                var index = $(this).parent().index();

                tabsControls.parent().removeClass('current');
                $(this).parent().addClass('current');

                tabsItems.removeClass('current');
                $(this).parents('.m_tabs-control').next().find('.tabs-item').eq(index).addClass('current');
            } else {
                return false;
            }
        });
    };
    tabs();

    function tabsSmall() {
        var tabsControls = $('.m_tabs-control-small .tab-control a');
        var tabsItems = $('.m_tabs-content .tabs-item');
        tabsControls.on('click', function(){
            if ( !$(this).hasClass('current') ) {
                var index = $(this).parent('.tab-control').index();

                tabsControls.parent('.tab-control').removeClass('current');
                $(this).parent('.tab-control').addClass('current');

                tabsItems.removeClass('current');
                $(this).parents('.m_tabs-control-small').next().find('.tabs-item').eq(index).addClass('current');
            } else {
                return false;
            }
        });
    };
    tabsSmall();


    function sidebarMap() {
        var openBlocks = $('.m_sidebar, .m_sidebar .map, .m_map-menu');
        var layouts = $('.sidebar-layout, .body-layout');
        $('.sidebar-map').on('click', function(){
            openBlocks.toggleClass('open');
            layouts.toggleClass('open');
        });

        layouts.on('click', function(){
            openBlocks.removeClass('open');
            layouts.removeClass('open');
            $('.mobile-menu-trigger').removeClass('open');
        });
    };
    sidebarMap();

    function leadCarousel() {
        $('.carousel-default-single').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            fade: false,
            swipeToSlide: true
        });
    };
    leadCarousel();

    function articleImagesCarousel() {
        $('.m_carousel-article-images').slick({
            dots: false,
            arrows: false,
            slidesToShow: 3,
            responsive: [
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: true
                  }
                }
              ]
        })
    };
    articleImagesCarousel();

    function docsCarousel() {
        $('.carousel-docs').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            fade: false,
            swipeToSlide: true,
            nextArrow: '<button type="button" class="slick-next light"></button>',
            prevArrow: '<button type="button" class="slick-prev light"></button>',
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 5
                  }
                },
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 380,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
        });
    };
    docsCarousel();

    function accordion() {
        var accordion = $('.m_accordion');
        var accordionLink = accordion.find('.accordion-header');
        var accordionBody = accordionLink.next();

        accordionLink.on('click', function(){
            if ( !$(this).hasClass('open') ) {
                accordionLink.removeClass('open');
                accordionBody.removeClass('open');
                $(this).addClass('open').next().addClass('open');
                $('html, body').animate({scrollTop: $(this).offset().top-10}, 500);
            } else {
                accordionLink.removeClass('open');
                accordionBody.removeClass('open');
            }
        });
    };
    accordion();


    function modalWindow() {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in',
            callbacks: {
                open: function() {
                  $('.upload').on('change', function(){
                    if ( !$(this).val() == '' ) {
                        $('.uploaded').show();
                        $('.fileUpload').hide();
                    } else {
                        $('.uploaded').hide();
                        $('.fileUpload').show();
                    }
                  })
                }
              }
        });
    };
    modalWindow();



    $.breakpoint({
        condition: function () {
            return window.matchMedia('only screen and (min-width:701px)').matches;
        },
        enter: function () {
            console.log('Enter');

            function sidebarScroll() {
                $('.m_sidebar').scrollToFixed({
                    marginTop: 0,
                    limit: $('.m_footer').offset().top - $('.m_sidebar').outerHeight(),
                    preAbsolute: function() { console.log('Sidebar changed!')}
                });
            };
            sidebarScroll();
        },
        // first_enter: function () {},
        exit: function () {
            console.log('Exit');

            $('.m_sidebar').trigger('detach.ScrollToFixed');
        }
    });

    function mobileMenuTrigger() {
        $('.mobile-menu-trigger').on('click', function(){
            $('.mobile-menu-trigger, .m_map-menu, .body-layout').toggleClass('open');

        });

        $('.mobile-menu-trigger.invert').on('click', function(){
            $("html, body").animate({ scrollTop: 0 }, 0);
        });
    };
    mobileMenuTrigger();



});