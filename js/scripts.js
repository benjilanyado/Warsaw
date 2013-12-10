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
	lightboxCurrent1 = 0;
	$(".downbutton1").fadeIn()
	$(".backtotop1").fadeOut()
    $(".upbutton1").fadeOut()
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

    ///SLIDE 5


var names = [
    {
        selector: '#who1',
        selector2: '.mapplace1',
        headline: 'Simon Tenenbaum',
        copy: "Simon (Szymon) Tenenbaum was a world respected entomologist, whose insect collection was kept in the zoo during the war for safe keeping. He died in the ghetto in June 1941. After the war his wife, Lonia, donated the collection to the State Zoological Museum of Poland. Simon Tenenbaum is buried in Warsaw’s Jewish cemetery.",
        address: "",
        content: '<img src="images/simon.jpg">'
    },

    {
        selector: '#who2',
        headline: 'Jan and Antonina Zabinski',
        selector2: '.mapplace2',
        copy: 'Jan Zabinski was the director of the Warsaw Zoo from 1928. He improved it’s facilities and increased the number of animals on display considerably. During the war he and his wife Antonina used the empty animal shelters and the basement of their own villa, to hide about 300 Jews.',
        content: '<img src="images/zabinski.jpg">',
        address: ''
    },

    {
        selector: '#who3',
        headline: 'Shlomo and Otto',
        selector2: '.mapplace2',
        copy: 'Shlomo and Otto are fictional characters. Shlomo is an amalgam of many of the characters I have met in books I have read about the time. Otto’s character started off as totally fictional, but the more I read about zoo life before and during the war the more real he seemed to become! ',
        content: '<img src="images/shlomo.jpg">',
        address: ''
    },

    {
        selector: '#who4',
        headline: 'Lutz Heck and Ziegler',
        selector2: '.mapplace2',
        copy: 'Lutz  Heck was the director of  Berlin Zoo . Along with his brother Heinz he set out to  recreate an extinct bread of cattle by selectively breeding carefully chosen specimens. With the encouragement and support of Herman Goering, a prominent Nazi, he saught to cleanse the cattle population of Europe in the same way that Hitler was “purifying”  Europe’s humans. ',
        content: '<img src="images/lutz.jpg">',
        address: ''
    },

    {
        selector: '#who5',
        headline: 'Janusz Korczak ',
        selector2: '.mapplace2',
        copy: 'Janusz Korczak was the founder and principle of two orphanages in Warsaw. He was a doctor, writer and educator who devoted his life to the welfare and education of children. Although he was offered safe passage out of the ghetto he refused to abandon the orphans in his care and stayed with them all the way to the death camps of Treblinka. His many publications are still widely read throughout the world.',
        content: '<img src="images/janus.jpg">',
        address: ''
    },

    {
        selector: '#who6',
        headline: 'Stefan Zabinski & Marcus Tenenbaum',
        selector2: '.mapplace2',
        copy: 'Stefan Zabinski and Marcus Tenenbaum are fictional characters. The Zabinskis real son was Ryszard who was four at the beginning of the war. For the story in my book to work Stefan had to be twelve. The Tenenbaums had a daughter Irena – I created Marcus, a twelve year old Jewish boy, to be Stefan’s friend. Although fictitious, this friendship symbolises the historical bond between Jews and non-Jews in Poland and is the central relationship in the book',
        content: '<img src="images/boys.jpg">',
        address: ''
    },

    {
        selector: '#who7',
        headline: ' Wladyslaw Szpilman ',
        selector2: '.mapplace2',
        copy: 'Before the war Wladyslaw Spilman was a renowned Polish pianist who  regularly performed on national radio.  When the ghetto was established he continued to entertain people in cafés and restaurants and, after the war, was the only surviving member of his family. His war time experiences  were chronicled in his book “The Pianist” which was made into  a successful film in 2002.',
        content: '<img src="images/spilman.jpg">',
        address: ''
    },

    {
        selector: '#who8',
        headline: 'Adolf Hitler',
        selector2: '.mapplace2',
        copy: 'German Chancellor from 1933-45 and leader of the National Socialist German Workers, or NAZI , Party.',
        content: '<img src="images/adolf.jpg">',
        address: ''
    },

    {
        selector: '#who10',
        headline: 'Reinhard Heydrich',
        selector2: '.mapplace2',
        copy: 'Leading NAZI and eventual head of the Gestapo (Hitler’s special police force) and is generally considered to be the mastermind behind the “Final Solution” to annihilate Europe’s Jews.',
        content: '<img src="images/heyd.jpg">',
        address: ''
    },

    {
        selector: '#who9',
        headline: 'Warsaw Zoo',
        selector2: '.mapplace2',
        copy: 'In pre-war Warsaw the zoo was one the largest in Europe and the city’s most popular visitor attraction. Although it was almost completely destroyed during the war, it was rebuilt and is now even more popular.',
        content: '<img src="images/zoo.jpg">',
        address: ''
    },

    {
        selector: '#who11',
        headline: 'Hans Frank',
        selector2: '.mapplace2',
        copy: 'Governor General of Occupied Poland ',
        content: '<img src="images/frank.jpg">',
        address: ''
    },

    {
        selector: '#who12',
        headline: 'Friedrich Krüger',
        selector2: '.mapplace2',
        copy: 'Police Leader in the General Government of Occupied Poland ',
        content: '<img src="images/kruger.jpg">',
        address: ''
    },

    {
        selector: '#who13',
        headline: 'Heinrich Himmler',
        selector2: '.mapplace2',
        copy: 'Appointed head of the SS in 1929 and was responsible for organising and implementing the NAZI policy of genocide based on racial purity.',
        content: '<img src="images/himmler.jpg">',
        address: ''
    },

    {
        selector: '#who14',
        headline: 'Kasia and Tuzinka',
        selector2: '.mapplace2',
        copy: 'Kasia, one of the Zoo’s African elephants, gave birth to Tuzinka in April 1937. At that time she was only the twelfth elephant ever to be born in captivity – hence her name (tuzin is Polish for dozen).',
        content: '<img src="images/elephants.jpg">',
        address: ''
    }

   ]

    function processPlaceClickNames(name) {

    $("#buttons").fadeOut();
    $(".dayofweek").fadeOut();
    $("#tooltip1").fadeOut();
    $("#lightbox1").fadeIn(function(event){      
      $("#content1").html(name.content);
      $("#copyheader1").html(name.headline)
      $("#copy1").html(name.copy)
      $("#address").html(name.address)
    });

 }

 $.each(names, function(i, name) {
        $(name.selector).on('click', function(e){
            e.preventDefault();
            processPlaceClickNames(name);
            $(".who").removeClass("selectedname")
            $(name.selector).addClass("selectedname")
        });
    });


  $("#close").click(function(event) {        

    event.preventDefault();


    $("#lightbox1").fadeOut(function(event){
       $("#buttons").fadeIn();
      $("#content").html('');
      $("#copyheader").html('');
      $("#copy").html('');
      $("#address").html('')
       $(".dayofweek").fadeIn();


    })
  });


