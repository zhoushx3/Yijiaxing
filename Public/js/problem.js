// common
$(document).ready(function() {
  $('#triangle div').css('left', $("a.active").index() * 111 + 44 + 'px');
  $(".header a").mouseenter(function() {
    var index = $("a").index(this);
    var offset = 44 + 111 * index;
    $("#triangle div").stop()
      .animate({
        left: offset + "px"
      }, "300");
  });

  $(".header a").mouseleave(function() {
    $('#triangle div').stop().animate({
      left: $("a.active").index() * 111 + 44 + 'px'
    }, "300");
  });

});

$(document).ready(function() {

  $('.collapse li').click(function() {
    var html = $(this).find('div').html();
    $('.collapse li p').stop().slideUp('slow');
    $('.collapse li div').html('-');
    $(this).find('p').stop().slideToggle('slow');
    $(this).find('div').html(html == '+' ? '-' : '+');
  });

});