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

$(function() {
				$('a[href*="#"]:not([href="#"])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
				$('html, body').animate({
				scrollTop: target.offset().top
				}, 1000);//움직이는 시간 조정
				return false;
				}
				}
				});
				});