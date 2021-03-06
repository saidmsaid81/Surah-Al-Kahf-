document.addEventListener('deviceready', this.onDeviceReady, false);

function onDeviceReady() {

  welcomeScreen();
  rateThisApp();
  registerPushNotification();

  var date = new Date();
  var day = date.getDate();

  var update = window.localStorage.getItem("update");
  if (update != day) {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://us-central1-sunnah-assistant.cloudfunctions.net/checkSurahAlKahfUpdate', true)

    request.onload = function () {
      // Begin accessing JSON data here
      if (request.status == 200) {
        document.getElementById("update").style.display = "block"
      }
      window.localStorage.setItem("update", day);
    }
    // Send request
    request.send()
  }
}


//Shows a rate this app dialog
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
      handleNegativeFeedback: function () {
        window.open('mailto:thesunnahrevival.tsr@gmail.com?&subject=Surah%20Al%20Kahf%20App&body=**Please%20write%20your%20feedback%20here%20in%20English**%0A%0ASent%20from%3A%0ASurah%20Al%20Kahf%20Android%20App%20Vesion%203.0.2', '_system');
      },
      onRateDialogShow: function (callback) {
        callback(1); // cause immediate click on 'Rate Now' button
      },
      onButtonClicked: function (buttonIndex) {
        if (buttonIndex == 2) {
          if (!sessionStorage.getItem("buttonIndex")) {
            sessionStorage.setItem("buttonIndex", 1);
          } else {
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

document.addEventListener("backbutton", function (e) {
  e.preventDefault();
  navigator.notification.confirm("Are you sure want to exit from App?", onConfirmExit, "Confirmation", "Yes,No");
}, false);


function onConfirmExit(button) {
  if (button == 2) { //If User select a No, then return back;
    return;
  } else {
    navigator.app.exitApp(); // If user select a Yes, quit from the app.
  }
}

function registerPushNotification() {
  var notificationOpenedCallback = function (jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("b8354c06-8d64-43a3-a893-5da7a98ff689")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
}