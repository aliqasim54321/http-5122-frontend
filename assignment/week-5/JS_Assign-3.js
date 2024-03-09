// Defining  a JavaScript object representing about the property of object

var swim = {
    name: "Ali",
    age : 25,
    gender: "male",
    hobbies: "swimming",
}
console.log(swim);



// Method to update the age property and show a popup with the updated value

    swim.newage = function(z) {
        swim.age = z;
        alert("The new age is " + swim.age)
      }


 // Ask for user input to update the name property
var newname = prompt("Please enterr your name: ",swim.name );

// updating the name property
swim.name = newname;

// Ask for user input to update the hobbies property
var newhobbies  = prompt("Please enter your hobbies: ", swim.hobbies );
swim.hobbies = newhobbies;


var z = prompt("Please enter your age: ",swim.age);

swim.newage(z);

// Printing the output on the console
console.log(swim);




  