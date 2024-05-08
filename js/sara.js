$(function() {
	setTimeout(function(){
		$('.first-image1_fadein').fadeIn(1000);
	},500);
	setTimeout(function(){
		$('.first-image1_fadein').fadeOut(1000);
	},2500);
	setTimeout(function(){
		$('.first-image2_fadein').fadeIn(1000);
	},3000);
	setTimeout(function(){
		$('.first-image2_fadein').fadeOut(1000);
	},5000);
	setTimeout(function(){
		$('.first-logo').fadeIn(1500);
	},5500);
	setTimeout(function(){
		$('.logo_fadein').fadeOut(1000);
	},8500);
});

$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

$('.campaign-slider').slick({
    autoplay: true,       //自動再生
    autoplaySpeed: 2000,  //自動再生のスピード
    speed: 800,           //スライドするスピード
    dots: true,           //スライド下のドット
    arrows: true,         //左右の矢印
    infinite: true,       //永久にループさせる
});

$('.merit-slider').slick({
    speed: 800,           //スライドするスピード
    arrows: true,         //左右の矢印
    infinite: true,       //永久にループさせる
});

    	$(function() {
    		$('body *').removeAttr('style');
    	});