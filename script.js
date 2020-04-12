'use strict';
function ibg(){
	let ibg = document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }
};
ibg();
function heightLineImg() {
	let heightLineImg = 0;
 	for (let i = 0; i < 4; i++) {
		let j = $('.line__img').eq(i).width();
		if (j > heightLineImg) {
			heightLineImg = j;
		}
	}
	return heightLineImg;
 }

jQuery(window).scroll(function(){
         let $sections = $('section');
	$sections.each(function(i,el){
        let top  = $(el).offset().top - 300;
        let bottom = top +$(el).height();
        let scroll = $(window).scrollTop();
        let id = $(el).attr('id');
    	if( scroll > top && scroll < bottom){
        $('a.active__link').removeClass('active__link');
				$('a[href="#' + id + '"]').addClass('active__link');
       }
    })
 });
$(document).ready(function() {
	$('.header').css('position', 'fixed');
	$('body').css('padding-top', $('.header').outerHeight());
	$(window).resize(function() {
		$('body').css('padding-top', $('.header').outerHeight());
	});
	$('.header__top__nav__burger').click(function(event) {
		$('.header__top__nav__ul').slideToggle(400);
		$('.header__top__nav__ul__item, .header__top__nav__burger').toggleClass('active');
	});
	$(".header__top__nav__ul__item a").click(function() {
		event.preventDefault();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
    }, {
      duration: 750,
      easing: "swing"
    });
    return false;
  });
	$('.line__img').width(heightLineImg());
	let scrollPrev = 0;
	let windowWidth = $(window).width();
	let heightScrollForTop = $('.header__top__up-1').outerHeight() + $('.header__top__up-2').outerHeight() + 22;
	$(window).scroll(function() {
		let scrolled = $(window).scrollTop();
		if ( scrolled > 100 && scrolled > scrollPrev && windowWidth > 575) {
			$('.header__bottom').slideUp(400);
		} else if ( scrolled <= 100 && windowWidth > 575 ||  scrolled <= scrollPrev && windowWidth > 575) {
			$('.header__bottom').slideDown(400);
		};
		if (scrolled > $('.header').outerHeight() && scrolled > scrollPrev && windowWidth <= 575) {
			$('.header').css('top', -(heightScrollForTop));
			$('.header__bottom').hide()
		} else if (scrolled <= $('.header').outerHeight() && windowWidth <= 575 ||  scrolled <= scrollPrev && windowWidth < 575) {
			$('.header').css('top', '0');
			$('.header__bottom').hide()
		};
		scrollPrev = scrolled;
	});
	if (true) {}
	$('.owl-carousel').owlCarousel({
		items: 3,
		loop: true,
		dots: false,
		margin: 30,
		nav: true,
    navText: ['<div class="arow-prew"></div>', '<div class="arow-next"></div>'],
    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
        0:{
            items:1
        },
        576:{
            items:2
        },
				768:{
            items:3
        }        
    }
	});
	$('.section-9__button').on('click', function(event) {
		if (!$(this).hasClass('active')) {
			$('.section-9__button').removeClass('active');
			$(this).addClass('active');
			$('.section-9__tab').removeClass('active').eq($(this).index() - 1).addClass('active');
		}
	});
	$('.section-7__button').on('click', function(event) {
			if (!$(this).hasClass('active')) {
				$('.section-7__button').removeClass('active');
				$(this).addClass('active');
				$('.section-7__tab').removeClass('active').eq($(this).index() - 1).addClass('active');
			}
		});
	$('.window__black, .window__back').click(function() {
		$('.window, .window__black').removeClass('active');
	});
	$('.section-2__grid-3__item, button, .carousel__item').click(function() {
		let selectorId = $(this).attr('data-selector-id');
		if (selectorId != undefined) {
			$('#' + selectorId).addClass('active');
 			$('.window__black').addClass('active');				
		}
	});
	$('.section-7 .carousel__item__img').height($('.section-7 .carousel__item__img').width() * 0.7);	
	$('.section-7__tabs').height($('.section-7__tabs .owl-carousel:first-child').outerHeight());
	$(window).resize(function(event) {
		$('.section-7 .carousel__item__img').height($('.section-7 .carousel__item__img').width() * 0.7);	
		$('.section-7__tabs').height($('.section-7__tabs .owl-carousel:first-child').outerHeight());
	});
});

