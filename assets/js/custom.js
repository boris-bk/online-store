$(function(){

	$('.menu-slider').slick({
        prevArrow: false,
        nextArrow: false,
        dots: true,
  });
	$('.slider').slick({
  centerMode: true,
  centerPadding: true,
  prevArrow: false,
  nextArrow: false,
  centerPadding: '58px',
  slidesToShow: 7,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 5
      }
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    }
  ]
});
});






