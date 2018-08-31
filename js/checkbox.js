$("#checkboxi").change(function() {
  if ($(this).is(":checked")){
    javascript:showhide('friday-time');
    
}

else {
  document.getElementById('friday-time').style.display = "none";
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
    document.getElementById('thurs-time').style.display = "none";
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
