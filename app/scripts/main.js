(function($) {
  /* jshint expr: true */
  'use strict';
var menu = 'close';
  $('#menu-toggle').click(function(){
    if(menu === 'close') {
      $('nav ul').addClass('nav-open');
      $('nav ul li').fadeIn(500).css('padding', '1em');
      menu = 'open';
    } else {
      $('nav ul li').fadeOut(400);
      menu = 'close';
    }
  });
}());
