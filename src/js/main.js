$(function () {
  var scroll=$(document).scrollTop();
  var navHeight=$('#navId').outerHeight();
  $(window).scroll(function () {
    var scrolled=$(document).scrollTop();
    if(scrolled>navHeight){
      $('#navId').addClass('animate');
    }else{
      $('#navId').removeClass('animate');
    }
    if(scrolled>scroll){
      $('#navId').removeClass('sticky');
    }else{
      $('#navId').addClass('sticky');
    }
    scroll=$(document).scrollTop();
  });
});
