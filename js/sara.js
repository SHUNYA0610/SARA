$('.campaign-slider').slick({
    autoplay: true,       //自動再生
    autoplaySpeed: 2000,  //自動再生のスピード
    speed: 800,           //スライドするスピード
    dots: true,           //スライド下のドット
    arrows: true,         //左右の矢印
    infinite: true,       //永久にループさせる
});

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