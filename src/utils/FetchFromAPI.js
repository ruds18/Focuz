import axios from 'axios'

const BASE_URL="https://youtube-v3-alternative.p.rapidapi.com";

const options ={
  url : BASE_URL,
  params: {geo: 'US', lang: 'en'},
  headers: {
    'X-RapidAPI-Key': '8f77546800msh0e1c359299d22aap162e6bjsna1e49a2e2983',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

export  const FetchFromAPI = async(url)=>{
    const {data}  = await axios.get(`${BASE_URL}/${url}` , options);
    return data;
}