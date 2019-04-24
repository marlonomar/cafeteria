$(document).ready(function(){

	//efecto menu

$('.menu a').each(function(index,elemento){
$(this).css({
'top':'-200px'
});
$(this).animate({
	top: '0'
},2000 + (index * 500));
});

// efecto header
if( $(window).width() > 800){
	$('header .textos').css({
		opacity: 0,
		margin: 0
	});
	$('header .textos').animate({
		opacity:1,
		marginTop: '-52'
	}, 1500);
}
var acercaDe = $('#acerca-de').offset().top,
	menu  = $('#menu').offset().top,
	galeria  = $('#galeria').offset().top,
	ubicacion  = $('#ubicacion').offset().top;


$('#btn-acerca-de').on('click',function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 500
	},500);
});


$('#btn-menu').on('click',function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: menu +580 
	},500);
});


$('#btn-galeria').on('click',function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: galeria +80
	},500);
});


$('#btn-ubicacion').on('click',function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: ubicacion
	},500);
});


});
