$(function(){

	$(".phone .wrapper .tab").click(function() {
		$(".phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".phone .tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".phone_footer .tab").click(function() {
		$(".phone_footer .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".phone_footer .tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$(".sale_box .wrapper .tab").click(function() {
		$(".sale_box .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".sale_box .tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".box_4 .map_head .tab").click(function() {
		$(".box_4 .map_head .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".map_box .tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

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



//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$('.carousel').owlCarousel({
		singleItem: true,
		navigation: true,
		navigationText : ['<img src="img/carousel_prev.png">',
		'<img src="img/carousel_next.png"</i>']
	});

});