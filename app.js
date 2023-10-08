const inputEl = document.querySelector('.inputBox');
const searchBar = document.querySelector('.searchBtn');
const weatherImage =document.querySelector('.weather-image');
const temperature =document.querySelector('.temperature')
const description =document.querySelector('.description');;
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');





async function checkWeather(city){
    const api_key = '3b800c83f5d4c6f8370eed0fdc8d152c';
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
      
    const weather_data = await fetch(`${url} `).then(
        response => response.json());


if(weather_data.cod === `404`){
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
}

console.log("run");
location_not_found.style.display = "none";
weather_body.style.display = "flex";

    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)  } <sup>o</sup>C `;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML =`${weather_data.main.humidity}%`;
    windSpeed.innerHTML=`${weather_data.wind.speed}Km/H`

    switch(weather_data.weather[0].main){
        case 'Clouds': 
        weatherImage.src ="./image/cloud.png"
        break
        case 'Clear': 
        weatherImage.src ="./image/clear.png"
        break
        case 'Rain': 
        weatherImage.src ="./image/rain.png"
        break
        case 'Mist': 
        weatherImage.src ="./image/mist.png"
        break
        case 'Snow': 
        weatherImage.src ="./image/snow.png"
    }

}   
searchBar.addEventListener('click',()=>{
checkWeather(inputEl.value)
})
