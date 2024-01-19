//######## LAB 2-1 FILE DELETE CONFIRMATION ########
//alert("hey 2.1");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES ========


//==== LOGIC ========

//1. CREATE POPUP TO ASK FOR PERMISSION TO PROCEED WITH DELETION OF FILE.
var userinput = confirm("are you sure that you want to delete the file");

var userChoice;
var messageOut = "Thank you, your file has ";
var yesMessage = "been successfully deleted.";
var noMessage = "not been altered.";

if(userinput === true  ){
    alert("Thank you, your file has " + yesMessage);
}else{
    alert("Thank you, your file has " + noMessage);
}



