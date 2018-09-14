var admobid = {
  banner: 'ca-app-pub-6981212130280607/2899891177',
    interstitial: 'ca-app-pub-6981212130280607/4376624370',
 };

document.addEventListener('deviceready', this.onDeviceReady, false);
     function onDeviceReady() {
        admob.banner.config({
        id: admobid.banner,
        isTesting: true,
        autoShow: true,
          })
        admob.banner.prepare()
        AdMob.createBannerView();
        welcomeScreen();
        AppRate.preferences = {
        displayAppName: 'Surah Al Kahf App',
        usesUntilPrompt: 10,
        promptAgainForEachNewVersion: true,
        inAppReview: true,
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
            callback(1) // cause immediate click on 'Rate Now' button
          },
          onButtonClicked: function(buttonIndex){
            console.log("onButtonClicked -> " + buttonIndex);
          }
        }
      };

      AppRate.promptForRating(false);
      //Test
      admob.rewardVideo.load({
      id: {
      // replace with your ad unit IDs
      android: 'ca-app-pub-6981212130280607/2917118378',
      },
    }).then(() => admob.rewardVideo.show());

        
     }

    