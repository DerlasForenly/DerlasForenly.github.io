let city = "Zin'kiv";

let city_label = document.getElementById('city_id');
city_label.textContent = city;
let days = document.getElementsByClassName('day');
let dates = document.getElementsByClassName('date');
let temp = document.getElementsByClassName('temp');
let images = document.getElementsByTagName('img');
let APIkey = "309209be749b24fa54485cdb8b83d365";
let ref = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`;
let list;

let responce = fetch(ref).then(resp => {return resp.json()}).then(data => {
    list = data.list;
    for (let i = 0; i < days.length; i++) {
        let t = Math.round(list[i * 8].main.temp - 273);
        let t_text = "";
        if (t >= 0) t_text += "+" + t;
        else t_text += t;
        temp[i].textContent = t_text + "°";
        dates[i].textContent = formatDate(list[i * 8].dt_txt);
        images[i].src = "assets/images/" + getWeather(list[i * 8].weather[0].main);
    }
});

function formatDate(date) {
    return date.slice(8, 10) + "." + date.slice(5, 7);
}

function getWeather(t) {
    if (t == "Thunderstorm" || t == "Tornado") return "blizzard.jpg";
    if (t == "Clouds") return "clouds.png";
    if (t == "Clear") return "sun.jpg";
    if (t == "Rain" || t == "Drizzle") return "rain.png";
    if (t == "Snow") return "snow.jpg"
    return "weather.jpg";
}
