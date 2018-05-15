function updateFridayTime() {
var friday = new Date();
<<<<<<< HEAD
    friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7);
var morning =new Date()
    morning.setDate(friday.getDate());
    morning.setHours(8);
    morning.setMinutes(0);
    morning.setSeconds(0);
    var friday_in_morning = new Date(morning);

    var thursday = new Date();
        thursday.setDate(thursday.getDate() + (1 + 3 - thursday.getDay()) % 7);
var night =new Date()
        night.setDate(thursday.getDate());
        night.setHours(20);
        night.setMinutes(0);
        night.setSeconds(0);
        var thursday_in_night = new Date(night);
=======
		friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7);
var morning =new Date();
		morning.setDate(friday.getDate());
		morning.setHours(localStorage.getItem("hourVal"));
		morning.setMinutes(localStorage.getItem("minuteVal"));
		morning.setSeconds(0);
		var friday_in_morning = new Date(morning);
		localStorage.setItem("friNotiftime", friday_in_morning);
}
function updateThursTime() {	
		var thursday = new Date();
        thursday.setDate(thursday.getDate() + (1 + 3 - thursday.getDay()) % 7);
		var night =new Date();
        night.setDate(thursday.getDate());
        night.setHours(localStorage.getItem("thursHourVal"));
        night.setMinutes(localStorage.getItem("thursMinuteVal"));
        night.setSeconds(0);
        var thursday_in_night = new Date(night);
        localStorage.setItem("thursNotiftime", thursday_in_night)
    }
>>>>>>> parent of 6804cdf... Used version 0.8 of notification plugin
