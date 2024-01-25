//declaring an array to store the top 7 movie list
var MovieList = ["batman","aquaman","spiderman","birdbox","apocalypse","HungerGames","avenger"]

//declaring list as varialble to accept the user input for the top 7 movie
var list = prompt("Which top 7 movie would you like?","Pick a number: 1-7");

// using while loop to check if the user input is a valid number between 1 to 7 or not a number
while(isNaN(list) || list < 1 || list > 7)
{   
     list =prompt("Please enter a number between 1 and 7");
}
// using the index of the array to get the corresponding movie name
alert("Number "+list +" "+" on the list is "+MovieList[(list-1)]);

// using for loop to print the top 7 movies
for (var i =0;i<MovieList.length;i++){

    //printing the top 7 movies names        
    console.log("Movie "+(i+1)+" : "+MovieList[i]);
}