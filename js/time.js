var friday = new Date();
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