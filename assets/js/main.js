jQuery(document).ready(function ($) {
  //Mob-menu
  $('#header-burger').on('click', function (e) {
    $(this).toggleClass('active');
    $('#mobMenu').toggleClass('active');
    $('body').toggleClass('overflow-h');
  });
  $('.close-mob-menu-js').on('click', function (e) {
    $('body').removeClass('overflow-h');
    $('#header-burger').removeClass('active');
    $('#mobMenu').removeClass('active');
  });

  //=================== scroll to page
  $('.scrollto').on('click', function () {
    let href = $(this).attr('href');

    $('html, body').animate(
      {
        scrollTop: $(href).offset().top,
      },
      {
        duration: 370, // по умолчанию «400»
        easing: 'linear', // по умолчанию «swing»
      }
    );
    if ($(window).width() < 768) {
      $('html, body').animate({
        scrollTop: $(href).offset().top,
      });
    }
    return false;
  });
  // ======================== MASK
  $('.mask-phone').mask('+7 999 999-99-99');

  $('#client-phone').on('blur input', function () {
    if ($(this).val().length >= 16) {
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
    infinite: false,
    prevArrow: '<button class="slider-btn slider-btn__prev"><span></span></button>',
    nextArrow: '<button class="slider-btn slider-btn__next"><span></span></button>',
    responsive: [
      {
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
        $('.accordion-js').removeClass('active');
        $(this).addClass('active');
        $('.accordion-block-js').slideUp(200);
        $(this).parent().find('.accordion-block-js').toggle('blind');
        $('.prices-card__more').text('Что входит в тариф');
        $(this).parent().find('.prices-card__more').text('Cвернуть');
      }
    });
  }
  //Wow
  new WOW().init();


  //Accordion
  $('.accordion-tab-js').on('click', function () {
    if ($(this).closest('.accordion-js').hasClass('active')) {
      $(this).closest('.accordion-js').removeClass('active');
      $(this).closest('.accordion-js').find('.accordion-content-js').hide('300');
    } else {
      $('.accordion-js').removeClass('active');
      $(this).closest('.accordion-js').addClass('active');
      $('.accordion-content-js').slideUp(200);
      $(this).closest('.accordion-js').find('.accordion-content-js').toggle('blind');
    }
  });
});
