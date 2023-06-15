import axios from 'axios'

const BASE_URL="https://youtube-v3-alternative.p.rapidapi.com";

const options ={
  url : BASE_URL,
  params: {geo: 'US', lang: 'en'},
  headers: {
    'X-RapidAPI-Key': '7517f52af2mshdf48e2166a4bc79p10b112jsn7b38e23ed608 ',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

export  const FetchFromAPI = async(url)=>{
    const {data}  = await axios.get(`${BASE_URL}/${url}` , options);
    return data;
}