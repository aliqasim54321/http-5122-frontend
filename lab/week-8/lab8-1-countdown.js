/* LAB 8-1 - FINAL COUNTDOWN!! */

//create page load listener
window.onload = time;
//create page load function
function time(){

	//create variables for required HTML elements
	var now = new Date();
	
	//create variables for now date and due date
	var dueDate = new Date("April 19, 2023 18:00:00");

	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	document.getElementById("todayData").innerHTML = now.toDateString();
	document.getElementById("finalData").innerHTML = dueDate.toDateString();

	
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	var timeDifference = dueDate.getTime() - now.getTime();
	
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
	var dayremain =	 timeDifference/86400000;
	var daysdiff = Math.floor(dayremain);
	document.getElementById("dueData").innerHTML = daysdiff;
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
	if (daysdiff < 0) {
        document.getElementById("dueData").innerHTML = "The Deadline for the Final Assignment has passed!";
    } else {
        document.getElementById("dueData").innerHTML = daysdiff;
    }
	
		}