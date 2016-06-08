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
                }
              ]
        });
    };
    docsCarousel();

    function thumbsCarousel() {
        $('.carousel-thumbs-single').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          fade: true,
          asNavFor: '.carousel-thumbs-thumbs'
        });

        $('.carousel-thumbs-thumbs').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          asNavFor: '.carousel-thumbs-single',
          dots: false,
          arrows: false,
          centerMode: false,
          focusOnSelect: true,
          swipeToSlide: true,
          responsive: [
              {
                breakpoint: 568,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 380,
                settings: {
                  slidesToShow: 2
                }
              }
            ]
        });
    };
    thumbsCarousel();

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
                  });
                }
              }
        });
    };
    modalWindow();

    // MAP
    function contactsMap() {
      var map;
      var coordX = $('#map-canvas').data('coord-x');
      var coordY = $('#map-canvas').data('coord-y');
      var zoom = $('#map-canvas-2').data('zoom');
      function initialize()
      {
        map = new google.maps.Map(document.getElementById('map-canvas'), {
          center: new google.maps.LatLng(coordX,coordY),
          zoom: zoom,
          scrollwheel: false,
           navigationControl: false,
           mapTypeControl: false,
           scaleControl: false,
           mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        setMarkers(map);

      };
      var beaches = [
        // ['Moscow2', 55.846133, 37.662596, 3],
        // ['Moscow2', 55.756543, 37.560017, 2],
        ['Moscow1', coordX, coordY, 1]
      ];
      function setMarkers(map) {
        var image = {
          url: '../images/marker.png',
          size: new google.maps.Size(51, 56),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(25, 56)
        };

        for (var i = 0; i < beaches.length; i++) {
          var beach = beaches[i];
          var marker = new google.maps.Marker({
            position: {lat: beach[1], lng: beach[2]},
            map: map,
            icon: image,
            title: beach[0],
            zIndex: beach[3]
          });
        }
      };
      google.maps.event.addDomListener(window, 'load', initialize);
    };

    if ( $('#map-canvas').length > 0 ) {
      contactsMap();
    }



    $(document).on('click', '.m_tabs-control-small .tab-control a', function(){
      var map;
      var coordX = $('#map-canvas-2').data('coord-x');
      var coordY = $('#map-canvas-2').data('coord-y');
      var zoom = $('#map-canvas-2').data('zoom');
      function initialize()
      {
        map = new google.maps.Map(document.getElementById('map-canvas-2'), {
          center: new google.maps.LatLng(coordX,coordY),
          zoom: zoom,
          scrollwheel: false,
           navigationControl: false,
           mapTypeControl: false,
           scaleControl: false,
           mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        setMarkers(map);

      };
      var beaches = [
        // ['Moscow2', 55.846133, 37.662596, 3],
        // ['Moscow2', 55.756543, 37.560017, 2],
        ['Moscow1', coordX, coordY, 1]
      ];
      function setMarkers(map) {
        var image = {
          url: '../images/marker.png',
          size: new google.maps.Size(51, 56),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(25, 56)
        };

        for (var i = 0; i < beaches.length; i++) {
          var beach = beaches[i];
          var marker = new google.maps.Marker({
            position: {lat: beach[1], lng: beach[2]},
            map: map,
            icon: image,
            title: beach[0],
            zIndex: beach[3]
          });
        }
      };
      initialize();
    });




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

    function videoModal() {
      $('.popup-youtube').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'my-mfp-zoom-in',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });
    };
    videoModal();

    function mobileMenuTrigger() {
        $('.mobile-menu-trigger').on('click', function(){
            $('.mobile-menu-trigger, .m_map-menu, .body-layout').toggleClass('open');

        });

        $('.mobile-menu-trigger.invert').on('click', function(){
            $("html, body").animate({ scrollTop: 0 }, 0);
        });
    };
    mobileMenuTrigger();

    function graphAnim() {
      $(".m_table-item").hover(
        function () {
          $(this).find('.hover').addClass("anim-in");
        },
        function () {
          var th = $(this).find('.hover');
          th.removeClass("anim-in").addClass('anim-out');

          setTimeout(function () {
              th.removeClass('anim-out');
          }, 500);
        }
      );
      $(".m_item").hover(
        function () {
          $(this).find('.hover').addClass("anim-in");
        },
        function () {
          var th = $(this).find('.hover');
          th.removeClass("anim-in").addClass('anim-out');

          setTimeout(function () {
              th.removeClass('anim-out');
          }, 500);
        }
      );
    };
    graphAnim();

    function detectIE() {
      var BrowserDetect = {
              init: function () {
                  this.browser = this.searchString(this.dataBrowser) || "Other";
                  this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
              },
              searchString: function (data) {
                  for (var i = 0; i < data.length; i++) {
                      var dataString = data[i].string;
                      this.versionSearchString = data[i].subString;

                      if (dataString.indexOf(data[i].subString) !== -1) {
                          return data[i].identity;
                      }
                  }
              },
              searchVersion: function (dataString) {
                  var index = dataString.indexOf(this.versionSearchString);
                  if (index === -1) {
                      return;
                  }

                  var rv = dataString.indexOf("rv:");
                  if (this.versionSearchString === "Trident" && rv !== -1) {
                      return parseFloat(dataString.substring(rv + 3));
                  } else {
                      return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
                  }
              },

              dataBrowser: [
                  {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
                  {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
                  {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
                  {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
                  {string: navigator.userAgent, subString: "Opera", identity: "Opera"},
                  {string: navigator.userAgent, subString: "OPR", identity: "Opera"},

                  {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
                  {string: navigator.userAgent, subString: "Safari", identity: "Safari"}
              ]
          };

          BrowserDetect.init();
          if (BrowserDetect.browser == 'Explorer') {
            $('html').addClass('IE');
          };
          // if (BrowserDetect.browser == 'Firefox' && BrowserDetect.version > '38' && BrowserDetect.version. <= '42') {
          if (BrowserDetect.browser == 'Firefox') {
            if (BrowserDetect.version < '42') {
              if (BrowserDetect.version > '38'){
                $('html').addClass('firefox');
              }
            }
          };
    };
    detectIE();

    function jsAnim() {
      $(function() {
        var points2 = [[50, 50], [50, 100], [50, 100], [50, 50], [50, 0], [50, 0]];
        $('.m_item .hover, .m_table-item .hover').clipPath(points2, {
          isPercentage: true
        });
        $(".m_item, .m_table-item").mouseenter(function() {
             console.log('enter');
             var thisElement = $(this).find('.hover');
             var points2 = [[50, 50], [50, 100], [50, 100], [50, 50], [100, 0], [0, 0]];
             thisElement.clipPath(points2, {
               isPercentage: true
             });
             setTimeout(function () {
               var points2 = [[50, 50], [0, 100], [100, 100], [50, 50], [100, 0], [0, 0]];
               thisElement.clipPath(points2, {
                 isPercentage: true
               });
               console.log('enter 250');
             }, 250);
             setTimeout(function () {
               var points2 = [[50, 50], [0, 100], [100, 100], [100, 50], [100, 0], [0, 0]];
               thisElement.clipPath(points2, {
                 isPercentage: true
               });
               console.log('enter 500');
             }, 500);
             setTimeout(function () {
               var points2 = [[0, 50], [0, 100], [100, 100], [100, 50], [100, 0], [0, 0]];
               thisElement.clipPath(points2, {
                 isPercentage: true
               });
               console.log('enter 750');
             }, 750);
        }).mouseleave(function () {
          console.log('leave');
          var thisElement = $(this).find('.hover');
          setTimeout(function () {
            var points2 = [[50, 50], [0, 100], [100, 100], [100, 50], [100, 0], [0, 0]];
            thisElement.clipPath(points2, {
              isPercentage: true
            });
          }, 125);
          setTimeout(function () {
            var points2 = [[50, 50], [0, 100], [100, 100], [50, 50], [100, 0], [0, 0]];
            thisElement.clipPath(points2, {
              isPercentage: true
            });
          }, 250);
          setTimeout(function () {
            var points2 = [[50, 50], [50, 100], [50, 100], [50, 50], [100, 0], [0, 0]];
            thisElement.clipPath(points2, {
              isPercentage: true
            });
          }, 375);
          setTimeout(function () {
            var points2 = [[50, 50], [50, 100], [50, 100], [50, 50], [50, 0], [50, 0]];
            thisElement.clipPath(points2, {
              isPercentage: true
            });
          }, 500);
        });
      });
    };
    jsAnim();
});