import { useQuery } from "react-query";
import { getRecipesForType, getRecipeInfo } from "../api/posts";

export const usePostsForType = (type) => {
  return useQuery(['post'],() => getRecipesForType(type));
}

export const useInfoRecipe = (id) => {
  return useQuery(['post'],() => getRecipeInfo(id));
}

