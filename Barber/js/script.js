$(function(){
	
//Подключаем карусель
$('.carousel').owlCarousel({
  singleItem: true,
  navigation: true,
  navigationText : false,
 });

$('.hamburger').click(function(){
    $(['.hamburger','.menu ul']).toggleClass('is-active');
  });

$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

 new WOW().init();
 		$ (window).scroll (function () {
			if ($ (this).scrollTop () > 300) {
			$ ('#btn_top').fadeIn();
			} else {
			$ ('#btn_top').fadeOut();
			}
			});
 	$("#menu, #btn_top").on("click","a", function (event) {

		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});


});
