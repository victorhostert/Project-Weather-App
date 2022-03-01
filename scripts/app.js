const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateCity = async (city) => { 
    const cityDetails = await getCity(city);
    const weather = await getCurrentConditions(cityDetails.Key);

    return {
        cityDetails,
        weather
    }
};

const updateUI = (data) => {
    // destructuring properties
    const { cityDetails, weather } = data;

    //updates the template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    //checks if card class contains d-none
    if (card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    //update the day or night icons, as well as weather conditions icon

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src', timeSrc);

    icon.setAttribute('src', `img/icons/${weather.WeatherIcon}.svg`);
};


cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();

    cityForm.reset();

    updateCity(city)
    .then(data => {
        updateUI(data);
    })
    .catch(error => {
        console.log(error);
    });
});
