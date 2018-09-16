//Add ayah images to trans.html
function addImages() {
    var i, allImages ="";
    //Loop through all ayah images
    for (i = 1; i<=110; i++) {
        allImages += "<img class='center fit' src='images/18_" + i + ".png'/><strong><p class='ayah'></p></strong><br>";
    }
    //Adds allImages to <div id="trans-container"/>
    document.getElementById("trans-container").innerHTML = allImages;

    //Sets ID of all <p> 
    var idCount = 1;
    $('p').each(function() {
    $(this).attr('id', 'ayah' + idCount);
    idCount++;
    });
}
addImages();

//Loads content according to the language which is passed as a parameter
function loadContent(trans) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", trans , true); //Open the xml file
xhttp.send();

function myFunction(xml) {
    var x, i, xmlDoc, txt, id;
    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName('aya'); //Get all 'aya' tags in xml file
    //Loop through the tags and store them in var txt
    for (i = 1 ; i <x.length; i++) {
        id = "ayah" + i;
        txt = "<br>\n["+ x[i].getAttribute('index') + "] " + x[i].getAttribute('text');
        document.getElementById(id).innerHTML += txt
    }  
    }
};

function addArabicVerse() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    getTheAyah(this);
      
    }
};
xhttp.open("GET", "Trans/quran-uthmani.xml" , true); //Open the xml file
xhttp.send();

function getTheAyah(xml) {
    var x, i,j, xmlDoc, ayah = [];
    xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName('sura')[17]; //Get Suratul Kahf in xml file
    for (j = 0 ; j <110; j++) {
        i = x.getElementsByTagName('aya')[j];
        ayah[j] = "["+ i.getAttribute('index') + "] " + i.getAttribute('text');
    }
    var number = 0;
    $('img').each(function() {
    $(this).attr('alt', ayah[number]);
    number++;
    });

}
}

addArabicVerse();

$(document).on("pagecreate","#kahf-translations",function(){ 
    $(".ayah").on("taphold",function(){

    var id  = $(this).attr('id');
    var ayahNumber = id.substring(4);
    var ayahNumberInt =parseInt(ayahNumber) - 1;
    var allAyahs = document.querySelectorAll("img");
    var fullAyah = allAyahs[ayahNumberInt].alt + "\n" + $("#" + id).text() + "\n\nSent from Surah Al Kahf App\nHave a look at Surah Al Kahf App Link:";
    window.plugins.socialsharing.share(fullAyah, null, null, 'http://bit.ly/kahfapp');

    });  
}); 

