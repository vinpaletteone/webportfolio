window.onload = function(){
	let mousey = document.querySelector('.mousey');
	let scroller = document.querySelector('.scroller');

	//스크롤 다운
	$('.mousey').on('click', function(e) {
		e.preventDefault();
		let widthSize = window.outerWidth;

		if(widthSize <= 768){
			$('html, body').animate({scrollTop: 595}, 'slow');
		}else{
			$('html, body').animate({scrollTop: 630}, 'slow');
		}
	});

	//스크롤 다운 애니메이션
	mousey.onmouseenter = function(){
		scroller.classList.add('move');
	};
	
	mousey.onmouseleave = function(){
		scroller.classList.remove('move');
	};
	

	//스크롤 탑
	$(window).scroll(function(){
		//아이콘 표시
		if ($(this).scrollTop() > 200) {
			$('.scrolltop').fadeIn(200);
		} else {
			$('.scrolltop').fadeOut(200);
		}
		
		//header 붙이기
		//console.log($(this).scrollTop());
		
		let widthSize = window.outerWidth;

		if ($(this).scrollTop() == 630) {//-105px
			$('header').css({ 'position' : 'fixed', 'top' : '-105px'}).animate({'top':'0px'}, 500);
		}else if($(this).scrollTop() > 630){
			$('header').css({ 'position' : 'fixed'});
		}else{
			$('header').css({ 'position' : 'static'});
		}
		
		if(widthSize <= 768){
			if ($(this).scrollTop() == 550) {//-105px
				$('header').css({ 'position' : 'fixed', 'top' : '-105px'}).animate({'top':'0px'}, 500);
			}else if($(this).scrollTop() > 550){
				$('header').css({ 'position' : 'fixed'});
			}else{
				$('header').css({ 'position' : 'static'});
			}
		}
	});

	//스크롤 탑
	$('.scrolltop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 300);
	})
	
	//가로 사이즈 .mobile-wrap 상태 변경
	function widthResize(){
		let widthSize = window.outerWidth;

		if(widthSize > 768){
			$('.mobile-wrap').css('display', 'block');
		}else{	
			$('.mobile-wrap').css('display', 'none');
		}
	}

	//메뉴 이동하기
	$('nav a').click(function(event) {
		let id = $(this).attr("href"); //section02, section03 ...
		let offset = 50;
		let widthSize = window.outerWidth;
		
		if(id == ".section02" || id == ".section03" || id == ".section04"){
			if(widthSize <= 768){
				offset = 67;	
			}
	
			let target = $(id).offset().top - offset;
	
			//메뉴 닫기
			widthResize();
	
			$('html, body').animate({
				scrollTop: target
			}, 500);
			event.preventDefault();
		}
		
	});


	//nav 열기 
	$('#buger').click(function(){
		$('.mobile-wrap').css('display', 'block');
		$('body').css("overflow", "hidden");
	});	
			
	//nav 닫기 
	$('#buger-close').click(function(){
		$('.mobile-wrap').css('display', 'none');
		$('body').css("overflow", "scroll");
	});

	//resize
	$(window).resize(function(){
		widthResize();

	});

	//modal
	$('.project-content img').click(function(){
		let modalId = $(this).attr('id');
		
		if($(this).attr('id') == modalId){
			$('header').css('display', 'none');
			
			$("#modal-container").fadeIn(300);
			$("." + modalId).fadeIn(300); // fadeOut 필요
			
			$('body').css("overflow", "hidden");
			$('.scrolltop').hide();
			
		}
	});
	
	
	//modal 닫기
	$(".modal-info img").click(function(){
		$("#modal-container").fadeOut(300);
		$(".modal-wrap").fadeOut(300);
		$('body').css("overflow", "scroll");
		$('header').css('display', 'block');
		$('.scrolltop').show();
		
		return false;
	});
	
	
	//modal 외부 영역 클릭시 닫기
	$(document).mouseup(function (e){
		let container = $("#modal-container");
		
		if(container.has(e.target).length === 0){
			$('body').css("overflow", "scroll");
			$('header').css('display', 'block');
			container.hide();
		}
	});
	

	
};
