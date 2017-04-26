function doesitexist() {
       $.ajax({
url:'file:///storage/emulated/0/Download/Surah Al-Kahf.mp4',
type:'HEAD',
error: function()
{
    //file not exists
function onConfirm(buttonIndex) {
  if (buttonIndex==1) {
fileTransfer.download()
  } 
else {
     playVideo(document.getElementById("vidUrlonline").value);
  }
    
}
navigator.notification.confirm(
    'Would you like to download the file so as its available offline next time or Just play without downloading?', // message
     onConfirm,            // callback to invoke with index of button pressed
    'Download/Play',           // title
    ['Download','Play without downloading']     // buttonLabels
);
},
success: function()
{
    //file exists
playVideo(document.getElementById("vidUrl").value);
}
});}

       var fileTransfer = new FileTransfer();
 var url = 'http://cordova.apache.org/static/img/cordova_bot.png';
 var filePath ='file:///storage/emulated/0/Download/'+fileName 
fileTransfer.download(
    url,
    filePath,
    function(entry) {
        console.log("download complete: " + entry.fullPath);
    },
    function(error) {
        console.log("download error source " + error.source);
        console.log("download error target " + error.target);
        console.log("upload error code" + error.code);
    }
);