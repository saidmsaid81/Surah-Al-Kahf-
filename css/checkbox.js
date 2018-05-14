$("#checkboxi").change(function() {
  if ($(this).is(":checked")){
    javascript:showhide('friday-time');
    
}

else {
  $("#save-fri").prop("disabled",true);
   cordova.plugins.notification.local.cancel(1, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
});

 }
 cordova.plugins.notification.local.on("click", function (notification, state) {
   admob.banner.hide(); window.open('pages.html');
}, this)

});
  $("#checkboxii").change(function() {
  if ($(this).is(":checked")){
    javascript:showhide('thurs-time');
  }
  else {
    $("#save-thurs").prop("disabled",true);
    document.getElementById("thurs-time-set").innerHTML="Currently Disabled Check the box to enable";
   cordova.plugins.notification.local.cancel(2, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
});
 }
  cordova.plugins.notification.local.on("click", function (notification, state) {
        AdMob.hideBanner(); window.open('pages.html');
        }, this);
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
