let res = document.querySelector('.res');

let searchBtn = document.querySelector('.btn-search');

let city = document.querySelector('.city-input');

document.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
       weather();
    }
 }, false);

let weather = () => {
    let cityValue = city.value;

    if(cityValue.length === 0){
        res.innerHTML = `<p>Insira um nome de cidade </p>`
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;

        city.value ="";

        fetch(url).then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            res.innerHTML = 
            `<h1>${data.name}</h1>
            <div class="weather_info">
                <h4 class="weather">${data.weather[0].main}</h4>
                <h4 class="weather_desc">${data.weather[0].description}</h4>
            </div>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h2>${data.main.temp}&#176;</h2>
            <div class="temp-container">
                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${data.main.temp_min}&#176;</h4>
                </div>
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${data.main.temp_max}&#176;</h4>
                </div>
            </div>
                <div class="weather-search">
                    <p>Você pesquisou por <span>${data.name}</span>!</p>
                </div>
            `;
        })
        .catch(() => {
            res.innerHTML = `<p> Cidade não encontrada :( </p>`;
        });
    }
};

searchBtn.addEventListener("click", weather);
window.addEventListener("load", weather);