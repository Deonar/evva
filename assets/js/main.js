jQuery(document).ready(function ($) {

  if ($('#main')) {
    $('video').trigger('play');
  }

  //Mob-menu
  $('#header-burger').on('click', function (e) {
    $(this).toggleClass('active');
    $('#mobMenu').toggleClass('active');
    $('body, html').toggleClass('overflow-h');
  });
  $('.close-mob-menu-js').on('click', function (e) {
    $('body, html').removeClass('overflow-h');
    $('#header-burger').removeClass('active');
    $('#mobMenu').removeClass('active');
  });

  //=================== scroll to page
  $('.scrollto').on('click', function () {
    let href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(href).offset().top,
    }, {
      duration: 370, // по умолчанию «400»
      easing: 'linear', // по умолчанию «swing»
    });
    if ($(window).width() < 768) {
      $('html, body').animate({
        scrollTop: $(href).offset().top,
      });
    }
    return false;
  });
  // ======================== MASK
  $('.mask-phone').mask('+7 ZZZ ZZZ-ZZ-ZZ', {
    translation: {
      Z: {
        pattern: /[0-9]/,
      },
    },
  });

  $('#client-phone').on('blur input', function () {
    if ($(this).val().length >= 14) {
      $(this).closest('.form-input__wrapp').removeClass('--error');
    } else {
      $(this).closest('.form-input__wrapp').addClass('--error');
    }
  });

  $('#form-action').submit(function (e) {
    e.preventDefault();
    $(this).hide();
    $('#form-thank').show();
  });

  //scroll-header-menu
  var scrollPos = 0;
  $(document).scroll(function () {
    if (300 < $(document).scrollTop()) {
      $('#header').addClass('h-fixed');
    } else {
      $('#header').removeClass('h-fixed');
    }

    var st = $(this).scrollTop();
    if (st < scrollPos) {
      $('#header').removeClass('active');
    } else {
      $('#header').addClass('active');
    }
    scrollPos = st;
    if (scrollPos <= 200) {
      $('#header').removeClass('active');
    }
  });

  //======================== SLICK SLIDERS
  //===========================  front-page Slider

  $('#products-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    prevArrow: '<button class="slider-btn slider-btn__prev"><span></span></button>',
    nextArrow: '<button class="slider-btn slider-btn__next"><span></span></button>',
    responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  if ($(window).innerWidth() <= 768) {
    $('.accordion-js').on('click', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).parent().find('.accordion-block-js').hide(200);
        $('.prices-card__more').text('Cвернуть');
        $(this).parent().find('.prices-card__more').text('Что входит в тариф');
      } else {
        // $('.accordion-js').removeClass('active');
        $(this).addClass('active');
        // $('.accordion-block-js').slideUp(100);
        $(this).parent().find('.accordion-block-js').show('blind');
        // $('.prices-card__more').text('Что входит в тариф');
        $(this).parent().find('.prices-card__more').text('Cвернуть');
      }
    });
  }
  //Wow
  new WOW().init();

  //Accordion
  $('.accordion-tab-js').click(function (event) {
    event.stopPropagation();
    if ($(this).closest('.accordion-wrapper-js').hasClass('active')) {
      $(this).closest('.accordion-wrapper-js').removeClass('active');
      $(this).closest('.accordion-wrapper-js').find('.accordion-content-js').slideUp(300);
    } else {
      $('.accordion-wrapper-js').removeClass('active');
      $('.accordion-content-js').slideUp(300);
      $(this).closest('.accordion-wrapper-js').addClass('active');
      $(this).closest('.accordion-wrapper-js').find('.accordion-content-js').slideDown(300);
    }

    setTimeout(function () {
      $('html, body').animate({
        scrollTop: $('.accordion-wrapper-js.active').offset().top - 70,
      });
    }, 301);

  });

  /*-------------------------------------
		PlayBTN
  -------------------------------------*/
  if ($('.dr-play-video')) {
    $('.dr-play-video').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-with-zoom',
      iframe: {
        markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '</div>',

        patterns: {
          youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
            id: 'v=', // String that splits URL in a two parts, second part should be %id%
            // Or null - full URL will be returned
            // Or a function that should return %id%, for example:
            // id: function(url) { return 'parsed id'; }
            src: '//www.youtube.com/embed/%id%?autoplay=1', // URL that will be set as a source for iframe.
          },

          vimeo: {
            index: 'vimeo.com/',
            id: '/',
            src: '//player.vimeo.com/video/%id%?autoplay=1',
          },

          gmaps: {
            index: '//maps.google.',
            src: '%id%&output=embed',
          },
        },
        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it

          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function

          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function (openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          },
        },

        srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
      },
    });
  }
});