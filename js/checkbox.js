$("#checkboxi").change(function() {
  if ($(this).is(":checked")){
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    cordova.plugins.notification.local.schedule({
    id: 1,
    title: 'Reminder to recite Suratul Kahf',
    text: 'Tap here to read now',
      firstAt: friday_in_morning,
    every: 10080 // 
    });window.plugins.toast.showLongTop('Successfully enabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
  }
  else 
=======
=======
>>>>>>> parent of b823283... Removed all notifications updates
=======
>>>>>>> parent of b823283... Removed all notifications updates
=======
>>>>>>> parent of b823283... Removed all notifications updates
=======
>>>>>>> parent of b823283... Removed all notifications updates
    javascript:showhide('friday-time');
    
}

else {
  $("#save-fri").prop("disabled",true);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 6804cdf... Used version 0.8 of notification plugin
=======
  localStorage.removeItem("hourVal");
  localStorage.removeItem("minuteVal");
>>>>>>> parent of b823283... Removed all notifications updates
   cordova.plugins.notification.local.cancel(1, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
});
<<<<<<< HEAD
<<<<<<< HEAD
 cordova.plugins.notification.local.on("click", function (notification, state) {
   AdMob.hideBanner(); window.open('pages.html#one');
}, this)
=======

 }
 cordova.plugins.notification.local.on("click", function (notification, state) {
   admob.banner.hide(); window.open('pages.html');
}, this)

>>>>>>> parent of 6804cdf... Used version 0.8 of notification plugin
=======
=======
  localStorage.removeItem("hourVal");
  localStorage.removeItem("minuteVal");
   cordova.plugins.notification.local.cancel(1, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
});
>>>>>>> parent of b823283... Removed all notifications updates
=======
  localStorage.removeItem("hourVal");
  localStorage.removeItem("minuteVal");
   cordova.plugins.notification.local.cancel(1, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
});
>>>>>>> parent of b823283... Removed all notifications updates
=======
  localStorage.removeItem("hourVal");
  localStorage.removeItem("minuteVal");
   cordova.plugins.notification.local.cancel(1, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
});
>>>>>>> parent of b823283... Removed all notifications updates

 }
 

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
});
  $("#checkboxii").change(function() {
  if ($(this).is(":checked")){
    javascript:showhide('thurs-time');
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  else 
=======
  else {
    $("#save-thurs").prop("disabled",true);
>>>>>>> parent of 6804cdf... Used version 0.8 of notification plugin
=======
=======
>>>>>>> parent of b823283... Removed all notifications updates
=======
>>>>>>> parent of b823283... Removed all notifications updates
=======
>>>>>>> parent of b823283... Removed all notifications updates
  else {
    $("#save-thurs").prop("disabled",true);
    localStorage.removeItem("thursHourVal");
  localStorage.removeItem("thursMinuteVal");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of b823283... Removed all notifications updates
   cordova.plugins.notification.local.cancel(2, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
});
<<<<<<< HEAD
<<<<<<< HEAD
 cordova.plugins.notification.local.on("click", function (notification, state) {
   AdMob.hideBanner(); window.open('pages.html#one');
}, this)
=======
 }
  cordova.plugins.notification.local.on("click", function (notification, state) {
        AdMob.hideBanner(); window.open('pages.html');
        }, this);
>>>>>>> parent of 6804cdf... Used version 0.8 of notification plugin
=======
 }
  
>>>>>>> parent of b823283... Removed all notifications updates
=======
   cordova.plugins.notification.local.cancel(2, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
});
 }
  
>>>>>>> parent of b823283... Removed all notifications updates
=======
   cordova.plugins.notification.local.cancel(2, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
});
 }
  
>>>>>>> parent of b823283... Removed all notifications updates
=======
   cordova.plugins.notification.local.cancel(2, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
});
 }
  
>>>>>>> parent of b823283... Removed all notifications updates
});

  $("#checkbox-container :checkbox").on("change", function(){
  
});
var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
var $checkboxes = $("#checkbox-container :checkbox");

$checkboxes.on("change", function(){
  $checkboxes.each(function(){
    checkboxValues[this.id] = this.checked;
  });
  localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
});
$.each(checkboxValues, function(key, value) {
  $("#" + key).prop('checked', value);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
});
=======
});

function setNotificationFriday() {
  cordova.plugins.notification.local.schedule({
    id: 1,
    title: 'Reminder to recite Suratul Kahf',
    text: 'Tap here to read now',
    firstAt: localStorage.getItem("friNotiftime"),
    icon: 'res://icon',
    smallIcon: 'res://ic_popup_reminder',
    every: 10080 // 
    });window.plugins.toast.showLongTop("Successfully Enabled");
  
}

function setNotificationThurs() {
  cordova.plugins.notification.local.schedule({
    id: 2,
    title: 'Reminder to recite Suratul Kahf',
    text: 'Tap here to read now',
    firstAt: localStorage.getItem("thursNotiftime"),
    icon: 'res://icon',
    smallIcon: 'res://ic_popup_reminder',
    every: 10080 // 
    });window.plugins.toast.showLongTop("Successfully Enabled");
  
}
>>>>>>> parent of 6804cdf... Used version 0.8 of notification plugin
=======
});


>>>>>>> parent of b823283... Removed all notifications updates
=======
});


>>>>>>> parent of b823283... Removed all notifications updates
=======
});


>>>>>>> parent of b823283... Removed all notifications updates
=======
});


>>>>>>> parent of b823283... Removed all notifications updates
