const cityForm = document.querySelector('.change-location');

const updateCity = async (city) => { 
    const cityDetails = await getCity(city);
    const weather = await getCurrentConditions(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weather: weather
    }
};


cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();

    cityForm.reset();

    updateCity(city)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
});