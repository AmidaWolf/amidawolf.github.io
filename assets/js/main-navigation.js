$(function() {

  $('.main-navigation__toggle').on('click', function() {
    $('.main-navigation__list').slideToggle(300, function() {
      if ($(this).css('display') === "none") {
        $(this).removeAttr('style');
      }
    });

  });

});
