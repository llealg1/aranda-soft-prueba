import React from 'react'
import Tarjet from './Tarjet';
import { usePostsForType } from "../../hook/usePosts";

  
const Carousel = ({type, name = "Nuevas Recetas"}:any) => {

  
  const { data, error, isLoading }:any =  usePostsForType(type);

  return (
    <div className="middle">
      <div className="middleTitle">{name}</div>
      <div className="contCarrusel">
        <ul id="carruselini" className="carrusel">
          {!isLoading ? data?.results.map( (act:any) => <Tarjet key={act.id} info={act}/>): 'Loading...'}
          
        </ul>
        <ul id="carruselfin" className="carrusel">
        </ul>
      </div>
    </div>
  )
}

export default Carousel;