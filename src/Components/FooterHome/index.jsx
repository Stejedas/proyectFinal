import { Col, Container, Row, Stack } from 'react-bootstrap';
import './style.css'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { ThemingContext } from '../mult-theming/theming.context'


function FooterHome(){
    const [t] = useTranslation("global");
    let navigate = useNavigate();
    const [theming] = useContext(ThemingContext); 

    const handleNewSupplier = e => {
      e.preventDefault()
      navigate('/singInCompany')
    }

    return (
<Container className="p-0 m-0 fluid">
<Row className='footer bg-light p-0 m-0'>
<Col xs={10} className='m-0 p-0' style={{'background-color': `${theming.blueD.code}`}}>

  <footer className="m-0 p-0" style={{color: `${theming.whiteBlack.code}`, 'background-color': `${theming.blueD.code}`}}>

    <ul className="nav justify-content-center border-botton p-0">
      <li className="nav-item"><a href="http://localhost:3000/home" className="nav-link px-2" style={{color: `${theming.whiteBlack.code}`}}>{t('footer.x1')}</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2" style={{color: `${theming.whiteBlack.code}`}}>{t('footer.x2')}</a></li>
      <li className="nav-item"><a href="https://www.freeprivacypolicy.com/live/2d693b8d-c8b6-4843-b2d7-2085e1bd81f8" className="nav-link px-2" style={{color: `${theming.whiteBlack.code}`}}>{t('footer.x3')}</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2" style={{color: `${theming.whiteBlack.code}`}}>{t('footer.x4')}</a></li>
    
    </ul>
 
   
    <p className="text-center" style={{color: `${theming.whiteBlack.code}`}}>© 2022 The Last Table, Inc</p>
  </footer>
  </Col>
  <Col xs={2} className='d-flex align-items-center m-0 p-0' style={{color: `${theming.whiteBlack.code}`, 'background-color': `${theming.blueD.code}`}}>
  <Button variant="secondary" onClick={handleNewSupplier} className="w-100"><p className='m-0' style={{color: `${theming.whiteBlack.code}`}}>{t('footer.x5')}</p><p className='m-0 p-0' style={{color: `${theming.whiteBlack.code}`}}>{t('footer.x6')}</p></Button>{' '}
  </Col>
  </Row>
</Container>
    )
}


export default FooterHome;