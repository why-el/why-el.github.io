$(document).ready(function() {

	var loc = window.location.href;
  console.log("loc is" + loc);

	$("#filter li a").each(function() {
 		   if(this.href.split("/")[11] == loc.split("/")[11]) {

        console.log("this href when split is" + this.href.split("/")[11]);
        console.log("tloc when split is" + loc.split("/")[11]);

     		$(this).parent().addClass('active');

        console.log("this is: " + $(this));

  		}
	});
});