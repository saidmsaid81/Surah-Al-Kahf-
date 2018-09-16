var admobid = {
  banner: 'ca-app-pub-6981212130280607/2899891177',
 };

document.addEventListener('deviceready', this.onDeviceReady, false);
     function onDeviceReady() {
        admob.banner.config({
        id: admobid.banner,
        isTesting: true,
        autoShow: true,
          })
        if (localStorage.getItem("welcome205") == 1){
        admob.banner.prepare()
        AdMob.createBannerView();
      }
        welcomeScreen();
        rateThisApp();
         
     }

    function rateThisApp() {
      if (!localStorage.getItem("counter")) {
        localStorage.setItem("counter", 0);
      }
      AppRate.preferences = {
        displayAppName: 'Surah Al Kahf App',
        promptAgainForEachNewVersion: true,
        storeAppURL: {
          android: 'market://details?id=com.ihyausunnah.surahalkahf',
        },
        customLocale: {
          title: "Would you mind rating %@?",
          message: "It won’t take more than a minute and helps to promote our app. Thanks for your support!",
          cancelButtonLabel: "No, Thanks",
          laterButtonLabel: "Remind Me Later",
          rateButtonLabel: "Rate It Now",
          yesButtonLabel: "Yes!",
          noButtonLabel: "Not really",
          appRatePromptTitle: 'Do you like using %@',
          feedbackPromptTitle: 'Would you mind providing us feedback?',
        },
        callbacks: {
          handleNegativeFeedback: function(){
            window.open('mailto:thesunnahrevival.tsr@gmail.com?&subject=Surah%20Al%20Kahf%20App&body=**Please%20write%20your%20feedback%20here%20in%20English**%0A%0ASent%20from%3A%0ASurah%20Al%20Kahf%20Android%20App%20Vesion%203.0.0','_system');
          },
          onRateDialogShow: function(callback){
            callback(1); // cause immediate click on 'Rate Now' button
          },
          onButtonClicked: function(buttonIndex){
            if (buttonIndex == 2) {
              if (!sessionStorage.getItem("buttonIndex")) {
                sessionStorage.setItem("buttonIndex", 1);
              }
              else {
                localStorage.removeItem("counter");
              }
            }
          }
        }
      };

      incrementCounter = parseInt(localStorage.getItem("counter")) + 1;
      localStorage.setItem("counter", incrementCounter);
      if (parseInt(localStorage.getItem("counter")) == 10) {
         AppRate.promptForRating(); 
      }
    }