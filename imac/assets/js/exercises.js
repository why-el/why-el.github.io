$(document).ready(function() {

	function createLine(x1,y1, x2,y2){
    	var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
  		var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  		console.log("angle is: " + angle);
  		var transform = 'rotate('+angle+'deg)';

    	var line = $('<div>')
    		.appendTo($('#label1'))
        	.addClass('line')
        	.css({
          		'position': 'absolute',
          		'transform': transform,
          		'height': '3px', /* Line width of 3 */
  				'background': '#000' /* Black fill */
        	})
        	.width(length)
        	.offset({left: x1, top: y1});
        	console.log(line);
    	return line;
	}

	$('#correct_answer').click(function(){
		$('.answer').text('correct! :)').css('color', 'green');
	});

	$('#wrong_answer').click(function(){
		$('.answer').text('Try again! :)').css('color', 'red');
	});

	$('#fitb_button').click(function() {
  		if ($('#candidate').val() == 'alaska'){
  			$('.fitb_answer').text('correct!').css('color', 'green');
  		}
		else {
			$('.fitb_answer').text('Try again!').css('color', 'red');
		}
	});
	$('.label.left').click(function(){
		$(this).addClass("selected");
	});

	$('#label2').click(function(){
		var x1 = $('#label1').offset().left;
		var x2 = $('#label1').offset().top;
		var y1 = $(this).offset().left;
		var y2 = $(this).offset().top;
		console.log("x1 is: "+x1);
		console.log("y1 is: "+y1);
		console.log("x2 is: "+x2);
		console.log("y2 is: "+y2);
		createLine(x1, x2, y1, y2);
	});
	$('#label3').click(function(e){
		var x1 = $('#label1').offset().left;
		var x2 = $('#label1').offset().top;
		var y1 = $(this).offset().left;
		var y2 = $(this).offset().top;
		console.log("x1 is: "+x1);
		console.log("y1 is: "+y1);
		console.log("x2 is: "+x2);
		console.log("y2 is: "+y2);
		createLine(x1, x2, y1, y2);
	});
	$('#label4').click(function(){
		var x1 = $('#label1').offset().left;
		var x2 = $('#label1').offset().top;
		var y1 = $(this).offset().left;
		var y2 = $(this).offset().top;
		console.log("x1 is: "+x1);
		console.log("y1 is: "+y1);
		console.log("x2 is: "+x2);
		console.log("y2 is: "+y2);
		createLine(x1, x2, y1, y2);
	});

	// Drap and drop logic
	var a = 0, b = 0, c = 0, d = 0, e = 0; // crazy, need better solution. 
	$( ".draggable" ).draggable({
    	revert: false,
    	start: function(event, ui) {
        	ui.helper.data('dropped', false);
    	},
    	stop: function(event, ui)
    	{
        	console.log('stop: dropped=' + ui.helper.data('dropped'));
        	// Check value of ui.helper.data('dropped') and handle accordingly...
    	}
	});
	$( "#droppable1" ).droppable({
            drop: function( event, ui ) {
            	ui.draggable.data('dropped', true);
                if (ui.draggable.attr("class").split(" ")[1] === "category1"){
                	console.log("yeppeeee");
                	a++;
                	console.log("a is now " + a);
                }
                // $( this )
                //     .addClass( "received" )
                    // .find( "p" )
                    //     .html( "Dropped!" );
            }
        });
	$( "#droppable2" ).droppable({
            drop: function( event, ui ) {
            	ui.draggable.data('dropped', true);
                if (ui.draggable.attr("class").split(" ")[1] === "category2"){
                	console.log("yeppeeee");
                	b++;
                	console.log("b is now " + b);
                }
	        }
      });
	$("#droppable3").droppable({
            drop: function( event, ui ) {
            	ui.draggable.data('dropped', true);
                if (ui.draggable.attr("class").split(" ")[1] === "category3"){
                	console.log("yeppeeee");
                	c++;
                	console.log("a is now " + a);
                }
            }
        });

	$("#droppable4").droppable({
            drop: function( event, ui ) {
            	ui.draggable.data('dropped', true);
                if (ui.draggable.attr("class").split(" ")[1] === "category4"){
                	console.log("yeppeeee");
                	d++;
                	console.log("a is now " + a);
                }
            }
        });

	$( "#droppable5" ).droppable({
            drop: function( event, ui ) {
            	ui.draggable.data('dropped', true);
                if (ui.draggable.attr("class").split(" ")[1] === "category5"){
                	console.log("yeppeeee");
                	e++;
                	console.log("a is now " + a);
                }
            }
        });

	$('#dad_submit_button').click(function() {
		console.log("a is: " + a);
  		if (a === 4){
  			$('#droppable1').addClass('correct');
  		}
  		else {
  			$('#droppable1').addClass('notCorrect');
  		}
  		if (b === 4){
  			$('#droppable2').addClass('correct');
  		}
  		else {
  			$('#droppable2').addClass('notCorrect');
  		}
  		if (c === 4){
  			$('#droppable3').addClass('correct');
  		}
  		else {
  			$('#droppable3').addClass('notCorrect');
  		}
  		if (d === 4){
  			$('#droppable4').addClass('correct');
  		}
  		else {
  			$('#droppable4').addClass('notCorrect');
  		}
  		if (e === 4){
  			$('#droppable5').addClass('correct');
  		}
  		else {
  			$('#droppable5').addClass('notCorrect');
  		}
	});

});

// You can use the alerts from bootstrap. :) 