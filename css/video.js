function doesitexist() {
       $.ajax({
url:'file:///storage/emulated/0/Download/Surah Al-Kahf.mp4',
type:'HEAD',
error: function()
{
    //file not exists
function onConfirm(buttonIndex) {
  if (buttonIndex==1) {
window.open('https://player.vimeo.com/play/159626069?s=64552532_1493218230_4ae37892f4a4a5032d018738d574732f&loc=external&context=Vimeo%5CController%5CClipController.main&download=1','_system')
  } 
else {
    document.getElementById("vidUrlonline");
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

      