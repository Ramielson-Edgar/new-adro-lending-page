$slick_slider = $(".slider");
settings_slider = {
  Infinity: false,
  arrows: false,
  dots: true,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: true,
  centerMode: true,
  centerPadding: "60px",
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 1,
      },
    },
  ],
};

slick_on_mobile($slick_slider, settings_slider);

// slick on mobile
function slick_on_mobile(slider, settings) {
  $(window).on("load resize", function () {
    if ($(window).width() > 767) {
      if (slider.hasClass("slick-initialized")) {
        slider.slick("unslick");
      }
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
}
