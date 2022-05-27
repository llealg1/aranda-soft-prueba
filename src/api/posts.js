import axios from 'axios';

//INSERTAR TOKEN
const apiToken = '1577d035e88544238a8c61bdba1a59cc';
const instance = axios.create({
  baseURL: `https://api.spoonacular.com/`,
  headers: {
    "Content-type": "application/json",
  }
});

export const getRecipesForType = async(type) => {
  const {data} = await instance.get(`recipes/complexSearch?apiKey=${apiToken}&type=${type}&number=4`);
  console.log(data)
  return data;
}

export const getRecipesForName = async(name) => {
  const {data} = await instance.get(`recipes/complexSearch?apiKey=${apiToken}&?query=${name}`);
  return data;
}
export const getRecipeInfo = async(id) => {
  const {data} = await instance.get(`recipes/${id}/information?apiKey=${apiToken}`);
  console.log(data)
  return data;
}