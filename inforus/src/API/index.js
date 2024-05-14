import axios from "axios";
const baseUrl = 'https://freetestapi.com/api/v1/countries'

export async function getCountries(){
    return axios({
        method: 'GET',   
        url: baseUrl,        
      });
  };
export async function getCountry(id){
    return axios({
        method: 'GET',
        url: baseUrl + `/${id}`,
      });
  };
export async function searchCountry(name){
    return axios({
        method: 'GET',
        url: baseUrl + `?search=${name}`,
      });
  };

