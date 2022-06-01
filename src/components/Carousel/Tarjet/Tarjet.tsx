import favorite from '../../../assets/icons/ic-favorite.svg'
import heart from '../../../assets/icons/ic_star.svg'
import portion from '../../../assets/icons/ic_portion.svg'
import time from '../../../assets/icons/ic_time.svg'
import chef from '../../../assets/icons/ic_chef.svg'
import React, { useEffect, useRef, useState } from 'react';
import { useInfoRecipe } from '../../../hook/usePosts'

const Tarjet = ({info}:any) => {

const { data, error, isLoading }:any =  useInfoRecipe(info.id);



  const [first, setfirst] = useState(true);

  const handleHover = () =>{
    setfirst(false)
  } 

  const handleHover1 = () =>{
    setfirst(true)
  }

  return(<>{
  !isLoading?  
  <li className="tarjet"  onMouseOver={()=> handleHover()} onMouseOut={ ()=>handleHover1()} >
    <div className="plate" style={{backgroundImage: `url('${info?.image}')`}}></div>
    {
        first?
        <div  className="normalTarjet" id={`normal${info?.id}`}>
            <div className="textFood">
                <span className="food">{data.title.split(" ")[0] + " " + data.title.split(" ")[1] }</span>
                <span className="foodDesc">{data.dishTypes[0]}</span>
            </div>
        <div className="score">
            <div className='helperHeart'>
                <img className="heart" src={heart}/>
                <span>{data.aggregateLikes}</span>
            </div>
            <img className="favorite" src={favorite}/>
        </div>
    </div>
        :
        <div id={`hidden${info?.id}`} className="divhover" >
            <div className="hoverTarjet">
                <div className="descriptionHover">
                    <img className="imgHover" src={portion}/>
                    <span className="titTextHover">Tama&ntilde;o de la porci&oacute;n</span>
                    <span className="textHover">{data.servings} raciones</span>
                </div>
            <div className="descriptionHover">
                <img className="imgHover" src={time}/>
                <span className="titTextHover">Tiempo de preparaci&oacute;n</span>
                <span className="textHover">{data.readyInMinutes} minutos</span>
            </div>
            <div className="descriptionHover">
                <img className="imgHover" src={chef}/>
                <span className="titTextHover">Dificultad</span>
                <span className="textHover">f&aacute;cil</span>
            </div>
        </div>
    </div>
    }
  </li> 
  : ""
  }</>)
}

export default Tarjet;
