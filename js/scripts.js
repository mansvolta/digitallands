$(document).ready(function(){
	console.log('hola');

	var $startContainer = $('.start'),
		$aboutContainer = $('.about');
	$startContainer.height(window.innerHeight);
	$aboutContainer.height(window.innerHeight);
	$(window).resize(function(){
		$startContainer.height(window.innerHeight);
		$aboutContainer.height(window.innerHeight);
	});

	var	$navButton = $('.nav-button');

	$navButton.singlePageNav({
		speed: 1000,
		onComplete: function(){
			console.log('scrollin');
		}
	});
});