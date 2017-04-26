function doesitexist() {
       $.ajax({
url:'file:///storage/emulated/0/Download/Surah Al-Kahf.mp4',
type:'HEAD',
error: function()
{
    //file not exists
function onConfirm(buttonIndex) {
  switch(buttonIndex) {
    case 1:
    window.open('https://player.vimeo.com/play/159626069?s=64552532_1493206655_14cb47caa3c50a5f7b774b336d18bc83&loc=external&context=Vimeo%5CController%5CClipController.main&download=1','_blank')
  break;
  case 2 :
  window.open('https://player.vimeo.com/video/64552532')
break;
default:

  }
  
    

  } 
    
}}

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