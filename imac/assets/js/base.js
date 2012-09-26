$(document).ready(function() {

	var loc = window.location.href;

	$("#filter li a").each(function() {
 		   if(this.href.split("/")[4] == loc.split("/")[4]) {

     		$(this).parent().addClass('active');

  		}
	});
});