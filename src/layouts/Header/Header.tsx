import { NavLink,  BrowserRouter as Router } from "react-router-dom";
import Navigation from "../../navigation/Navigation";
import { Suspense } from "react";



const Header = () => {
  return(
    <div className="headForm">
      <div className="header">
        <div className="title">
          <span className="text1">Recipe<span className="text2">App</span></span>
        </div>
        <div className="menuHead">
          <ul>
            <li><NavLink to="/" className={({isActive}) => isActive? 'selected': ''}>Home</NavLink></li>
            <li><NavLink to="/vegetarianos" className={({isActive}) => isActive? 'selected': ''}>Vegetarianos</NavLink></li>
            <li><NavLink to="/platos_principales" className={({isActive}) => isActive? 'selected': ''}>Platos Principales</NavLink></li>
            <li><NavLink to="/tortas" className={({isActive}) => isActive? 'selected': ''}>Tortas</NavLink></li>
            <li><NavLink to="/comida_rapida" className={({isActive}) => isActive? 'selected': ''}>Comida R&aacute;pida</NavLink></li>
            <li><NavLink to="/menu_kids" className={({isActive}) => isActive? 'selected': ''}>Men&uacute; Ni&ntilde;os</NavLink></li>
            <li><NavLink to="/sopas" className={({isActive}) => isActive? 'selected': ''}>Sopas</NavLink></li>
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
  )
}

export default Header;