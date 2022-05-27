import { useQuery } from "react-query";
import { getRecipesForType, getRecipeInfo } from "../api/posts";

export const usePostsForType = (type) => {
  return useQuery([`post${type}`],() => getRecipesForType(type));
}

export const useInfoRecipe = (id1) => {
  return useQuery([`name${id1}`],() => getRecipeInfo(id1));
}

