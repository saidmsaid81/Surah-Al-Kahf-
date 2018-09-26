//Schedules notification on Friday based on User Input
function setNotificationFriday() {
    var timeSet = $('#time-1').val();
    var hour = timeSet.substring(0, 2);
    var hourInt = parseInt(hour);
    var minute = timeSet.substring(3,5);
    var minuteInt = parseInt(minute);
    document.getElementById('friday-time-set').style.color = 'black';
    document.getElementById('friday-time-set').innerHTML = 'Success! Currently set to Friday at ' + timeSet;

    var friday = new Date();
    friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7 -7);
    var morning =new Date();
    morning.setDate(friday.getDate());
    morning.setHours(hourInt);
    morning.setMinutes(minuteInt);
    morning.setSeconds(0);
    var friday_in_morning = new Date(morning);


  cordova.plugins.notification.local.schedule({
    id: 1,
    title: 'Reminder to recite Suratul Kahf',
    text: 'Tap here to read now',
    trigger:{
    firstAt: friday_in_morning,
    every: "week"
        },
    icon: 'res://icon',
    smallIcon: 'res://ic_stat_small_icon',
    });window.plugins.toast.showLongTop("Successfully Enabled");
    localStorage.setItem("1", "set");


  //When Notification is clicked 
    cordova.plugins.notification.local.on("click", function (notification, state) {
        AdMob.hideBanner(); window.open('pages.html');
    }, this);

  
}

//Schedules Notification on Thursday based on User Input
function setNotificationThurs() {
var thursTimeSet = $('#time-2').val();
var thursHour = thursTimeSet.substring(0, 2);
var thursHourInt = parseInt(thursHour);
var thursMinute = thursTimeSet.substring(3,5);
var thursMinuteInt = parseInt(thursMinute);
document.getElementById('thurs-time-set').style.color = 'black';
document.getElementById('thurs-time-set').innerHTML = 'Success! Currently set to Thursday at ' + thursTimeSet;

var thursday = new Date();
thursday.setDate(thursday.getDate() + (1 + 3 - thursday.getDay()) % 7 - 7);
var night =new Date();
night.setDate(thursday.getDate());
night.setHours(thursHourInt);
night.setMinutes(thursMinuteInt);
night.setSeconds(0);
var thursday_in_night = new Date(night);

  cordova.plugins.notification.local.schedule({
    id: 2,
    title: 'Reminder to recite Suratul Kahf',
    text: 'Tap here to read now',
    trigger:{
    firstAt: thursday_in_night,
    every: "week"
        },
    icon: 'res://icon',
    smallIcon: 'res://ic_stat_small_icon',
    });window.plugins.toast.showLongTop("Successfully Enabled");
    localStorage.setItem("2", "set");

    //When Notification is clicked 
    cordova.plugins.notification.local.on("click", function (notification, state) {
        AdMob.hideBanner(); window.open('pages.html');
    }, this);

}

