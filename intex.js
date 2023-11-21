const apikey = "e0c2cc52fbc9beb5b4ee0396947dad19";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.getElementById("#mybtn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./images/mist.png";
    }
};
var input = document.getElementById("myInput");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("mybtn").click();
    }
});


