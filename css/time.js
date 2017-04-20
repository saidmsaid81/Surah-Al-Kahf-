var today = new Date();
		var tomorrow = new Date();
		tomorrow.setDate(today.getDate());
		tomorrow.setHours(21);
		tomorrow.setMinutes(00);
		tomorrow.setSeconds(00);
		var tomorrow_at_6_am = new Date(tomorrow);

		var friday = new Date();
		friday.setDate(friday.getDate() + (1 + 4 - friday.getDay()) % 7);
var morning =new Date()
		morning.setDate(friday.getDate());
		morning.setHours(8);
		morning.setMinutes(0);
		morning.setSeconds(0);
		var friday_in_morning = new Date(morning);

		var sunday = new Date();
		sunday.setDate(sunday.getDate() + (0  - sunday.getDay()) % 7);
var night =new Date()
		night.setDate(sunday.getDate());
		night.setHours(20);
		night.setMinutes(0);
		night.setSeconds(0);
		var sunday_in_night = new Date(night);

		var wednesday = new Date();
		wednesday.setDate(wednesday.getDate() + (1 +2  - wednesday.getDay()) % 7);
var evening =new Date()
		evening.setDate(wednesday.getDate());
		evening.setHours(20);
		evening.setMinutes(0);
		evening.setSeconds(0);
		var wednesday_in_evening = new Date(evening);

