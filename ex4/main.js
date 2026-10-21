var box = $('.box');
$(document).ready(function () {
  $(box).on('mouseenter', function () {
    $(this).animate({
      width: "100px",
      height: "100px"
      }, 900)
  });

  $(box).on('mouseleave', function () {
    $(this).animate({
      width: "50px",
      height: "50px"
      }, 900)
  });
});
