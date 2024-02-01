var hellotext = "Hello World!";

function sayHello() {
    alert(hellotext);
}

// sayHello();

// -----------------------------------------------------------------------------

//calling a function with the giving the inputs
function sayHelloCustom(nameIn){
    alert("Hello" +" "+ nameIn);
}

// sayHelloCustom("John");
// sayHello();

// -----------------------------------------------------------------------------

//calling a function with the giving the multiple inputs

function aliqasim(rehaan, ali , khundmiri){
    alert(rehaan+" "+ali +" "+khundmiri);
}

// aliqasim("bolo kya", "hona hai", "aap ku" );

// -----------------------------------------------------------------------------

//returing value

function a(b,c){
    return b+c;
}

var result = a(5,3);
// alert("the total value is : " + result);

// -----------------------------------------------------------------------------

// function validate(firstname, lastname){
    var flag = false;
    if(firstname==="ali qasim" && lastname==="khundmiri"){
        flag = true;
    
}
    return flag;
// }

var first = "ali qasim";
var last = "khundmiri";

if(validate(first,last) === true){
    alert("welcome back"+" "+ first+" "+last);
}
else{
    alert("invalid login");
}

// -----------------------------------------------------------------------------

