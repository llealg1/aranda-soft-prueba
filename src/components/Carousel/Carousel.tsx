import React from 'react'
import Tarjet from './Tarjet';
import { usePostsForType } from "../../hook/usePosts";

const Carousel = () => {

  
  const { data } =  usePostsForType('vegan');

  return (
    <div className="middle">
      <div className="middleTitle">Nuevas Recetas</div>
      <div className="contCarrusel">
        <ul id="carruselini" className="carrusel">
          <Tarjet info={data?.results[1]}/>
          <Tarjet info={data?.results[2]}/>
          <Tarjet info={data?.results[3]}/>
          <Tarjet info={data?.results[4]}/>
        </ul>
        <ul id="carruselfin" className="carrusel">
    
        </ul>
      </div>
    </div>
  )
}

export default Carousel;