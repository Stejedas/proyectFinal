import { Col, Container, Row, Stack } from 'react-bootstrap';
import './style.css'
import { useTranslation } from 'react-i18next'
import { useContext } from 'react'
import { ThemingContext } from '../mult-theming/theming.context'



function FooterPage(){
    const [t] = useTranslation("global");
   const [theming] = useContext(ThemingContext)



    return (

<Row className='footer bg-light p-0 m-0'>
<Col xs={12} className='p-0 m-0'>

  <footer className="m-0 p-0" style={{'background-color': `${theming.blueD.code}`, color: `${theming.whiteBlack.code}`, margin: "0px"}}>

    <ul className="nav justify-content-center border-botton">
      <li className="nav-item"><a href="http://localhost:3000/home" className="nav-link px-2 " style={{ color: `${theming.whiteBlack.code}`}}>{t('footer.x1')}</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 " style={{ color: `${theming.whiteBlack.code}`}}>{t('footer.x2')}</a></li>
      <li className="nav-item"><a href="https://www.freeprivacypolicy.com/live/2d693b8d-c8b6-4843-b2d7-2085e1bd81f8" className="nav-link px-2 " style={{ color: `${theming.whiteBlack.code}`}}>{t('footer.x3')}</a></li>
      <li className="nav-item"><a href="#" className="nav-link x-2 " style={{ color: `${theming.whiteBlack.code}`}}>{t('footer.x4')}</a></li>
    
    </ul>
 
   
    <p className="text-center m-0 p-2 h-100 ">© 2022 The Last Table, Inc</p>
  </footer>
  </Col>
  
  </Row>

    )
}


export default FooterPage;