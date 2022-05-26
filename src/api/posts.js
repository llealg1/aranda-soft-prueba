import axios from 'axios';

const apiToken = '0c9a48164ce84eaabfaf9d6f0b486d44';
const instance = axios.create({
  baseURL: `https://api.spoonacular.com/`,
  headers: {
    "Content-type": "application/json",
  }
});

export const getRecipesForType = async(type) => {
  const {data} = await instance.get(`recipes/complexSearch?apiKey=${apiToken}&?type=${type}`);
  console.log(data)
  return data;
}

export const getRecipesForName = async(name) => {
  const {data} = await instance.get(`recipes/complexSearch?apiKey=${apiToken}&?query=${name}`);
  return data;
}
export const getRecipeInfo = async(id) => {
  const {data} = await instance.get(`recipes/${id}/information??apiKey=${apiToken}&includeNutrition=false`);
  return data;
}