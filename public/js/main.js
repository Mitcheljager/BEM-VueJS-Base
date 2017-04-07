$(function() {
  $('.js-dropdown-trigger').on('click', toggleDropdown);
});

var toggleDropdown = function() {
  var target = $(this).data('target'),
      element = $('.js-dropdown[data-dropdown="'+ target +'"]');


  if (element.hasClass('dropdown__bubble--is-active')) { // Close
    element.addClass('dropdown__bubble--is-moving-out');
    
    setTimeout(function() {
      element.removeClass('dropdown__bubble--is-moving-out dropdown__bubble--is-active');
    }, 200);
  } else { // Open
    element.addClass('dropdown__bubble--is-active');
  }
}
