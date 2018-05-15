var friday = new Date();
friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7);
var morning =new Date();
morning.setDate(friday.getDate());
morning.setHours(localStorage.getItem("hourVal"));
morning.setMinutes(localStorage.getItem("minuteVal"));
morning.setSeconds(0);
var friday_in_morning = new Date(morning);
		


var thursday = new Date();
thursday.setDate(thursday.getDate() + (1 + 3 - thursday.getDay()) % 7);
var night =new Date();
night.setDate(thursday.getDate());
night.setHours(localStorage.getItem("thursHourVal"));
night.setMinutes(localStorage.getItem("thursMinuteVal"));
night.setSeconds(0);
var thursday_in_night = new Date(night);

function setNotificationFriday() {
cordova.plugins.notification.local.schedule({
    id: 1,
    title: 'Reminder to recite Suratul Kahf',
    text: 'Tap here to read now',
    firstAt: friday_in_morning,
    every: 10080 // 
    });window.plugins.toast.showLongTop('Successfully enabled');
  
 cordova.plugins.notification.local.on("click", function (notification, state) {
   AdMob.hideBanner(); window.open('pages.html');
}, this);
}
        
 function setNotificationThurs() {
cordova.plugins.notification.local.schedule({
    id: 2,
    title: 'Reminder to recite Suratul Kahf',
    text: 'Tap here to read now',
      firstAt: thursday_in_night,
    every: 10080 // 
    });window.plugins.toast.showLongTop('Successfully enabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
  }
  
 cordova.plugins.notification.local.on("click", function (notification, state) {
   AdMob.hideBanner(); window.open('pages.html');
}, this);
