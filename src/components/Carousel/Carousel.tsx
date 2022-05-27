import React from 'react'
import Tarjet from './Tarjet';
import { useInfoRecipe, usePostsForType } from "../../hook/usePosts";
import { useQueries } from 'react-query';
  
const Carousel = ({type}:any) => {

  
  const { data, error, isLoading }:any =  usePostsForType(type);

  return (
    <div className="middle">
      <div className="middleTitle">Nuevas Recetas</div>
      <div className="contCarrusel">
        <ul id="carruselini" className="carrusel">
          {!isLoading && data?.results.map( (act:any) => <Tarjet key={act.id} info={act}/>)}
          
        </ul>
        <ul id="carruselfin" className="carrusel">
    
        </ul>
      </div>
    </div>
  )
}

export default Carousel;