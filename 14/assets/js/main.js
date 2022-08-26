const API_KEY = "a1d61025faff0af71c05d5cf2f5dcd08";
const URL = "https://api.openweathermap.org/data/2.5/weather";
const IMG_URL = "https://openweathermap.org/img/wn/";

async function getWeather(location) {
    const response = await fetch(`${URL}?q=${location}&units=metric&APPID=${API_KEY}`);
    const respJSON = await response.json();
    return respJSON;
}

function setCookie() {
    let date = new Date();
    date.setHours(date.getHours()+2);
    document.cookie = `isUpdated=true;expires=${date.toUTCString()};`;
}

function buildWeather() {
    setCookie();
    $('.weather__block > .block__location').each((i, el) => {
        let block = $(el).parent();
        let location = $(el).text();
        let cels = $(block).find('.weath-info > .cels');
        let ico = $(block).find('.weath-info > img');

        getWeather(location).then((response) => {
            $(cels).html(parseInt(response.main.temp) + '&#8451;');
            $(ico).attr('src', `${IMG_URL}${response.weather[0].icon}.png`);
            $(block).parent().find('.descr').text(`${response.weather[0].description}`);
            localStorage.setItem(
                `${response.name}`,
                JSON.stringify({ temp: response.main.temp, ico: response.weather[0].icon, desc: response.weather[0].description })
            );
        });
    })
}

function buildWeatherByLocal() {
    $('.weather__block > .block__location').each((i, el) => {
        let block = $(el).parent();
        let location = $(el).text();
        let cels = $(block).find('.weath-info > .cels');
        let ico = $(block).find('.weath-info > img');

        let storage = JSON.parse(localStorage.getItem(location));
        $(cels).html(parseInt(storage.temp) + '&#8451;');
        $(ico).attr('src', `${IMG_URL}${storage.ico}.png`);
        $(block).parent().find('.descr').text(`${storage.desc}`);
    })
}

$(function () {
    if (document.cookie.split(';').filter((item) => item.includes('isUpdated=true')).length) {
        buildWeatherByLocal();
    } else {
        buildWeather();
    }
})