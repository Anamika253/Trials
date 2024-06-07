
// const apiKey = "6d0ba5c817fd05f935e5d34b54c2e23b";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
   
// const searchBox = document.querySelector(".inputT input");
// const searchBtn= document.querySelector(".inputT i")
// const weatherIcon = document.querySelector(".weather-icon");

//    async function checkWeather(city){
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//     var data = await response.json();
//    //  console.log(data);
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed +  " KMPH";
//     }
//     searchBtn.addEventListener("click" , ()=>{checkWeather(searchBox.value)})
//     checkWeather();

//     if(data.weather[0].main == "Clouds"){
//        weatherIcon.src = "https://mir-s3-cdn-cf.behance.net/project_modules/hd/3deaf298934971.5ee7a855e939b.gif";
//     }
//     else if(data.weather[0].main == "Clear"){
//       weatherIcon.src = "https://media.tenor.com/ExWmZZlPxf4AAAAC/sunny-sun.gif";
//     }
//     else if (data.weather[0].main == "Rainy")
//     {
//       weatherIcon.src ="https://www.animatedimages.org/data/media/148/animated-weather-image-0054.gif";
//     }
//     else if (data.weather[0].main == "Snow")
//     {
//       weatherIcon.src = "https://cdn.pixabay.com/animation/2022/10/15/08/31/08-31-54-368_512.gif";
//     }
//     else if(data.weather[0].main == "Drizzle")
//     {
//       weatherIcon.src = "https://media.tenor.com/E-X08EsgjiMAAAAj/%E4%B8%8B%E9%9B%A8-%E6%B7%8B%E9%9B%A8.gif";   
//     }
   
//     document.querySelector(".weather").style.display = "block";

//     if(response.status == 404){
//       document.querySelector(".error").style.display = "block";
//     }


const apiKey = "6d0ba5c817fd05f935e5d34b54c2e23b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".inputT input");
const searchBtn = document.querySelector(".inputT i");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  // console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " KMPH";

  weatherIcon.className = "weather-icon";
  if (data.weather[0].main == "Clouds") {
    weatherIcon.classList.add("Clouds");
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.classList.add("Clear");
  } else if (data.weather[0].main == "Rainy") {
    weatherIcon.classList.add("Rainy");
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.classList.add("Snow");
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.classList.add("Drizzle");
  }

  // if (data.weather[0].main == "Clouds") {
  //   weatherIcon.src = "cloudy.gif" ;
  // } else if (data.weather[0].main == "Clear") {
  //   weatherIcon.src = "https://media.tenor.com/ExWmZZlPxf4AAAAC/sunny-sun.gif";
  // } else if (data.weather[0].main == "Rainy") {
  //   weatherIcon.src = "https://www.animatedimages.org/data/media/148/animated-weather-image-0054.gif";
  // } else if (data.weather[0].main == "Snow") {
  //   weatherIcon.src = "https://cdn.pixabay.com/animation/2022/10/15/08/31/08-31-54-368_512.gif";
  // } else if (data.weather[0].main == "Drizzle") {
  //   weatherIcon.src = "https://media.tenor.com/E-X08EsgjiMAAAAj/%E4%B8%8B%E9%9B%A8-%E6%B7%8B%E9%9B%A8.gif";
  // }

  document.querySelector(".weather").style.display = "block";

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    console.log("Please enter a valid city");
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
