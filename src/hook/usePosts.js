import { useQuery } from "react-query";
import { getRecipesForType, getRecipeInfo } from "../api/posts";

export const usePostsForType = (type) => {
  return useQuery([`post${type}`],() => getRecipesForType(type));
}

export const useInfoRecipe = (id) => {
  return useQuery([`name${id}`],() => getRecipeInfo(id));
}

