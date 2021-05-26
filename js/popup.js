$(document).ready(function () {

	$(".hiddenoff .close").on("click", function(){
		// $(".body").addClass("animate__animated animate__fadeOutDown")
		
		setTimeout(function() {
			$(location).attr("href", "anim.html")
		},1000)

	});

	$(".hiddenoff2 .close2").on("click", function(){
		// $(".body").addClass("animate__animated animate__fadeOutDown")
		
		$('html,body').animate({
        scrollTop: $(".fifthPage").offset().top},
        'slow');

	});


	$(".popup-lnk").on("click", function(){

		var lnk = $(this).attr('href');
		if (lnk && (lnk !="") && (lnk !="#")) { 	

  			var popObj = $(lnk);

  			if (popObj) {
  				if (!popObj.hasClass('active')) 
        			popObj.addClass('active');			

          if (!popObj.hasClass('r')) 
              popObj.addClass('active');
        	}
        }
  		return false;
	});
});



