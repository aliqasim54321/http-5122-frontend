document.addEventListener("DOMContentLoaded", function() {
    const torontoButton = document.getElementById("Toronto");
    const yourtownButton = document.getElementById("paris");

    torontoButton.addEventListener("click", function() {
        getWeatherData("Toronto");
    });

    yourtownButton.addEventListener("click", function() {
        getWeatherData("paris");
    });

    function getWeatherData(city) {
        const apiKey = 'fa273c217c12bc8f2bd9b16f2002c813';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
       
        const xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl, true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                const cityName = data.name;
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;
                const weatherIcon = data.weather[0].icon;
                const humidity = data.main.humidity; // Additional property, for example humidity

                displayWeather(cityName, temperature, weatherDescription, weatherIcon, humidity);
            } else {
                console.error('Error fetching weather data:', xhr.statusText);
            }
        };
        xhr.onerror = function() {
            console.error('Request failed');
        };
        xhr.send();
    }





    function displayWeather(cityName, temperature, weatherDescription, weatherIcon,humidity) {
        const outputSection = document.getElementById("output");
        const locationElement = document.getElementById("location");
        const temperatureElement = document.getElementById("temperature");
        const conditionsElement = document.getElementById("conditions");
        const iconElement = document.getElementById("icon");
        const humidityElement = document.getElementById("humidity");

        locationElement.textContent = cityName;
        temperatureElement.textContent = `${temperature} °C`;
        conditionsElement.textContent = weatherDescription;
        iconElement.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">`;
        humidityElement.textContent = humidity;
        outputSection.style.display = "block";
    }
});


