$('input').on("click", function () {
    $(this).next('span').css("display", "inline").css("color", "red").fadeOut();
});
