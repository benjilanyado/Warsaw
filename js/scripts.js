$(document).ready(function(){


  $(".link1").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-940px"}, 1000)
  });

  $(".link2").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-1880px"}, 1000)
  });

  $(".link3").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-2820px"}, 1000)
  });

  $(".link4").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-3760px"}, 1000)
  });

  $(".link5").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-4700px"}, 1000)
  });

  $(".link6").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-5640px"}, 1000)
  });
  $(".link7").click(function(event) { 
  	$("#internalwrapper").animate({"left": "0px"}, 1000)
  });


// SLIDE 1 /////

 $(".copyright").click(function(event) { 
  	$(".copyhider").animate({"left": "-440px"}, 1000)
  	$(".copyleft").fadeIn()
  	$(".copyright").fadeOut()
  });

  $(".copyleft").click(function(event) { 
  	$(".copyhider").animate({"left": "0px"}, 1000)
  	$(".copyright").fadeIn()
  	$(".copyleft").fadeOut()
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

////SLIDE2 ///

var boxs = [
    {
        selector: '#cover1',
        headline: 'Bold Bean Cafe',
        copy: "First stop of the day - <a target='_blank' href='http://www.boldbeancoffee.com/pages/cafe'>Bold Bean Cafe</a>. Thanks to <a target='_blank' href='https://twitter.com/pricesquire'>@pricesquire</a> for the tip. My Americano was very nice, as was the the breadline pie I had with it. It's quite a hip place.",
        address: "• <a target='_blank' href='http://www.boldbeancoffee.com/pages/cafe'>boldbeancoffee.com</a>, 869 Stockton Street, Jacksonville<br/><br/>• Listen to <a target='blank' href='http://www.guardian.co.uk/travel/2013/apr/25/sweat-records-florida-road-trip-spotify-playlist'>Sweat Records' Florida road trip playlist</a>",
        content: '<img src="images/boldbean.jpg">'
    },

    {
        selector: '#cover2',
        headline: 'Airstream ranch',
        copy: 'On the way west along the I-4, I pulled in at Airstream Ranch.  Eight trailers/caravans shoved in the ground, lengthways. Frank and Dorothy Bates erected them in 2007. In 2010,<a target="_blank" href="http://www.tampabay.com/news/humaninterest/now-legit-as-art-airstream-ranch-will-honk-its-horn/1095257"> after a legal battle</a>, a judge ruled they could keep them up.',
        content: '<img src="images/airstreams.jpg">',
        address: ''
    }

   ]

function processPlaceClick(box) {

    $("#buttons").fadeOut();
    $(".dayofweek").fadeOut();
    $("#tooltip1").fadeOut();
    $("#lightbox").fadeIn(function(event){      
      $("#content").html(box.content);
      $("#copyheader").html(box.headline)
      $("#copy").html(box.copy)
      $("#address").html(box.address)
    });

 }

 $.each(boxs, function(i, box) {
        $(box.selector).on('click', function(e){
            e.preventDefault();
            processPlaceClick(box);
        });
    });


  $("#close").click(function(event) {        

    event.preventDefault();


    $("#lightbox").fadeOut(function(event){
       $("#buttons").fadeIn();
      $("#content").html('');
      $("#copyheader").html('');
      $("#copy").html('');
      $("#address").html('')
       $(".dayofweek").fadeIn();

    })

  });
















}); //ready