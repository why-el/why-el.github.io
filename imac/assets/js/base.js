$(document).ready(function() {

	var loc = window.location.href;
  console.log("loc is" + loc);

	$("#filter li a").each(function() {
 		   if(this.href.split("/")[3] == loc.split("/")[3]) {

        console.log("this href when split is" + this.href.split("/")[3]);
        console.log("tloc when split is" + loc.split("/")[3]);

     		$(this).parent().addClass('active');

        console.log("this is: " + $(this));

  		}
	});
});