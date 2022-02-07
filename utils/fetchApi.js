import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '2643cdc108msh7df01614c0e7f40p1e91e4jsn919b0c610f8f' ,
    },
  });
    
  return data;
}