const apiKey = "JYZCJrGHnkXRB8IE7zK5lvxwxijEgfqO";

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

const getCurrentConditions = async (key) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/${key}`;
    const query = `?apikey=${apiKey}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

// getCity('city')
//     .then(data=> {
//         return getCurrentConditions(data.Key);
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err));