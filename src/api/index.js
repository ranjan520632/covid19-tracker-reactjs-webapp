import axios from 'axios';

const url = "https://covid19.mathdro.id/api";
const url2 = "https://covid19.mathdro.id/api/daily";
const url3 = "https://covid19.mathdro.id/api/countries";
export const fetchData = async (country) => {
      let changeableUrl =url;
      
    if(country){
        changeableUrl = url3+'/'+country;
    }
    try{
        const { data: {confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        return { confirmed: confirmed, recovered: recovered, deaths: deaths, lastUpdate: lastUpdate };
    } catch(error){
    }
}

export const fetchDailyData = async () => {
    try {
        const  {data}  = await axios.get(url2);
        
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
        // console.log(data);
    }
    catch(error){

    }
}

export const fetchCountries = async()=>{
    try{
        const {data: {countries}} = await axios.get(url3);
        return countries.map((country)=> country.name);
        // console.log(response);
    }
    catch(error){
        console.log(error);
    }
}