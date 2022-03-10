function run() {
  $(function () {
    $(".slider").slick({
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
    });
  });
}

$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() <= "575") {
      return run();
    }
  });
});
