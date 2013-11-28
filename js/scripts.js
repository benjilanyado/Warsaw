$(document).ready(function(){


  $(".link1").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-0px"}, 1000)
  });

  $(".link2").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-940px"}, 1000)
  });

  $(".link3").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-1880px"}, 1000)
  });

  $(".link4").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-2820px"}, 1000)
  });

  $(".link5").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-3760px"}, 1000)
  });

  $(".link6").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-4700px"}, 1000)
  });


var verticalimages1 = [	"0px", "-627px", "-1254px", "-1881px"];
var lightboxCurrent1 = 0;
function downclick1() {
	lightboxCurrent1 += 1
 	$(".verticalslidewrapper1").animate({"top": verticalimages1[lightboxCurrent1]}, 1000)
 	$(".upbutton1").fadeIn()
 	$(".backtotop1").fadeIn()
 	if (lightboxCurrent1==(verticalimages1.length - 1)) {
 		$(".downbutton1").fadeOut()
 		$(".upbutton1").fadeIn()
 	}
}

function upclick1() {
	lightboxCurrent1 -= 1
 	$(".verticalslidewrapper1").animate({"top": verticalimages1[lightboxCurrent1]}, 1000)
 	$(".downbutton1").fadeIn()
 	$(".backtotop1").fadeOut()
 	if (lightboxCurrent1==(verticalimages1.length - 4)) {  //NB  "-5" needs to be whatever length of array is
 		$(".upbutton1").fadeOut()
 	}
}

$(".downbutton1").click(function(event) {      
	event.preventDefault();
	downclick1()
});

$(".upbutton1").click(function(event) {   	
	event.preventDefault();
	upclick1()
});

$(".backtotop1").click(function(event) {   	
	event.preventDefault();
	$(".verticalslidewrapper1").animate({"top": "0px"}, 1000)
	lightboxCurrent1 = 0;
	$(".downbutton1").fadeIn();
	$(".backtotop1").fadeOut()
});

////////////SLIDE 2 /////////


var verticalimages2 = [	"0px", "-627px", "-1254px", "-1881px"];
var lightboxCurrent2 = 0;
function downclick2() {
	lightboxCurrent2 += 1
 	$(".verticalslidewrapper2").animate({"top": verticalimages2[lightboxCurrent2]}, 1000)
 	$(".upbutton2").fadeIn()
 	$(".backtotop2").fadeIn()
 	if (lightboxCurrent2==(verticalimages2.length - 1)) {
 		$(".downbutton2").fadeOut()
 		$(".upbutton2").fadeIn()
 	}
}

function upclick2() {
	lightboxCurrent2 -= 1
 	$(".verticalslidewrapper2").animate({"top": verticalimages2[lightboxCurrent2]}, 1000)
 	$(".downbutton2").fadeIn()
 	if (lightboxCurrent2==(verticalimages2.length - 4)) {  //NB  "-5" needs to be whatever length of array is
 		$(".upbutton2").fadeOut()
 		$(".backtotop2").fadeOut()
 	}
}

$(".downbutton2").click(function(event) {      
	event.preventDefault();
	downclick2()
});

$(".upbutton2").click(function(event) {   	
	event.preventDefault();
	upclick2()
});

$(".backtotop2").click(function(event) {   	
	event.preventDefault();
	$(".verticalslidewrapper2").animate({"top": "0px"}, 1000)
	lightboxCurrent2 = 0;
	$(".downbutton2").fadeIn()
	$(".backtotop2").fadeOut()
});


















}); //ready