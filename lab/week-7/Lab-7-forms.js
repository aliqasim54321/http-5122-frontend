/* LAB 7 - SHIPPING FORM */

window.onload = function(){
	var formHandle = document.forms.form_ship;
	console.log(formHandle);


formHandle.onsubmit = processForm;



function processForm()
{

 var user = formHandle.f_Name;
 var post = formHandle.f_pc;
 var speedDel = formHandle.f_speed;

 //Validating the data in the form

 var userInput = document.getElementById("thanksCustomer");
    userInput.innerHTML = user.value;
    var userCode = document.getElementById("thanksPC");
    userCode.innerHTML = post.value;

    var delType = speedDel.options[speedDel.selectedIndex].text;
    var nameDel = document.getElementById("thanksSpeed");
    var delCost = document.getElementById("thanksCost");

    if(speedDel.value!= "0") {
        nameDel.innerHTML = delType;
        delCost.innerHTML = speedDel.value;
       
    }



    if(speedDel.value==="0"){
	var delInput = speedDel;
    delInput.style.background = "red";
    delInput.focus();    

    return false;
 }


 else if(user.value=== ""){
	var nameMsg = user;
    nameMsg.style.background = "red";
    nameMsg.focus();
console.log(user.value);
    return false;
 }


 else if(post.value === "")
 {
	var codeMsg = post;
    codeMsg.style.background = "red";
    codeMsg.focus();    

    return false;
 }

 else{
    var result = document.getElementById("thanks_msg");
    result.style.display = "block";
    formHandle.style.display = "none";
    return false;
 }

   
  }

	 
	return false;

    }  

    

