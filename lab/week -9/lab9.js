//LAB 9-DATA STORAGE: INDEX PAGE
//window.onload
window.onload = function() {
    var formHandle = document.forms.infoForm;   

    var message =document.getElementById('newMsgBox');
    var delbtn = document.getElementById('btnDel');
    
    var name = formHandle.f_name;
    var color = formHandle.f_color;
    formHandle.onsubmit = Form;

      
    //check for stored values

        //retrieve stored values
        var username = localStorage.getItem("myname");
        var usercolor = localStorage.getItem("mycolor");

        //change welcome text to stored name
        if(username!=null && usercolor!=null){
            message.innerHTML = "Welcome, " + username;
        }

        //change BG colour to stored colour
        document.body.style.background = usercolor;

        //  document.body.style.background = 

    

    function Form() {
        localStorage.setItem("myname",name.value);
        localStorage.setItem("mycolor",color.value);
        console.log(localStorage)

    }

    function dothis(){
        localStorage.clear();
    }
    //#####============== DO THIS PART FIRST! ===============		
    //get the form and set submit listener
	
	

	//onsubmit Function
        
        //get values from form
		
		
		//console.log the form values

        
        //store values
        delbtn.onclick = dothis;

}
        
        



    