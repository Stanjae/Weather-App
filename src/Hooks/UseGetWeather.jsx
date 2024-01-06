import axios from 'axios';


export const API_KEY = '4dae413b337d4b48819183243230311'

export const GetWeather = async(query) => {
        try{
                const flooring = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=yes`);
                const weather = await flooring.data;
                return { weather}
        }catch(err) {
                alert('wrong weather params')
        }

}


