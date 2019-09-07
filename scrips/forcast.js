const key = 'Get your own key';

// get weather info
const getWeather = async (id) => {
    const baseURL = `http://dataservice.accuweather.com/currentconditions/v1/`;
    const query = `${id}?apikey=${key}`;

    const res = await fetch(baseURL + query);
    const data = await res.json();

    return data[0];
    

};


// get city info
const getCity = async (city) => {

    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const res = await fetch(baseURL+query);
    const data = await res.json();

    return data[0];
    
};