// SLIDE5 /////



var verticalimages5 = [ "0px", "-627px", "-1254px", "-1881px", "-2508px", "-3135px", "-3762px", "-4389px", "-5016px", "-5643px", "-6265px", "-6892px", "-7519px"];
var lightboxCurrent5 = 0;
function downclick5() {
    lightboxCurrent5 += 1
    $(".verticalslidewrapper5").animate({"top": verticalimages5[lightboxCurrent5]}, 1000)
    $(".upbutton5").fadeIn()
    $(".backtotop5").fadeIn()
    if (lightboxCurrent5==(verticalimages5.length - 1)) {
        $(".downbutton5").fadeOut()
        $(".upbutton5").fadeIn()
    }
}

function upclick5() {
    lightboxCurrent5 -= 1
    $(".verticalslidewrapper5").animate({"top": verticalimages5[lightboxCurrent5]}, 1000)
    $(".downbutton5").fadeIn()
    if (lightboxCurrent5==(verticalimages5.length - 13)) {  //NB  "-5" needs to be whatever length of array is
        $(".upbutton5").fadeOut()
        $(".backtotop5").fadeOut()
    }
}

$(".downbutton5").click(function(event) {      
    event.preventDefault();
    downclick5()
});

$(".upbutton5").click(function(event) {     
    event.preventDefault();
    upclick5()
});

$(".backtotop5").click(function(event) {    
    event.preventDefault();
    $(".verticalslidewrapper5").animate({"top": "0px"}, 1000)
    lightboxCurrent5 = 0;
    $(".downbutton5").fadeIn()
    $(".backtotop5").fadeOut()
    $(".upbutton5").fadeOut()
});


// SLIDE 6

var verticalimages6 = [ "0px", "-627px", "-1254px", "-1881px", "-2508px"];
var lightboxCurrent6 = 0;
function downclick6() {
    lightboxCurrent6 += 1
    $(".verticalslidewrapper6").animate({"top": verticalimages6[lightboxCurrent6]}, 1000)
    $(".upbutton6").fadeIn()
    $(".backtotop6").fadeIn()
    if (lightboxCurrent6==(verticalimages6.length - 1)) {
        $(".downbutton6").fadeOut()
        $(".upbutton6").fadeIn()
    }
}

function upclick6() {
    lightboxCurrent6 -= 1
    $(".verticalslidewrapper6").animate({"top": verticalimages6[lightboxCurrent6]}, 1000)
    $(".downbutton6").fadeIn()
    if (lightboxCurrent6==(verticalimages6.length - 5)) {  //NB  "-5" needs to be whatever length of array is
        $(".upbutton6").fadeOut()
        $(".backtotop6").fadeOut()
    }
}

$(".downbutton6").click(function(event) {      
    event.preventDefault();
    downclick6()
});

$(".upbutton6").click(function(event) {     
    event.preventDefault();
    upclick6()
});

$(".backtotop6").click(function(event) {    
    event.preventDefault();
    $(".verticalslidewrapper6").animate({"top": "0px"}, 1000)
    lightboxCurrent6 = 0;
    $(".downbutton6").fadeIn()
    $(".backtotop6").fadeOut()
    $(".upbutton6").fadeOut()
});













}); //ready