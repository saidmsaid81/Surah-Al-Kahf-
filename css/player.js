function getCordovaPath() {
  var absolutePath = window.location.pathname;
  //14 is length of html file name(including .html) 
  actualPath = absolutePath.substr( path, path.length - 14 );
  return 'file://' + actualPath;
}

function playAudio() {
  //var audioElement = document.getElementById(id);
  //var url = audioElement.getAttribute('src');
  var my_media = new Media(getCordovaPath() + 'beep.mp3',
  // success callback
  function () { console.log("playAudio():Audio Success"); },
  // error callback
  function (err) { console.log("playAudio():Audio Error: " + err); });
  // Play audio
  my_media.play();
}