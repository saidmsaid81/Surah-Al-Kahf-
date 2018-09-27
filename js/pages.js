document.addEventListener('deviceready', this.onDeviceReady, false);
     function onDeviceReady() {
        AdMob.destroyBannerView();
        tutorialScreen();
        }
  //Invert the quran image to simulate night mode
      if( localStorage.getItem('theme') == 'b' ) {
        $('head').append('<style>img {-webkit-filter: invert(1); filter: invert(1);}</style>');
          }

       //Checks if its the user's first time and displays a tutorial screen
    function tutorialScreen(){
        var tutorial = window.localStorage.getItem("tutorial");
         if(!tutorial){
            window.localStorage.setItem("tutorial", "1");
            $(document).ready(function(){
            setTimeout(function(){
            $('#Info-i').popup();
            $('#Info-i').popup('open');
        },500); // 5000 to load it after 5 seconds from page load
        });
    
    
     }
    
     }
     //end
     function closeTutoriali() {
    $('#Info-i').popup('close');
    };
    function closeTutorialii() {
    $('#Info-ii').popup('close');
    };
    function closeTutorialiii() {
    $('#Info-iii').popup('close');
    };
    function closeTutorialiv() {
    $('#Info-iv').popup('close');
    };

//Display a remind others popup eery Thursday and Friday.
    if(localStorage.getItem("tutorial") == 1) {
    var day= new Date();
	var today= day.getDay();
	switch(today) {
	    case 4:
	    case 5:
	$(document).ready(function(){

		$('#next').remove();
  		$('#skip').remove();
  		displayPopup();
	});
	break;
	   } 

    function displayPopup() {
      if(!sessionStorage.getItem("reminder")) {
    	setTimeout(function(){
	     $('#Info-iii').popup();
	    $('#Info-iii').popup('open');
	   },500);setTimeout(function(){
	     closepopup();
	   },5000); // 5000 to load it after 5 seconds from page load
     sessionStorage.setItem("reminder", "displayed");
   }
    } 
}

    function closepopup() {
	    $('#Info-iii').popup('close');
	};