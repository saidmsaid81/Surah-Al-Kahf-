var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "en.hilali.xml", true);
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

