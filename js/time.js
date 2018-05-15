function updateFridayTime() {
var friday = new Date();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7);
var morning =new Date()
    morning.setDate(friday.getDate());
    morning.setHours(8);
    morning.setMinutes(0);
    morning.setSeconds(0);
    var friday_in_morning = new Date(morning);

    var thursday = new Date();
        thursday.setDate(thursday.getDate() + (1 + 3 - thursday.getDay()) % 7);
var night =new Date()
        night.setDate(thursday.getDate());
        night.setHours(20);
        night.setMinutes(0);
        night.setSeconds(0);
        var thursday_in_night = new Date(night);
=======
		friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7);
var morning =new Date();
		morning.setDate(friday.getDate());
		morning.setHours(localStorage.getItem("hourVal"));
		morning.setMinutes(localStorage.getItem("minuteVal"));
		morning.setSeconds(0);
		var friday_in_morning = new Date(morning);
		localStorage.setItem("friNotiftime", friday_in_morning);
}
function updateThursTime() {	
		var thursday = new Date();
        thursday.setDate(thursday.getDate() + (1 + 3 - thursday.getDay()) % 7);
		var night =new Date();
        night.setDate(thursday.getDate());
        night.setHours(localStorage.getItem("thursHourVal"));
        night.setMinutes(localStorage.getItem("thursMinuteVal"));
        night.setSeconds(0);
        var thursday_in_night = new Date(night);
        localStorage.setItem("thursNotiftime", thursday_in_night)
    }
>>>>>>> parent of 6804cdf... Used version 0.8 of notification plugin
=======
friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7);
var morning =new Date();
morning.setDate(friday.getDate());
morning.setHours(localStorage.getItem("hourVal"));
morning.setMinutes(localStorage.getItem("minuteVal"));
morning.setSeconds(0);
var friday_in_morning = new Date(morning);
		

=======
friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7);
var morning =new Date();
morning.setDate(friday.getDate());
morning.setHours(localStorage.getItem("hourVal"));
morning.setMinutes(localStorage.getItem("minuteVal"));
morning.setSeconds(0);
var friday_in_morning = new Date(morning);
		

>>>>>>> parent of b823283... Removed all notifications updates
=======
friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7);
var morning =new Date();
morning.setDate(friday.getDate());
morning.setHours(localStorage.getItem("hourVal"));
morning.setMinutes(localStorage.getItem("minuteVal"));
morning.setSeconds(0);
var friday_in_morning = new Date(morning);
		

>>>>>>> parent of b823283... Removed all notifications updates
=======
friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7);
var morning =new Date();
morning.setDate(friday.getDate());
morning.setHours(localStorage.getItem("hourVal"));
morning.setMinutes(localStorage.getItem("minuteVal"));
morning.setSeconds(0);
var friday_in_morning = new Date(morning);
		

>>>>>>> parent of b823283... Removed all notifications updates

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of b823283... Removed all notifications updates
=======
>>>>>>> parent of b823283... Removed all notifications updates
=======
>>>>>>> parent of b823283... Removed all notifications updates
=======
>>>>>>> parent of b823283... Removed all notifications updates
