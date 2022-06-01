import axios from 'axios';

//INSERTAR TOKEN
const apiToken = '0db27c5b4f6f431e810260d64f48cef3';
const instance = axios.create({
  baseURL: `https://api.spoonacular.com/`,
  headers: {
    "Content-type": "application/json",
  }
});

export const getRecipesForType = async(type) => {
  const {data} = await instance.get(`recipes/complexSearch?apiKey=${apiToken}&type=${type}&number=4`);
  return data;
}

export const getRecipesForName = async(name) => {
  const {data} = await instance.get(`recipes/complexSearch?apiKey=${apiToken}&?query=${name}`);
  return data;
}
export const getRecipeInfo = async(id) => {
  const {data} = await instance.get(`recipes/${id}/information?apiKey=${apiToken}`);
  return data;
}

