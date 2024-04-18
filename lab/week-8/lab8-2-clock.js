/* LAB 8.2 - STOP TIME */

//create page load listener
window.onload = timer;
//create page load function
function timer(){
	//create variables for required HTML elements
	var hours,minutes , seconds;
	
	//create time variable so all functions have access to it
	var waittimer;
	
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function displaytime(){
		var now = new Date();
		hours = now.getHours();
		minutes = now.getMinutes();
		seconds = now.getSeconds();
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;
	document.getElementById("hoursOut").innerHTML =	hours + ":";
	document.getElementById("minsOut").innerHTML =	minutes+ ":";
	document.getElementById("secsOut").innerHTML =	seconds;
	}
	
	//CREATE FUNCTION TO START THE CLOCK.
	function startTimer(){
		waittimer = setInterval(displaytime,1000);
	}
	
	//CREATE FUNCTION TO STOP THE CLOCK
	function cancleTimer(){
		clearTimeout(waittimer);
		alert("Timer Stopped");
	}
	
	// SET EVENT LISTENERS

document.getElementById("btnStart").onclick = startTimer;
document.getElementById("btnStop").onclick = cancleTimer;	

}