//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION

//the function returns the average of the five numbers 
//Parameters : there are five Parameters passed of type int
//return: float totalavg

function avg(value1,value2,value3,value4,value5){
    var totalavg = (value1+value2+value3+value4+value5)/5;
    return totalavg.toFixed(1);
}
//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.

var result = avg(5,10,15,20,25);
console.log("The average is " + result);

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var webdesign =45;
var front_end = 45;
var Interaction_design = 45;
var backend = 45;
var database = 45;

var total1 = avg(webdesign,front_end,Interaction_design,backend,database)

if(total1 >= 70){
    alert("Nice work")
}
else if(total1 < 70){
    alert("review required")
} else {
    alert("incorrect data")
}
console.log(total1);


var webdesign =59;
var front_end = 69;
var Interaction_design = 94;
var backend = 89;
var database = 43;

var total2 = avg(webdesign,front_end,Interaction_design,backend,database)

if(total2 >= 70){
    alert("Nice work")
}
else if(total2 < 70){
    alert("review required")
} else {
    alert("invalid data")
}
console.log(total2);
