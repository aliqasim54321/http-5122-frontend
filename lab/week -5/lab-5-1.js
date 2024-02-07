//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meobject ={
    name : "ali",
    age : 25,
    job : "programmer",
    city : "New York",
}

console.log(meobject.name);

// alert("My name is " +meobject.name+ " i am "+ meobject.age+ "years old" );

meobject.bio = function(){
    alert("My name is " +meobject.name+ " i am "+ meobject.age+ " years old" );
}

meobject.bio();