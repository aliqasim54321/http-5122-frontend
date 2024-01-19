//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
// alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
		// password input



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var user = prompt("Please Enter your username");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log("Your username is : " + user);

//5. CREATE POPUP BOX FOR PASSWORD
var pass = prompt("Please Enter your password");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log("Your password is : " + pass);

var username = "dart";
var password = "vader";



//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(username == user && password == pass){
	alert("Welcome back" + " "+username+" "+password )
	console.log(" login successful");
} else {
	alert("Invalid username and password")
	console.log("Login fail");
}


//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE



//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE