const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forcast();

const updateUI = (data) => {

    const cityDetails = data.cityDetails;
    const weather = data.weather;
    

    // update details templait
    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Imperial.Value}</span>
        <span>&deg;F</span>
    </div>
    `;

    // update night/day & icons img
    const iconSrc = `./img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)

    let timeSrc = weather.IsDayTime ? "./img/day.svg" : './img/night.svg';

    time.setAttribute('src', timeSrc);

    // remove display-none if there
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}

cityForm.addEventListener("submit", e => {
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update ui with city data
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    // set local storage
    localStorage.setItem('city', city);
});

if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem("city"))
        .then(data => updateUI(data))
        .catch(err => console.log(err))
}



// older code

// const updateCity = async (city) => {
    
//     const cityDetails = await getCity(city);
//     const weather = await getWeather(cityDetails.Key);

//     return {
//         cityDetails,
//         weather
//     };
    
// };