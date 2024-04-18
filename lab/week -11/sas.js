window.onload = function(){

    console.log("test");
    var out_location = document.getElementById("location");
    var out_temp = document.getElementById("temperature");
    var out_conditions = document.getElementById("conditions");
    console.log("test");
    //this is required a key 
    var myApiKey = "fa273c217c12bc8f2bd9b16f2002c813";

    //Checking the url
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=fa273c217c12bc8f2bd9b16f2002c813&units=metric";

    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);

    xhr.responseType = "json";
    xhr.send(null);
    console.log("test");

    xhr.onreadystatechange = function() {
        if(xhr.readyState===4){
            if(xhr.status===200){
                var data = xhr.response;
                console.log(data);
                out_location.innerHTML = data.name;
                out_temp.innerHTML = Math.floor(data.main.temp)+"&degC";
                out_conditions.innerHTML =cap(data.weather[0].description);
            }else{
                out_location.innerHTML ="API call was unsuccessful";
                console.log(xhr.status);
            }
        }
    }
    function cap(string)
    {
return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

