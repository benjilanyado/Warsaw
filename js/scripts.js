$(document).ready(function(){


  $(".link1").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-720px"}, 1000)
    $(".clicker").removeClass("linkselected")
    $(this).addClass("linkselected")
  });

  $(".link2").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-1440px"}, 1000)
    $(".clicker").removeClass("linkselected")
    $(this).addClass("linkselected")
  });

  $(".link3").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-2160px"}, 1000)
    $(".clicker").removeClass("linkselected")
    $(this).addClass("linkselected")
  });

  $(".link4").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-2880px"}, 1000)
    $(".clicker").removeClass("linkselected")
    $(this).addClass("linkselected")
  });

  $(".link5").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-3600px"}, 1000)
    $(".clicker").removeClass("linkselected")
    $(this).addClass("linkselected")
  });

  $(".link6").click(function(event) { 
  	$("#internalwrapper").animate({"left": "-4320px"}, 1000)
    $(".clicker").removeClass("linkselected")
    $(this).addClass("linkselected")
  });
  $(".link7").click(function(event) { 
  	$("#internalwrapper").animate({"left": "0px"}, 1000)
    $(".clicker").removeClass("linkselected")
    $(this).addClass("linkselected")
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


var verticalimages1 = [	"0px", "-627px", "-1254px", "-1881px", "-2508px", "-3135px", "-3762px", "-4389px", "-5016px", "-5643px", "-6265px"];
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
 	if (lightboxCurrent1==(verticalimages1.length - 10)) {  //NB  "-5" needs to be whatever length of array is
 		$(".upbutton1").fadeOut()
 		$(".backtotop1").fadeOut()
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
	lightboxCurrent2 = 0;
	$(".downbutton1").fadeIn()
	$(".backtotop1").fadeOut()
});

////SLIDE2 ///

var boxs = [
    {
        selector: '.number1',
        selector2: '.mapplace1',
        headline: 'Tragutta Park',
        copy: "The park still contains the stadium where the football match that is featured in STARS took place. This game is known as “the last game” as it took place four days before the Germany invasion.  ",
        address: "",
        content: '<img src="images/tragulla.jpg">'
    },

    {
        selector: '.number2',
        headline: 'Warsaw Zoo',
        selector2: '.mapplace2',
        copy: 'In pre-war Warsaw the zoo was one the largest in Europe and the city’s most popular visitor attraction. Although it was almost completely destroyed during the war, it was rebuilt and is now even more popular.',
        content: '<img src="images/zoo.jpg">',
        address: ''
    },
    {
        selector: '.number3',
        selector2: '.mapplace3',
        headline: 'Sztuka Café',
        copy: 'The Sztuka (Arts) Café was a popular meeting place. Despite the ever worsening conditions inside the ghetto many cultural events took place. The café was one of the venues where many of Warsaw’s most talented musicians, such as Wladyslaw Szpilman, performed. ',
        content: '<img src="images/arts.jpg">',
        address: ''
    },
    {
        selector: '.number4',
        selector2: '.mapplace4',
        headline: 'Great Synagogue',
        copy: 'The Great Synagogue’s large green dome dominated the Warsaw skyline. It was a spectacularly ornate building which could accommodate almost 2500 people. It’s destruction, in May 1943 was seen by the Nazis to symbolise their final “triumph” over Warsaw’s Jews.',
        content: '<img src="images/synagogue.jpg">',
        address: ''
    },
    {
        selector: '.number5',
        selector2: '.mapplace5',
        headline: 'Pilsudski Square',
        copy: 'Pilsudski Square is Warsaw’s traditional venue for large military displays.  After Hitler used it for his Victory Parade in September 1939 it was temporarily renamed “Adolf Hitler Platz”. ',
        content: '<img src="images/square.jpg">',
        address: ''
    },
    {
        selector: '.number6',
        selector2: '.mapplace6',
        headline: 'Korczak Orphanage',
        copy: 'Janusz Korczak helped to design the building  that housed his Jewish orphanage. It thrived there from 1912 to 1940 when it was forced to move within the ghetto walls. ',
        content: '<img src="images/orphan1.jpg">',
        address: ''
    },
    {
        selector: '.number7',
        selector2: '.mapplace7',
        headline: 'Ghetto Orphanage',
        copy: 'In 1940 Korczak was forced to relocate his orphanage to 33 Chlodna Street. There are no surviving images of the building but it was located very close to the wooden footbridge that was built to connect the “small” and “large” sections of the  ghetto in January 1942.',
        content: '<img src="images/orphan2.jpg">',
        address: ''
    },
    {
        selector: '.number8',
        selector2: '.mapplace8',
        headline: 'Jewish Cemetery',
        copy: 'The Jewish Cemetery on Okopowa Street opened in 1806 and has over 200,000 marked graves. There is a memorial to Janusz Korczak and the vast number of child victims. Simon Tenenbaum (Marcus’ father in STARS) is buried there; I was honoured to be able to pay my respects at his graveside.',
        content: '<img src="images/grave.jpg">',
        address: ''
    },
    {
        selector: '#cover9',
        headline: '',
        copy: '<div class="mapplace mapplace5">  <b>5. Pilsudski Square</b> </div> <div class="mapplace mapplace6">  <b>6. Korczak Orphanage</b>  </div><div class="mapplace mapplace7"> <b>7. Ghetto Orphanage </b></div>  <div class="mapplace mapplace8"> <b>8. Jewish Cemetery </b> </div>  ',
        content: '<div class="mapplace mapplace1"><b>1. Tragutta Park </b> </div> <div class="mapplace mapplace2">  <b>2. Warsaw Zoo</b>  </div>   <div class="mapplace mapplace3"> <b>3. Sztuka Café</b> </div> <div class="mapplace mapplace4"> <b>4. Great Synagogue</b></div>',
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
            $(".number").removeClass("selected")
            $(box.selector).addClass("selected")
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


  $("#introtowarsaw a").click(function(event) {        

    event.preventDefault();
    $("#introtowarsaw").fadeOut()

    })

    $("#cover10").click(function(event) {        

    event.preventDefault();
    $("#introtowarsaw").fadeIn()

    })















}); //ready