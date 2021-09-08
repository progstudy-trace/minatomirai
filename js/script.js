$(function(){
 $('.nav-menu').click(function(){
   if($('.slide-nav').hasClass('open')){
     $('.slide-nav').removeClass('open');
     $('.slide-nav').slideUp();
   }else{
    $('.slide-nav').addClass('open');
    $('.slide-nav').slideDown();
   }
 });

 $('#pagetop').click(function(){
   $('html,body').animate({'scrollTop':0},'slow');
 });
});

jQuery(function($) {
  $('.bg-switcher').bgSwitcher({
      images: ['image/mainvisual-1.jpg','image/mainvisual-4.jpg','image/mainvisual-2.jpg','image/mainvisual-3.jpg'], // 切り替え画像
      Interval: 5000, //切り替えの間隔 1000=1秒
      start: true, //$.fn.bgswitcher(config)をコールした時に切り替えを開始する
      loop: true, //切り替えをループする
      shuffle: false, //背景画像の順番をシャッフルする
      effect: "fade", //エフェクトの種類 "fade" "blind" "clip" "slide" "drop" "hide"
      duration: 1000, //エフェクトの時間 1000=1秒
      easing: "swing", //エフェクトのイージング "swing" "linear"
  });
});