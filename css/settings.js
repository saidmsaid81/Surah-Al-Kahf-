var success = "is successfully set as your default translation";
$(function () {
    $(':radio').change(function () {
        if ($(this).prop('checked', true)) {
            switch($(this).attr('id')) {

                    case 'en-sahih':
                    loadContent("Trans/en.sahih.xml"); localStorage.setItem('lang', 'Trans/en.sahih.xml');window.plugins.toast.showLongBottom('id' + str);

            break;

            case 'en-khan':
                    loadContent("Trans/en.hilali.xml");localStorage.setItem('lang', 'Trans/en.hilali.xml');window.plugins.toast.showLongBottom(id + str);

            break;
            case 'ar-muyassar':
                    loadContent("Trans/ar.muyassar.xml");localStorage.setItem('lang', 'Trans/ar.muyassar.xml');

            break;

            case 'french':
                    loadContent("Trans/fr.hamidullah.xml");localStorage.setItem('lang', 'Trans/fr.hamidullah.xml');

            break;

            case 'german':
                    loadContent("Trans/de.bubenheim.xml");localStorage.setItem('lang', 'Trans/de.bubenheim.xml');

            break;
            case 'hausa':
                    loadContent("Trans/ha.gumi.xml");localStorage.setItem('lang', 'Trans/ha.gumi.xml');

            break;
            case 'hindi':
                    loadContent("Trans/hi.hindi.xml");localStorage.setItem('lang', 'Trans/hi.hindi.xml');

            break;
            case 'indonesia':
                    loadContent("Trans/id.indonesian.xml");localStorage.setItem('lang', 'Trans/id.indonesian.xml');

            break;
            case 'malay':
                    loadContent("Trans/ms.basmeih.xml");localStorage.setItem('lang', 'Trans/ms.basmeih.xml');

            break;
            case 'malayalam':
                    loadContent("Trans/ml.abdulhameed.xml");localStorage.setItem('lang', 'Trans/ml.abdulhameed.xml');

            break;
            case 'norsk':
                    loadContent("Trans/no.berg.xml");localStorage.setItem('lang', 'Trans/no.berg.xml');

            break;
            case 'somali':
                    loadContent("Trans/so.abduh.xml");localStorage.setItem('lang', 'Trans/so.abduh.xml');

            break;
            case 'spanish':
                    loadContent("Trans/es.garcia.xml");localStorage.setItem('lang', 'Trans/es.garcia.xml');

            break;
            case 'russian':
                    loadContent("Trans/ru.kuliev.xml");localStorage.setItem('lang', 'Trans/ru.kuliev.xml');

            break;
            case 'swahili':
                    loadContent("Trans/sw.barwani.xml");localStorage.setItem('lang', 'Trans/sw.barwani.xml');

            break;
            case 'tamil':
                    loadContent("Trans/ta.tamil.xml");localStorage.setItem('lang', 'Trans/ta.tamil.xml');

            break;
            case 'urdu':
                    loadContent("Trans/ur.junagarhi.xml");localStorage.setItem('lang', 'Trans/ur.junagarhi.xml');

            break;


            }
            

            
        } 
    });
});



$("#radio-container :radio").on("change", function(){
  
});
var radioValues = JSON.parse(localStorage.getItem('radioValues')) || {};
var $radio = $("#radio-container :radio");

$radio.on("change", function(){
  $radio.each(function(){
    radioValues[this.id] = this.checked;
  });
  localStorage.setItem("radioValues", JSON.stringify(radioValues));
});
$.each(radioValues, function(key, value) {
  $("#" + key).prop('checked', value);
});
