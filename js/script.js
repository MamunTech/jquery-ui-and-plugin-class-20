$('.drag').draggable();

$('.drop').droppable({
	drop:function(){
		$('.drop').css('background','green');
		$('.drag').hide(500);
		$('.drop').hide(500);
		$('.totalCode').show(500);
		
	}
});

$( '.accordia' ).accordion();

var autoitems=[ "ActionScript","Abdullah AL Mamun",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"];
	  
	$('.auto').autocomplete({
		source:autoitems
	});
	
	$('.datepick').datepicker();
	
	$('.tab').tabs();
	$(".owl-carousel").owlCarousel();
