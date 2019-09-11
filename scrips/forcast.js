class Forcast{
    constructor(){
        this.key = 'Enter api key here';
        this.weatherURI = `http://dataservice.accuweather.com/currentconditions/v1/`;
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);
    
        return {
            cityDetails,
            weather  
        }
    }

    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const res = await fetch(this.cityURI+query);
        const data = await res.json();
        return data[0];
    }

    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const res = await fetch(this.weatherURI + query);
        const data = await res.json();
        return data[0];
    }
}


// older code
// const key = '';

// get weather info
// const getWeather = async (id) => {
//     const baseURL = `http://dataservice.accuweather.com/currentconditions/v1/`;
//     const query = `${id}?apikey=${key}`;

//     const res = await fetch(baseURL + query);
//     const data = await res.json();

//     return data[0];
    

// };


// get city info
// const getCity = async (city) => {

//     const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;

//     const res = await fetch(baseURL+query);
//     const data = await res.json();

//     return data[0];
    
// };




