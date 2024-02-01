//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will...
//It expects to receive...
//It will return...

// here the function will check if the temp is between -10 and 30 degrees.
// Parameters: int
// returns : boolean
function checkTemp(currentTemp) {
    if (currentTemp > 30 || currentTemp < -10) {
        return false;
    }
    else {
        return true;
    }
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
user = prompt("Enter Current temperature")

if (checkTemp(user) === false) {
    alert("Yikes! This is no weather for dog walking!")
} else {
    alert("You'are good, have a nice walk!")
}