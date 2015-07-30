$(document).ready(function() {
  $('.studio_transparent').css({
    width: function(index, value) {return parseInt($('.studio_transparent').eq(index).parent().css('width')) - 10 + 'px'},
    height: function(index, value) {return parseInt($('.studio_transparent').eq(index).parent().css('height')) - 10 + 'px'}
  });
  $('#studio_member > div').click(function() {
    if ($(this).find('.studio_introduction').css('width') == '75px') {
      $('.studio_introduction_close').animate({
        opacity: 0
      }, "200");
      $('.studio_introduction_text').slideUp('fast');
      $('.studio_introduction').stop().animate({
        width: '75px',
        height: '40px'
      }, "300");
      $('.studio_transparent').css('z-index', 10);
      $('.studio_introduction.studio_hide').css('display', 'none');

      $(this).find('.studio_introduction').css('display', 'block').animate({
        width: parseInt($(this).css('width')) - 8 + 'px',
        height: parseInt($(this).css('height')) - 7 + 'px',
        }, "300", function() {
          $(this).find('.studio_introduction_text').slideDown('slow');
        }
      );
      $(this).find('.studio_introduction_close').animate({
        opacity: 1
      }, "600");
      $(this).find('.studio_transparent').css('z-index', 2);
    }
    else {

      $(this).find('.studio_introduction_text').css('display', 'none');
      $(this).find('.studio_introduction').stop().animate({
        width: '75px',
        height: '40px'
      }, "300", function() {
        $('.studio_introduction.studio_hide').css('display', 'none');
      });
      $(this).find('.studio_introduction_close').animate({
        opacity: 0
      }, "300");
      $(this).find('.studio_transparent').css('z-index', 10);
    }

  });

});