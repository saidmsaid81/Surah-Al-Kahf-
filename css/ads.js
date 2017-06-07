 var admobid = {};
if ( /(android)/i.test(navigator.userAgent) ) {  // for android & amazon-fireos 
  admobid = {
    banner: 'ca-app-pub-6981212130280607/8129501976',
    interstitial: 'ca-app-pub-6981212130280607/9606235175',
  };
} else if ( /(ipod|iphone|ipad)/i.test(navigator.userAgent) ) {  // for ios 
  admobid = {
    banner: 'ca-app-pub-6981212130280607/8129501976',
    interstitial: 'ca-app-pub-6981212130280607/9606235175',
  };
} else {  // for windows phone 
  admobid = {
    banner: 'ca-app-pub-6981212130280607/8129501976',
    interstitial: 'ca-app-pub-6981212130280607/9606235175',
  };
};

AdMob.setOptions({
  publisherId: admobid.banner,
  interstitialAdId: admobid.interstitial,
  bannerAtTop: false,  // set to true, to put banner at top 
  overlap: true,  // set to true, to allow banner overlap webview 
  offsetTopBar: false,  // set to true to avoid ios7 status bar overlap 
  isTesting: false,  // receiving test ad 
  autoShow: false,  // auto show interstitial ad when loaded 
});





