//Take accept the input from the user for the team number
var  team_number = prompt("Please enter your team number?");

//checking if the user entered the vmalkaan rehaand number or not
if (team_number !== null && team_number !== "" && team_number >= 1 && team_number <=6){

    //accepting first name from the user
    var first_name = prompt("Please enter your first name");

    //checking the conditon for the first name to not be empty and white space
    if(first_name !== null && first_name.trim !== ""){

    //checking the condition based on the team number and first name
    switch (first_name){
        case "syed":
            if(team_number == 1){
                alert("You are welcome syed ali ");
                break;
            }
        case "qasim":
            if(team_number == 2){
                alert("You are welcome qasim Khundmiri");
                break;
            }
        case "atti":
            if(team_number == 3){
                alert("You are welcome atti kadai ");
                break;
            }
        case "mubashir":
            if(team_number == 4){
                alert("You are welcome mubashir sheerin");
                break;
            }
        case "roshan":
            if(team_number == 5){
                alert("You are welcome roshan rumaan");
                break;
            }
        case "malkaan":
                if(team_number == 6){
                    alert("You are welcome malkaan rehaan");
                    break;
                }
            default :
            alert("your access is denied")
    }
    }
    else{
        alert("your access is denied")
    }

} 
else{
    alert("your access is denied");
}