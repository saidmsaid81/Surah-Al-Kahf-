$("#checkboxi").change(function() {
  if ($(this).is(":checked")){
    javascript:showhide('friday-time');
    
}

else {
  $("#save-fri").prop("disabled",true);
  localStorage.removeItem("hourVal");
  localStorage.removeItem("minuteVal");
   cordova.plugins.notification.local.cancel(1, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
});

 }
 

});
  $("#checkboxii").change(function() {
  if ($(this).is(":checked")){
    javascript:showhide('thurs-time');
  }
  else {
    $("#save-thurs").prop("disabled",true);
    localStorage.removeItem("thursHourVal");
  localStorage.removeItem("thursMinuteVal");
   cordova.plugins.notification.local.cancel(2, function() {
   window.plugins.toast.showLongTop("Successfully Disabled");
});
 }
  
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


