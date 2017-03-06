/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
	var friday = new Date();
		friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7);
var morning =new Date()
		morning.setDate(friday.getDate());
		morning.setHours(8);
		morning.setMinutes(0);
		morning.setSeconds(0);
		var friday_in_morning = new Date(morning);

		cordova.plugins.notification.local.schedule({
		id: 1,
		title: "Have you read Surah Al Kahf",
		text: "Tap here to read now",
	
		firstAt: friday_in_morning,
		every: 1440 // "minute", "hour", "week", "month", "year"
		
		});	
		
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
	initAd() ;
	showBannerFunc();
	showInterstitialFunc();
        console.log('Received Event: ' + id);
    }
};
//initialize the goodies 
function initAd(){
        if ( window.plugins && window.plugins.AdMob ) {
            var ad_units = {
                ios : {
                    banner: 'ca-app-pub-6981212130280607/8129501976',		//PUT ADMOB ADCODE HERE 
                    interstitial: ''	//PUT ADMOB ADCODE HERE 
                },
                android : {
                    banner: 'ca-app-pub-6981212130280607/8129501976',		//PUT ADMOB ADCODE HERE 
                    interstitial: ''	//PUT ADMOB ADCODE HERE 
                }
            };
            var admobid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;
 
            window.plugins.AdMob.setOptions( {
                publisherId: admobid.banner,
                interstitialAdId: admobid.interstitial,
                adSize: window.plugins.AdMob.AD_SIZE.BANNER,	//use SMART_BANNER, BANNER, LARGE_BANNER, IAB_MRECT, IAB_BANNER, IAB_LEADERBOARD 
                bannerAtTop: false, // set to true, to put banner at top 
                overlap: false, // banner will overlap webview  
                offsetTopBar: false, // set to true to avoid ios7 status bar overlap 
                isTesting: false, // receiving test ad 
                autoShow: true // auto show interstitial ad when loaded 
            });
 
            registerAdEvents();
            window.plugins.AdMob.createInterstitialView();	//get the interstitials ready to be shown 
            window.plugins.AdMob.requestInterstitialAd();
 
        } else {
            //alert( 'admob plugin not ready' ); 
        }
}
//functions to allow you to know when ads are shown, etc. 
function registerAdEvents() {
        document.addEventListener('onReceiveAd', function(){});
        document.addEventListener('onFailedToReceiveAd', function(data){});
        document.addEventListener('onPresentAd', function(){});
        document.addEventListener('onDismissAd', function(){ });
        document.addEventListener('onLeaveToAd', function(){ });
        document.addEventListener('onReceiveInterstitialAd', function(){ });
        document.addEventListener('onPresentInterstitialAd', function(){ });
        document.addEventListener('onDismissInterstitialAd', function(){
        	window.plugins.AdMob.createInterstitialView();			//REMOVE THESE 2 LINES IF USING AUTOSHOW 
            window.plugins.AdMob.requestInterstitialAd();			//get the next one ready only after the current one is closed 
        });
    }//display the banner 
function showBannerFunc(){
    window.plugins.AdMob.createBannerView();
}
//display the interstitial 
function showInterstitialFunc(){
    window.plugins.AdMob.showInterstitialAd();
};

app.initialize();
