import footeSvg from '../../assets/Grupo_7610.png'

const Footer = () => {
  return(
    <>
      <div className="footer">
        <div className="textfooter"><span>Con el patrocinio de</span></div>
        <img src={footeSvg} alt="footer img" className="imgFooter"/>
      </div>
    </>
  )
}

export default Footer