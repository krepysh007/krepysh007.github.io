$(function(){
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
	$('#owl-one').owlCarousel({
		loop:true,
		nav: true,
		navText: false,
		items: 1,
		dotsEach: true,

 });
	$('#owl-two').owlCarousel({
		loop:true,
		nav: true,
		navText: false,
		items: 3,
		dotsEach: true,
		responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }

 });


});