var page = document.getElementById("page").src;
var pageNo = page.substring(23, 41);
function openReminderDialog() {
	window.plugins.socialsharing.share('I am reminding you to read Surah Al Kahf its the Sunnah of our beloved Prophet Muhammad (SAW).\n\nIt was narrated from Abu Sa’eed al-Khduri that the Prophet (peace and blessings of Allaah be upon him) said: \n\n“Whoever reads Soorat al-Kahf on Friday, he will be illuminated with light between the two Fridays.”\n\n Narrated by al-Haakim; classed as saheeh by al-Albaani in Saheeh al-Targheeb, 836 \n\nSent from Surah Al Kahf Android app\n\nHave a look at Surah Al Kahf App\nLink:', null, null, 'http://bit.ly/kahfapp');
}

function openShareDialog() {
	window.plugins.socialsharing.share('I am reminding you to read Surah Al Kahf its the Sunnah of our beloved Prophet Muhammad (SAW).\n\nIt was narrated from Abu Sa’eed al-Khduri that the Prophet (peace and blessings of Allaah be upon him) said: \n\n“Whoever reads Soorat al-Kahf on Friday, he will be illuminated with light between the two Fridays.”\n\n Narrated by al-Haakim; classed as saheeh by al-Albaani in Saheeh al-Targheeb, 836 \n\nSent from Surah Al Kahf Android app\n\nHave a look at Surah Al Kahf App\nLink:', null, pageNo, 'http://bit.ly/kahfapp');
}




