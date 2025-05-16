$(document).ready(function () {
  $('.gnb_wrap').removeClass("on");

  $(window).scroll(function () {
    const scrollY = $(document).scrollTop();

    if (scrollY > 950 && scrollY < 20000) {
      $('.gnb_wrap').addClass("on");
    } else {
      $('.gnb_wrap').removeClass("on");
    }
  });
});