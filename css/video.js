function doesitexist() {
       $.ajax({
url:'file:///storage/emulated/0/Download/Surah Al-Kahf.mp4',
type:'HEAD',
error: function()
{
    //file not exists
function onConfirm(buttonIndex) {
  if (buttonIndex==1) {
var downloadUrl = encodeURI(cordova.file.dataDirectory + fileName);
var hostUrl = encodeURI("https://player.vimeo.com/play/159626069?s=64552532_1493212329_848f2ba4bab4943bb2a528d9ad04bc93&loc=external&context=Vimeo%5CController%5CClipController.main&download=1"); 
var fileTransfer = new FileTransfer();
fileTransfer.download(
    hostUrl,
    downloadUrl,
    function(entry) {
        alert('Your download has completed.');
    },
    function(error) {
        alert(error.source);
    },
    false,
    {
        headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
        }
    }
);  } 
else {
     playVideo(document.getElementById("vidUrlonline").value);
  }
    
}
navigator.notification.confirm(
    'Would you like to download the file so as its available offline next time or Just play without downloading?', // message
     onConfirm,            // callback to invoke with index of button pressed
    'Download/Play(Experimental Feature)',           // title
    ['Download','just play without downloading']     // buttonLabels
);
},
success: function()
{
    //file exists
playVideo(document.getElementById("vidUrl").value);
}
});}