import favorite from '../../../assets/icons/ic-favorite.svg'
import heart from '../../../assets/icons/ic_star.svg'
import portion from '../../../assets/icons/ic_portion.svg'
import time from '../../../assets/icons/ic_time.svg'
import chef from '../../../assets/icons/ic_chef.svg'
import React, { useRef, useState } from 'react';
import { useInfoRecipe } from '../../../hook/usePosts'
const Tarjet = ({info}:any) => {

  const [first, setfirst] = useState(true);

  const handleHover = () =>{
    setfirst(false)
  } 

  const handleHover1 = () =>{
    setfirst(true)
  }

  
  return(<>
  <li className="tarjet"  onMouseOver={()=> handleHover()} onMouseOut={ ()=>handleHover1()} >
    <div className="plate" style={{backgroundImage: `url('${info?.image}')`}}></div>
    {
        first?
        <div  className="normalTarjet" id={`normal${info?.id}`}>
            <div className="textFood">
                <span className="food">Ojingeo</span>
                <span className="foodDesc">Muchim</span>
            </div>
        <div className="score">
            <div className='helperHeart'>
                <img className="heart" src={heart}/>
                <span>5</span>
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
                    <span className="textHover">4 raciones</span>
                </div>
            <div className="descriptionHover">
                <img className="imgHover" src={time}/>
                <span className="titTextHover">Tiempo de preparaci&oacute;n</span>
                <span className="textHover">10 minutos</span>
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
  </>)
}

export default Tarjet;
