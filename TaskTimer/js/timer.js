function sec2TimeObj(sec) {
		var hours = 0, minutes = Math.floor(sec / 60), seconds;

		// Hours
		if (sec >= 3600) {
			hours = Math.floor(sec / 3600);
		}

		// Minutes
		if (sec >= 3600) {
			minutes = Math.floor(sec % 3600 / 60);
		}
		// Prepend 0 to minutes under 10
		if (minutes < 10 && hours > 0) {
			minutes = '0' + minutes;
		}
		// Seconds
		seconds = sec % 60;
		// Prepend 0 to seconds under 10
		if (seconds < 10 && (minutes > 0 || hours > 0)) {
			seconds = '0' + seconds;
		}

		return {
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	}


function accuracy(estTime, realTime) {
	var total = 0;
	if(estTime > realTime){
		total = realTime / estTime;
	} else {
		total = estTime / realTime;
	}
	total *= 100;
	return Math.round(total * 100) / 100;
}


$(document).ready(function(){

// Grab and display the selection Items description
var selectedItmText = "This is just a long sentence to show it works. ";
$("#selectedItm").text(selectedItmText);

// Grabs users estimated time
function grabTime(){
	var hours = parseInt($(".hours").val(),10);
	var minutes = parseInt($(".minutes").val(),10);
	var seconds = parseInt($(".seconds").val(),10);
	if(hours > 0){
		hours *= 3600;
		seconds += hours;
	}
	if(minutes > 0){
		minutes *= 60;
		seconds += minutes;
	}
	return seconds;
}



// Hold timer values
var hours = 0;
var minutes = 0;
var seconds = 0;
var totalSeconds = 0;
var userEstTime = 0;

var isTimerGoing = false;
// When start button is clicked display and start timer
$("#startBtn").click(function(){

	// check if the timer is already going
	if(!isTimerGoing){
		// Change background color and box shadow
		$("#timerHolder").css('background-color', 'red');
		$("#timerHolder").css('box-shadow', '0px 0px 217px 10px red');
		$(this).timer();
		userEstTime = grabTime();
		isTimerGoing = true;
	} else {

		$("#timerHolder").css('background-color', '#00DB21');
		$("#timerHolder").css('box-shadow', '0px 0px 217px 10px #00DB21');
		totalSeconds = $(this).data('seconds');
		hours = sec2TimeObj(totalSeconds).hours;
		minutes = sec2TimeObj(totalSeconds).minutes;
		seconds = sec2TimeObj(totalSeconds).seconds;
		if (hours == undefined) {
			hours = 0;
		}
		if (minutes == undefined) {
			minutes = 0;
		}
		if (totalSeconds == undefined) {
			totalSeconds = 0;
		}
		$(this).timer('remove');
		$(this).text("START");
		$("#acySec").text(accuracy(userEstTime, totalSeconds) + "%");
		isTimerGoing = false;
	}

});






});

