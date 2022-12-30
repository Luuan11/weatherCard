let res = document.querySelector('.res');

let searchBtn = document.querySelector('.btn-search');

let city = document.querySelector('.city-input');

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
            ` <h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h4>
            <h4 class="desc">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp} &#176;</h1>
            <div class="temp-container">
                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${data.main.temp_min}&#176;</h4>
                </div>
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${data.main.temp_max}&#176;</h4>
                </div>
            </div>`;
        })
        .catch(() => {
            res.innerHTML = `<p> Cidade não encontrada :( </p>`;
        });
    }
};

searchBtn.addEventListener("click", weather);
window.addEventListener('load', weather);