function doesitexist() {
       $.ajax({
url:'file:///storage/emulated/0/Download/Surah Al-Kahf.mp4',
type:'HEAD',
error: function()
{
    //file not exists
function onConfirm(buttonIndex) {
  if (buttonIndex==1) {
window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

    console.log('file system open: ' + fs.name);

    // Make sure you add the domain name to the Content-Security-Policy <meta> element.
    var url = 'http://cordova.apache.org/static/img/cordova_bot.png';
    // Parameters passed to getFile create a new file or return the file if it already exists.
    fs.root.getFile('Surah Al-Kahf.mp4', { create: true, exclusive: false }, function (fileEntry) {
        download(fileEntry, url, true);

    }, onErrorCreateFile);

}, onErrorLoadFs);  } 
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