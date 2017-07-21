$(function(){

	$('.btn_menu').click(function(){
		$('.menu ul').slideToggle();
	});

	$('.carousel').owlCarousel({
		singleItem: true,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>',
		'<i class="fa fa-angle-right"></i>']
	});

	var mixer = mixitup('.port_items');

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
	new WOW().init();

});