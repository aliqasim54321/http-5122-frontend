//#### LAB 4 - FUNCTIONS ####
//PART 1:  PROGRAM ALERT FUNCTION


//################## CREATE YOUR FUNCTION
// creating a function that will print the course code and course name to the console.
// Parameters: two string datatype of course code and course name
// returns : string

function coursePopup(courseCode,courseName){
    alert(" The course code " + courseCode + " is "+ courseName) 
}


//################## TEST YOUR FUNCTION
coursePopup("HTTP5121", "Web Design");
coursePopup("HTTP5122", "Front-End Web Development 1");
coursePopup("IXD5106", "Interaction Design");