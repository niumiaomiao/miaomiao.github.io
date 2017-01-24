$(document).ready(function(){
  var view = $(window),
      html = $('html'),
      body = $('body');
  view.scroll(function(){
    if(view.scrollTop() > 140){
      $('.sticker').stop().animate({top:"0"}, 500);
    } else {
      $('.sticker').stop().animate({top:"-60px"}, 500);
    }

    var scrollPosition = view.scrollTop() * .25;
    body.css({backgroundPosition:'0px -'+scrollPosition+'px'});
  })
});