/* global $*/

$(function() {
	setTimeout(function(){
		$('.first-image1_fadein').fadeIn(1500);
	},500);
	setTimeout(function(){
		$('.first-image1_fadein').fadeOut(1300);
	},2500);
	setTimeout(function(){
		$('.first-image2_fadein').fadeIn(1500);
	},3000);
	setTimeout(function(){
		$('.first-image2_fadein').fadeOut(1300);
	},5000);
	setTimeout(function(){
		$('.first-logo').fadeIn(2000);
	},5500);
	setTimeout(function(){
		$('.logo_fadein').fadeOut(1500);
	},9000);
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
    autoplaySpeed: 3500,  //自動再生のスピード
    speed: 1500,           //スライドするスピード
    dots: true,           //スライド下のドット
    arrows: true,         //左右の矢印
    infinite: true,       //永久にループさせる
});

$('.merit-slider').slick({
    speed: 800,           //スライドするスピード
    arrows: true,         //左右の矢印
    infinite: true,       //永久にループさせる
    prevArrow: '<img src="img/back.jpg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="img/next.jpg" class="slide-arrow next-arrow">',
});

$('.info-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,　//隣あう画像のスライドするまでの間隔時間
    speed: 12000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: true,
    cssEase: 'linear'//開始から終了まで一定に変化する
});

$('.page-top-link').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

$(function() {
  $('body .merit *').removeAttr('style');
});

$(function() {
  $('#targetElement').css('filter', 'grayscale(100%)');
  $('#targetElement').css('-webkit-filter', 'grayscale(100%)');
});

const swiper_thumbnail = new Swiper(".swiper_thumbnail", {
    slidesPerView: 3,
})
const swiper = new Swiper('.swiper_main', {
    loop: true,
    speed: 1500,
    effect: 'fade',
    autoplay: {
        delay: 2500,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper_thumbnail,
    },
})

$(function(){
    $('.qa_q').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass("open");
  });
});

//インスタ導入
function switchByWidth(){
    if (window.matchMedia('(max-width: 767px)').matches) {
         $(function(){
          let list = '';
          const limit = 6; //表示件数
          const accessToken = "EAAPxHEsE1egBO1UMoS96TOeZAZAv70RxSsR2C6eQGfX3KNouQK8Y3q3VUb3wiYMYZAOqAOaAmOQT8KZBPSZCurxHGDANQ6VxU50ZBZCFUkgddB2ZCa6naa55IFZBkMfclgqJZAvNhkPM1TjAZA6dClSob99RbnL66vyGknlqZBxaajn8yBH2P7NatQWSdwegFHFVL0VU"; // アクセストークン
          const businessID = "17841404446788258"; //instagram_business_accountのID
          const url = `https://graph.facebook.com/v10.0/${businessID}?fields=name,media.limit(${limit}){caption,media_url,thumbnail_url,permalink,like_count,comments_count,media_type}&access_token=${accessToken}`;
          $.ajax({
            url: url
          }).done((res)=> {
            const data = res.media;
            $.each(data, function(index, val) {
              $.each(val, function(i, item) {
                const caption = item.caption;
                console.log(item);
                if(item.media_url){
                  //メディアのタイプがビデオの場合、サムネを取得
                  media = (item.media_type == 'VIDEO' ? item.thumbnail_url : item.media_url);
                  // 一覧を変数listに格納
                  list +=
                  `<li>
                    <a href="${item.permalink}" target="_blank" rel="noopener">
                    <img src="${media}">
                    <span class="caption">${caption}</span>
                  </li>`;
                }
        
              })
            });
          $('#insta').html(`<ul>${list}</ul>`);
          }).fail(function(jqXHR, status) {
            $('#insta').html('<p>読み込みに失敗しました。</p>');
          });
        });
    } else if (window.matchMedia('(min-width:768px)').matches) {
         $(function(){
          let list = '';
          const limit = 12; //表示件数
          const accessToken = "EAAPxHEsE1egBO1UMoS96TOeZAZAv70RxSsR2C6eQGfX3KNouQK8Y3q3VUb3wiYMYZAOqAOaAmOQT8KZBPSZCurxHGDANQ6VxU50ZBZCFUkgddB2ZCa6naa55IFZBkMfclgqJZAvNhkPM1TjAZA6dClSob99RbnL66vyGknlqZBxaajn8yBH2P7NatQWSdwegFHFVL0VU"; // アクセストークン
          const businessID = "17841404446788258"; //instagram_business_accountのID
          const url = `https://graph.facebook.com/v10.0/${businessID}?fields=name,media.limit(${limit}){caption,media_url,thumbnail_url,permalink,like_count,comments_count,media_type}&access_token=${accessToken}`;
          $.ajax({
            url: url
          }).done((res)=> {
            const data = res.media;
            $.each(data, function(index, val) {
              $.each(val, function(i, item) {
                const caption = item.caption;
                console.log(item);
                if(item.media_url){
                  //メディアのタイプがビデオの場合、サムネを取得
                  media = (item.media_type == 'VIDEO' ? item.thumbnail_url : item.media_url);
                  // 一覧を変数listに格納
                  list +=
                  `<li>
                    <a href="${item.permalink}" target="_blank" rel="noopener">
                    <img src="${media}">
                    <span class="caption">${caption}</span>
                  </li>`;
                }
        
              })
            });
          $('#insta').html(`<ul>${list}</ul>`);
          }).fail(function(jqXHR, status) {
            $('#insta').html('<p>読み込みに失敗しました。</p>');
          });
        });
    }
}

//ロードとリサイズの両方で同じ処理を付与する
window.onload = switchByWidth;
window.onresize = switchByWidth;