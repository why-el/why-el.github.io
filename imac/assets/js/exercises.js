$(document).ready(function() {
	$('#correct_answer').click(function(){
		$('.answer').text('correct! :)').css('color', 'green');
	});
	$('#wrong_answer').click(function(){
		$('.answer').text('Try again! :)').css('color', 'red');
	});
});