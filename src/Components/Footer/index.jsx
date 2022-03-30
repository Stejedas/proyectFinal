import { Col, Container, Row, Stack } from 'react-bootstrap';
import './style.css'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap';

function FooterPage(){
    const [t] = useTranslation("global");

    return (

<Row className='footer bg-light'>
<Col xs={12}>

  <footer className="">

    <ul className="nav justify-content-center border-botton">
      <li className="nav-item"><a href="http://localhost:3000/home" className="nav-link px-2 text-muted">{t('footer.x1')}</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">{t('footer.x2')}</a></li>
      <li className="nav-item"><a href="https://www.freeprivacypolicy.com/live/2d693b8d-c8b6-4843-b2d7-2085e1bd81f8" className="nav-link px-2 text-muted">{t('footer.x3')}</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">{t('footer.x4')}</a></li>
    
    </ul>
 
   
    <p className="text-center text-muted">© 2022 The Last Table, Inc</p>
  </footer>
  </Col>
  
  </Row>

    )
}


export default FooterPage;