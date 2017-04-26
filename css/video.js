function doesitexist() {
       $.ajax({
url:'file:///storage/emulated/0/Download/Surah Al-Kahf.mp4',
type:'HEAD',
error: function()
{
    //file not exists
function onConfirm(buttonIndex) {
  if (buttonIndex==1) {
window.open('https://www.dropbox.com/s/ttsk9m2ttb8idsl/Surah%20Al-Kahf.mp4?dl=1','_system')
  } 
else {
    playVideo(document.getElementById("vidUrlonline").value);
  }
    
}
navigator.notification.confirm(
    'Would you like to download the file so as its available offline next time or Just play without downloading?', // message
     onConfirm,            // callback to invoke with index of button pressed
    'Download/Play (Abdurrahman As-Sudais',           // title
    ['Download','Play without downloading']     // buttonLabels
);
},
success: function()
{
    //file exists
playVideo(document.getElementById("vidUrl").value);
}
});}

      