/*!
 * CaskCoin (http://www.caskcoin.com)
 *
 */

$(document).ready(function(){

  $('.regions').carousel()


  $('.portfolio').carousel()

  var $item = $('.carousel .item');
  var $wHeight = "550px";
  // var $wHeight = $(window).height();
  $item.eq(0).addClass('active');
  $item.height($wHeight);
  $item.addClass('full-screen');

  $('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image' : 'url(' + $src + ')',
      'background-color' : $color
    });
    $(this).remove();
  });

  $('.carousel').carousel({
    interval: 10000,
    pause: "false"
  });


});
