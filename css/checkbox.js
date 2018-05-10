 $("#checkboxi").change(function() {
  if ($(this).is(":checked")){
    javascript:showhide('friday-time');
    
}

else 
   cordova.plugins.notification.local.cancel(1, function() {
   window.plugins.toast.showLongTop('Successfully Disabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
});
 cordova.plugins.notification.local.on("click", function (notification, state) {
   AdMob.hideBanner(); window.open('pages.html#one');
}, this)

});
  $("#checkboxii").change(function() {
  if ($(this).is(":checked")){
    javascript:showhide('thurs-time');
  }
  else 
   cordova.plugins.notification.local.cancel(2, function() {
   window.plugins.toast.showLongTop('Successfully Disabled', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)})
});
 cordova.plugins.notification.local.on("click", function (notification, state) {
   AdMob.hideBanner(); window.open('pages.html#one');
}, this)
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
      firstAt: friday_in_morning,
    every: 10080 // 
    });window.plugins.toast.showLongBottom("Successfully Enabled");
  
}

function setNotificationThurs() {
  cordova.plugins.notification.local.schedule({
    id: 2,
    title: 'Reminder to recite Suratul Kahf',
    text: 'Tap here to read now',
      firstAt: thursday_in_night,
    every: 10080 // 
    });window.plugins.toast.showLongBottom("Successfully Enabled");
  
}