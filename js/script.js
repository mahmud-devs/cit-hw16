$(function(){

  $('.nav_menu ul li .abc').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
});
