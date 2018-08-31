function setNotification() {
    var timeSet = $('#time-1').val();
    var hour = timeSet.substring(0, 2);
    var hourInt = parseInt(hour);
    var minute = timeSet.substring(3,5);
    var minuteInt = parseInt(minute);
    document.getElementById('night-time-set').style.color = 'black';
    document.getElementById('night-time-set').innerHTML = 'Success! Currently set to Every Thursday Night at ' + timeSet;

    


  cordova.plugins.notification.local.schedule({
    id: 1,
    title: 'Reminder to recite Suratul Kahf',
    text: 'Tap here to read now',
    trigger:{
        every: {
                    hour: hourInt,
                    minute: minuteInt
                }
        },
    icon: 'res://icon',
    smallIcon: 'res://ic_popup_reminder',
    });window.plugins.toast.showLongTop("Successfully Enabled");
  
}

  function setNotificationFriday() {
    var timeSet = $('#time-2').val();
    var hour = timeSet.substring(0, 2);
    var hourInt = parseInt(hour);
    var minute = timeSet.substring(3,5);
    var minuteInt = parseInt(minute);
    document.getElementById('day-time-set').style.color = 'black';
    document.getElementById('day-time-set').innerHTML = 'Success! Currently set to Every Friday at ' + timeSet;

    


  cordova.plugins.notification.local.schedule({
    id: 2,
    title: 'Reminder to recite Suratul Kahf',
    text: 'Tap here to read now',
    trigger:{
        every: {
                    hour: hourInt,
                    minute: minuteInt
                }
        },
    icon: 'res://icon',
    smallIcon: 'res://ic_popup_reminder',
    });window.plugins.toast.showLongTop("Successfully Enabled");
  
}


  
  cordova.plugins.notification.local.on("click", function (notification, state) {
        AdMob.hideBanner(); window.open('pages.html');
        }, this);


        
  

        

  
        
       
    

