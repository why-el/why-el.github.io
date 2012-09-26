$(document).ready(function() {
	$('#correct_answer').click(function(){
		$('.answer').text('correct! :)').css('color', 'green');
	});
	$('#wrong_answer').click(function(){
		$('.answer').text('Try again! :)').css('color', 'red');
	});
	$(':button').click(function() {
  		if ($('#candidate').val() == 'alaska'){
  			$('.fitb_answer').text('correct!').css('color', 'green');
  		}
		else {
			$('.fitb_answer').text('Try again!').css('color', 'red');
		}
	});
});

// You can use the alerts from bootstrap. :) 