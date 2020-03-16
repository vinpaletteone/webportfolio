window.onload = function(){
	let mousey = document.querySelector('.mousey');
	let scroller = document.querySelector('.scroller');
	//let topbtn = document.querySelector('.scrolltop');
	
	//스크롤 다운
	//javascript
	// function scrolldown(){
	// 	let windowCoords = document.documentElement.clientHeight; //html 전체
		
	// 	(function scroll() {
	// 		if (window.pageYOffset < windowCoords) {
	// 			window.scrollBy(0, 10);
	// 			setTimeout(scroll, 0);
	// 		}
	// 		if (window.pageYOffset > windowCoords) {
	// 			window.scrollTo(0, windowCoords);
	// 		}
	// 	})();
	// }
	
	// mousey.onclick = function(){
	// 	scrolldown();	
	// };

	//jquery
	$('.mousey').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 770}, 'slow');
	});

	
	mousey.onmouseenter = function(){
		scroller.classList.add('move');
	};
	
	mousey.onmouseleave = function(){
		scroller.classList.remove('move');
	};
	
	//스크롤 탑
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.scrolltop').fadeIn(200);
		} else {
			$('.scrolltop').fadeOut(200);
		}
		
		if ($(this).scrollTop() == 760) {
			$('header').css({ 'position' : 'fixed', 'top' : '-105px'}).animate({'top':'0px'}, 500);
		}else if($(this).scrollTop() > 760){
			$('header').css({ 'position' : 'fixed'});
		}else{
			$('header').css({ 'position' : 'static'});
		}
		
	});

	$('.scrolltop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 300);
	})

	$('nav a').click(function(event) {
		let id = $(this).attr("href");
		let offset = 70;
		let target = $(id).offset().top - offset;

		$('html, body').animate({
			scrollTop: target
		}, 500);
		
		event.preventDefault();
	});

	
};
