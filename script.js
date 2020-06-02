let tokenForGeolocation = 'e5b294d425e60d';
let tokenForWeather = '07eb68c0596b4dd2801b11aab9c9e362';
let tokenForImages = 's4vDxOH2seLZDYcm6779W30-NflmNERE51ugb6W3VoI'; 

let degree = document.getElementById('degree');
let currentCity = document.getElementById('location');
let currentDateTime = document.getElementById('data-time');
let currentTemperature = document.getElementById('temperature-today');
let tomorrowDay = document.getElementById('tomorrow-day');
let afterTomorrowDay = document.getElementById('after-tomorrow-day');
let afterAfterTomorrowDay = document.getElementById('after-after-tomorrow-day');
let tomorrowTemperature = document.getElementById('tomorrow-temperature');
let afterTomorrowTemperature = document.getElementById('after-tomorrow-temperature');
let afterAfterTomorrowTemperature = document.getElementById('after-after-tomorrow-temperature');

let forecastDetail = document.getElementById('forecast-detail');
let feelsLike = document.getElementById('feels-like');
let wind = document.getElementById('wind');
let humidity = document.getElementById('humidity');
let weatherIcon = document.getElementById('weather-icon');
let tomorrowIcon = document.getElementById('tomorrow-icon');
let afterTomorrowIcon = document.getElementById('after-tomorrow-icon');
let afterAfterTomorrowIcon = document.getElementById('after-after-tomorrow-icon');
let latitude = document.getElementById('latitude');
let longitude = document.getElementById('longitude');

let searchInputButton = document.getElementById('search-input-button');
let searchInput = document.getElementById('search-input');

