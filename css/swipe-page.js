$(document).ready(function () {
	var pageNumber = 293;//Stores Page Number

	$("#pages").swiperight(function () {
       //Navigate to the next Image when swiping right
 	
 	if (pageNumber < 304) {
           pageNumber++;//Increment the pageNumber by 1
           var img = document.getElementById('page').src = "images/" + pageNumber +'.jpg';
        };
});
    
	$("#pages").swipeleft(function () {
       //Navigate to the previous Image when swiping left
	if (pageNumber > 293) {
           pageNumber--;//decrement the pageNumber by 1
           var img = document.getElementById('page').src = "images/" + pageNumber +'.jpg';
        };
    
	});
	});