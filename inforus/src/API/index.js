import axios from "axios";
const baseUrl = 'https://freetestapi.com/api/v1/countries'

export async function getCountries(){
    return axios({
        method: 'GET',
        // url: baseUrl + '?limit=20',        
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


// export async function queryRequest(query: string){
//     return fetch(baseUrl, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem('token')}`
//       },
//       body: query
//     });
//   };

  

// interface AuthGraph {
//     data: Object,
//     signin: Object,
//     token: string,
//     user: Object,
//     username: string,
//     email: string

     
//   }

// export async function getGQLChart(query: string) {
//     return axios({
//         method: 'POST',
//         headers: {
//             'Content-Type' : 'application/json'
//         },
//         url: baseUrl,
//         body: query
//     })
// } 