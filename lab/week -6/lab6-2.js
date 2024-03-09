//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX
window.onload = pageReady;
//LISTEN FOR load EVENT
//'WRAPPER' FUNCTION FOR DOM LOGIC

function pageReady() {

	//GET DOM ELEMENTS WE'LL NEED
	var mysterybox = document.getElementById("mysteryBox");
	var buttonBox = document.getElementById("buttonBox");

  

  //====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
 function hover() {
	if(window.confirm('Do you want to see something?')) {
		mysterybox.style.display = "none";
		buttonBox.style.display = "block";
  }
  
  }
	//FUNCTION TO CHANGE buttonBox
  function click(){
	buttonBox.style.width="600px";
	buttonBox.style.background="orange";
	document.getElementById("buttonBox").innerHTML = "<h2>SURPRISE!!</h2>";
	}

	//SETUP LISTENERS
	mysterybox.onmouseover =hover;
	buttonBox.onclick =click;
//END onload FUNCTION

}

	//SETUP LISTENERS


//END onload FUNCTION