async function getGeolocation() {
    const url = `https://ipinfo.io/json?token=${tokenForGeolocation}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ua&units=metric&APPID=${tokenForWeather}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

getGeolocation().then((data) => {
    currentCity.innerHTML = data.city;
    currentCity.innerHTML = `${data.city}, ${data.country}`;
    getWeather(data.city).then((data) => {
        degree.innerHTML = `°`;
        let degreeIcon = degree.innerHTML;
        currentTemperature.innerHTML = `${Math.round(data.list[0].main.temp)}${degreeIcon}`;
        tomorrowTemperature.innerHTML = `${Math.round(data.list[1].main.temp)}${degreeIcon}`;
        afterTomorrowTemperature.innerHTML = `${Math.round(data.list[2].main.temp)}${degreeIcon}`;
        afterAfterTomorrowTemperature.innerHTML = `${Math.round(data.list[3].main.temp)}${degreeIcon}`;
    
        forecastDetail.innerHTML = data.list[0].weather[0].main;
        feelsLike.innerHTML = `Feels Like: ${Math.round(data.list[0].main.feels_like)}${degreeIcon}`;
        wind.innerHTML = `Wind: ${Math.round(data.list[0].wind.speed)} M/S`;
        humidity.innerHTML = `Humidity: ${Math.round(data.list[0].main.humidity)}%`;

        let iconToday = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
        weatherIcon.setAttribute("src", iconToday);
        let iconTomorrow = `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`;
        tomorrowIcon.setAttribute("src", iconTomorrow);
        let iconAfterTomorrow = `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`;
        afterTomorrowIcon.setAttribute("src", iconAfterTomorrow);
        let iconAfterAfterAfterTomorrow = `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`;
        afterAfterTomorrowIcon.setAttribute("src", iconAfterAfterAfterTomorrow);
    
        let latitudeConverter = coordinatesConverter(data.city.coord.lat);
        let longitudeConverter = coordinatesConverter(data.city.coord.lon);
        latitude.innerHTML = `Latitude: ${latitudeConverter}`;
        longitude.innerHTML = `Longitude: ${longitudeConverter}`;
    });
});

searchInputButton.addEventListener("click", function(event){
    getWeather(searchInput.value).then((data) => {
        currentCity.innerHTML = `${data.city.name}, ${data.city.country}`;
        degree.innerHTML = `°`;
        let degreeIcon = degree.innerHTML;
        currentTemperature.innerHTML = `${Math.round(data.list[0].main.temp)}${degreeIcon}`;
        tomorrowTemperature.innerHTML = `${Math.round(data.list[1].main.temp)}${degreeIcon}`;
        afterTomorrowTemperature.innerHTML = `${Math.round(data.list[2].main.temp)}${degreeIcon}`;
        afterAfterTomorrowTemperature.innerHTML = `${Math.round(data.list[3].main.temp)}${degreeIcon}`;
    
        forecastDetail.innerHTML = data.list[0].weather[0].main;
        feelsLike.innerHTML = `Feels Like: ${Math.round(data.list[0].main.feels_like)}${degreeIcon}`;
        wind.innerHTML = `Wind: ${Math.round(data.list[0].wind.speed)} M/S`;
        humidity.innerHTML = `Humidity: ${Math.round(data.list[0].main.humidity)}%`;

        let iconToday = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
        weatherIcon.setAttribute("src", iconToday);
        let iconTomorrow = `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`;
        tomorrowIcon.setAttribute("src", iconTomorrow);
        let iconAfterTomorrow = `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`;
        afterTomorrowIcon.setAttribute("src", iconAfterTomorrow);
        let iconAfterAfterAfterTomorrow = `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`;
        afterAfterTomorrowIcon.setAttribute("src", iconAfterAfterAfterTomorrow);
    
        let latitudeConverter = coordinatesConverter(data.city.coord.lat);
        let longitudeConverter = coordinatesConverter(data.city.coord.lon);
        latitude.innerHTML = `Latitude: ${latitudeConverter}`;
        longitude.innerHTML = `Longitude: ${longitudeConverter}`;
    })
});

window.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        getWeather(searchInput.value).then((data) => {
            currentCity.innerHTML = `${data.city.name}, ${data.city.country}`;
            degree.innerHTML = `°`;
            let degreeIcon = degree.innerHTML;
            currentTemperature.innerHTML = `${Math.round(data.list[0].main.temp)}${degreeIcon}`;
            tomorrowTemperature.innerHTML = `${Math.round(data.list[1].main.temp)}${degreeIcon}`;
            afterTomorrowTemperature.innerHTML = `${Math.round(data.list[2].main.temp)}${degreeIcon}`;
            afterAfterTomorrowTemperature.innerHTML = `${Math.round(data.list[3].main.temp)}${degreeIcon}`;
        
            forecastDetail.innerHTML = data.list[0].weather[0].main;
            feelsLike.innerHTML = `Feels Like: ${Math.round(data.list[0].main.feels_like)}${degreeIcon}`;
            wind.innerHTML = `Wind: ${Math.round(data.list[0].wind.speed)} M/S`;
            humidity.innerHTML = `Humidity: ${Math.round(data.list[0].main.humidity)}%`;
    
            let iconToday = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
            weatherIcon.setAttribute("src", iconToday);
            let iconTomorrow = `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`;
            tomorrowIcon.setAttribute("src", iconTomorrow);
            let iconAfterTomorrow = `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`;
            afterTomorrowIcon.setAttribute("src", iconAfterTomorrow);
            let iconAfterAfterAfterTomorrow = `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`;
            afterAfterTomorrowIcon.setAttribute("src", iconAfterAfterAfterTomorrow);
        
            let latitudeConverter = coordinatesConverter(data.city.coord.lat);
            let longitudeConverter = coordinatesConverter(data.city.coord.lon);
            latitude.innerHTML = `Latitude: ${latitudeConverter}`;
            longitude.innerHTML = `Longitude: ${longitudeConverter}`;
        })
    }
});

function coordinatesConverter(coordinate){
    let absolute = Math.abs(coordinate);
    let degrees = Math.floor(absolute);
    let minutesNotTruncated = (absolute - degrees) * 60;
    let minutes = Math.floor(minutesNotTruncated);
    return `${degrees}°${minutes}'`;
}

function getDate() {
    let fullDate = new Date();
    let weekArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let weekFullArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday'];
    let monthArr =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let week = weekArr[fullDate.getDay()];
    tomorrowDay.innerHTML = weekFullArr[fullDate.getDay() + 1];
    afterTomorrowDay.innerHTML = weekFullArr[fullDate.getDay() + 2];
    afterAfterTomorrowDay.innerHTML = weekFullArr[fullDate.getDay() + 3];
    let day = fullDate.getDate();
    let month = monthArr[fullDate.getMonth()];
    let hours = fullDate.getHours();
    let minutes = (fullDate.getMinutes() < 10? '0' : '') + fullDate.getMinutes();
    let seconds = (fullDate.getSeconds() < 10? '0' : '') + fullDate.getSeconds();
    let nowDate = `${week} ${day} ${month}  ${hours}:${minutes}:${seconds}`;
    currentDateTime.innerHTML = nowDate;
    setTimeout(getDate, 1000);
}
getDate();

// function переписать тут, а вызвать в then!