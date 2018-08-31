$(document).ready(function () {
	var kahfPageNumber = 293;//Stores Page Number of Suratul Kahf
	$("#kahf-pages").swiperight(function () {
       //Navigate to the next Image when swiping right
 	
 	if (kahfPageNumber <304) {
           kahfPageNumber++;//Increment the pageNumber by 1
           var img = document.getElementById('kahf-page').src = "images/" + kahfPageNumber +'.jpg';
           
        }
        else {
          window.plugins.toast.showLongBottom('This is the last page');
        }
});
    
	$("#kahf-pages").swipeleft(function () {
       //Navigate to the previous Image when swiping left
	if (kahfPageNumber > 293) {
           kahfPageNumber--;//decrement the pageNumber by 1
           var img = document.getElementById('kahf-page').src = "images/" + kahfPageNumber +'.jpg';

        }
        else {
          window.plugins.toast.showLongBottom('This is the first page. Swipe right to move to next page');
        }
    
	});


	});