var naslov = $('.naslov');
var podnaslov = $('.podnaslov');

podnaslov.hide();
$(naslov).on('click', function () {
  $(this).parent().children('.podnaslov').slideToggle();
});
