let tokenForGeolocation = 'e5b294d425e60d';
let tokenForWeather = '07eb68c0596b4dd2801b11aab9c9e362';

let currentCity = document.getElementById('location');
let dataTime = document.getElementById('data-time');


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
});

function getDate() {
    let fullDate = new Date();
    let weekArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let monthArr =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let week = weekArr[fullDate.getDay()];
    let day = fullDate.getDate();
    let month = monthArr[fullDate.getMonth()];
    let hours = fullDate.getHours();
    let minutes = (fullDate.getMinutes() < 10? '0' : '') + fullDate.getMinutes();
    let seconds = (fullDate.getSeconds() < 10? '0' : '') + fullDate.getSeconds();
    let nowDate = `${week} ${day} ${month}  ${hours}:${minutes}:${seconds}`;
    dataTime.innerHTML = nowDate;
    setTimeout(getDate, 1000);
}
getDate();

// function писать тут, а вызывать в then!