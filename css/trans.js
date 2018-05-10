//Loads content according to the language which is passed as a parameter
function loadContent(trans) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", trans , true);
xhttp.send();

function myFunction(xml) {
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName('aya');
    for (i = 1 ; i <x.length; i++) {
        txt += "<img class='center fit' src='images/18_" + i + ".png'/><br><strong>["+ x[i].getAttribute('index') + "] " + x[i].getAttribute('text') + "<br></strong>";
    }
    
    document.getElementById("demo").innerHTML = txt;

    
    }
};

 if( ! localStorage.getItem( "transRanOnce" ) ) {
   $(document).ready(function(){
   setTimeout(function(){
     $('#info').popup();
    $('#info').popup('open');
   },500);

   setTimeout(function(){
     closepopup()
   },5000); // 5000 to load it after 5 seconds from page load
});
    
function closepopup() {
    $('#info').popup('close');
    localStorage.setItem( "transRanOnce", true );
    
}
};


