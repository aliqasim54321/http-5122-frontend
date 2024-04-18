//LAB 9-DATA STORAGE: PRODUCTS PAGE

window.onload = function(){
    var messages = document.getElementsById("newMsgBox");

    //getting back the stored values
    var username = localStorage.getItem("myname");
    var usercolor = localStorage.getItem("mycolor");

    if(username !== null && usercolor !== null){
        messages.innerHTML = "Welcome, " + username;
        document.body.style.background= usercolor;
}
}