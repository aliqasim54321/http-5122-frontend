//LAB 3 - ARRAYS & LOOPS - PART 2


//PM TEAM MEMBER ARRAY
var ourteam = ["ali", "Michael", "Jessica", "Karen", "Jess"];


//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourteam);

//REMOVE LAST MEMBER
ourteam.pop()
console.log(ourteam);
//ADD SEAN TO FRONT OF ARRAY

ourteam.unshift("Sean");
console.log(ourteam);

//REARRANGE THE ARRAY ALPHABETICALLY
ourteam.sort();
console.log(ourteam);

var number = ourteam.length;
confirm("We have " + number + " people in our group.");
//OUTPUT REQUIRED MESSAGE TO JS CONSOLE


//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

// ourTeam.forEach((name, index){}
//     console.log(name + " is #" + (index + 1));
//   });



for (var i = 0; i < ourteam.length; i++) {

    console.log("is :" +(i+1) +" "+ourteam[i]);}