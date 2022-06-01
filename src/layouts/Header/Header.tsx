import { NavLink } from "react-router-dom";
import veganSvg from '../../assets/icons/ic_vegetarian.svg'
import mainSvg from '../../assets/icons/ic_main.svg'
import cakeSvg from '../../assets/icons/ic_cake.svg'
import fastFoodSvg from '../../assets/icons/ic_fast-food.svg'
import kidsSvg from '../../assets/icons/ic_kids.svg'
import soupSvg from '../../assets/icons/ic_soup.svg'

interface headerNav {
  idnormal: string
  imgMenu: string
  food: string
  to: string
}

const Header = () => {

const headerNavMap: headerNav[] = [
  { idnormal: "tarhead1", imgMenu: veganSvg, food: "Vegetarianos", to:"/vegetarianos" },
  { idnormal: "tarhead2", imgMenu: mainSvg, food: "Principales", to:"/platos_principales" },
  { idnormal: "tarhead3", imgMenu: cakeSvg, food: "Tortas", to:"/tortas" },
  { idnormal: "tarhead4", imgMenu: fastFoodSvg, food: "C\u00F3mida R\u00E1pida", to:"/comida_rapida" },
  { idnormal: "tarhead5", imgMenu: kidsSvg, food: "Men\u00FA Ni\u00F1os", to:"/menu_kids" },
  { idnormal: "tarhead6", imgMenu: soupSvg, food: "Sopas", to:"/sopas" }
]
/**muestra panel hover */

  return(
    <>
    <div className="headForm">
      <div className="header">
        <div className="title">
          <span className="text1">Recipe<span className="text2">App</span></span>
        </div>
        <div className="menuHead">
          <ul>
            <li><NavLink to="/" className={({isActive}) => isActive? 'selected': ''}>Home</NavLink></li>
            {
              headerNavMap.map( act =><li key={act.idnormal}><NavLink to={act.to} className={({isActive}) => isActive? 'selected': ''}>{act.food}</NavLink></li>)
            }    
          </ul>
        </div>
        <div className="icoHome"></div>
      </div>
      <div className="imgHead">
        <div className="floatText">
          <div className="text1">Recetas</div>
          <div className="text2">para todos</div>
        </div>
      </div>
    </div>

    <div className="menuHeads" id="menuHead2">
        {
          headerNavMap.map( act =>
            <NavLink key={act.idnormal} to={act.to} className={({isActive}) => isActive? 'selected': ''}>
            <div className="tarjetMenu"> 
              <img className="imgMenu" src={act.imgMenu}/>
              <span className="foodMenu">{`${act.food}`}</span>
            </div> 
            </NavLink>
          )
        }
    </div>
  </>
  )
}

export default Header;