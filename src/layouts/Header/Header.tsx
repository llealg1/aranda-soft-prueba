const Header = () => {
  return(
    <div className="headForm">
      <div className="header">
        <div className="title">
          <span className="text1">Recipe<span className="text2">App</span></span>
        </div>
        <div className="menuHead">
          <ul>
            <li className="selected">Home</li>
            <li>Vegetarianos</li>
            <li>Platos Principales</li>
            <li>Tortas</li>
            <li>Comida R&aacute;pida</li>
            <li>Men&uacute; Ni&ntilde;os</li>
            <li>Sopas</li>
          </ul>
        </div>
        <div className="icoHome"></div>
      </div>
    </div>
  )
}

export default Header;