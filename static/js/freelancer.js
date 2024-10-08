(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  
  
  var images = [];
  
  function preload() {
      for (var i = 1; i < 163 ; i++) {
         if (i % 6 == 0) {
          images[i] = new Image();
          images[i].src = "/img/logoseq/image-" + i.toString().padStart(4, '0') + ".png"
         }
      }
  }
  preload();
  
  var currentUrl = null;
  
  $(window).scroll(
      function( event ) {
  
          if ($(window).scrollTop() >= 140) {
              $('.subsectionmenu').addClass('subsectionmenu-fixed');
              $('.navcolorbg').addClass('navcolorbg-shrink');
              $('.textitems').addClass('textitems-shrink');
              $('.circle').css({
                  '-webkit-transform' : 'scale(0.65) translateY(-50px)',
                  '-moz-transform'    : 'scale(0.65) translateY(-50px)',
                  '-ms-transform'     : 'scale(0.65) translateY(-50px)',
                  '-o-transform'      : 'scale(0.65) I translateY(-50px)',
                  'transform'         : 'scale(0.65) translateY(-50px)'
              });
  
          }
          else {
              $('.subsectionmenu').removeClass('subsectionmenu-fixed');
              $('.navcolorbg').removeClass('navcolorbg-shrink');
              $('.textitems').removeClass('textitems-shrink');
  
              $('.circle').css({
                  '-webkit-transform' : 'initial',
                  '-moz-transform'    : 'initial',
                  '-ms-transform'     : 'initial',
                  '-o-transform'      : 'initial',
                  'transform'         : 'initial'
              });
  
          }
  
          var fromTop = $(window).scrollTop(), url = null;
  
          let scrollHeight = Math.max(
              document.body.scrollHeight, document.documentElement.scrollHeight,
              document.body.offsetHeight, document.documentElement.offsetHeight,
              document.body.clientHeight, document.documentElement.clientHeight
          );
  
          var cH = Math.ceil(fromTop/45)
          // var cH2 = cH % 163;
          var cH2 = (cH % 27)*6;
          if (images[cH2]) {
            $(".logotxt").html(images[cH2].src );
            $("#logo").attr('src', images[cH2].src);
          }
      }
  
  
  
  );
  
  $( document ).ready(function() {
  });
  