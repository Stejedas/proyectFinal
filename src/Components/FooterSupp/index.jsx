import { Col, Container, Row, Stack } from 'react-bootstrap';
import './style.css'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-bootstrap';
import MultiLenguage from '../multi-language';
import ThemingSelector from '../mult-theming/theamingSelector';
import { useContext } from 'react'
import { ThemingContext } from '../mult-theming/theming.context'

function FooterSup() {
  const [t] = useTranslation("global");
  const [theming] = useContext(ThemingContext);

  return (

    <Row className='footer bg-light m-0 p-0' style={{ 'color': `${theming.whiteBlack.color}`, 'background-color': `${theming.greyN.code}` }}>
      <Col xs={3} md={3} xl={2} className='p-0'>
        <div className='d-flex align-items-center justify-content-center h-100 m-0' style={{ 'color': `${theming.whiteBlack.color}`, 'background-color': `${theming.greyN.code}` }}>
          <ThemingSelector props={[theming.greyN.code, theming.whiteBlack.code ]}></ThemingSelector>

        </div>
      </Col>
      <Col xs={6} md={6} xl={8} style={{ 'color': `${theming.whiteBlack.color}`, 'background-color': `${theming.greyN.code}` }}>


        <footer style={{ 'color': `${theming.whiteBlack.color}`, 'background-color': `${theming.greyN.code}` }}>

          <ul className="nav justify-content-center border-botton">
            <li className="nav-item"><a href="http://localhost:3000/home" className="nav-link px-2 text-muted" ><p className='m-0 p-0' style={{ 'color': `${theming.whiteBlack.code}` }}>{t('footer.x1')}</p></a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"><p className='m-0 p-0' style={{ 'color': `${theming.whiteBlack.code}` }}>{t('footer.x2')}</p></a></li>
            <li className="nav-item"><a href="https://www.freeprivacypolicy.com/live/2d693b8d-c8b6-4843-b2d7-2085e1bd81f8" className="nav-link px-2 text-muted"><p className='m-0 p-0' style={{ 'color': `${theming.whiteBlack.code}` }}>{t('footer.x3')}</p></a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"><p className='m-0 p-0' style={{ 'color': `${theming.whiteBlack.code}` }}>{t('footer.x4')}</p></a></li>

          </ul>


          <p className="text-center" style={{ 'color': `${theming.whiteBlack.code}` }}> © 2022 The Last Table, Inc</p>
        </footer>
      </Col>
      <Col xs={3} md={3} xl={2} className="p-0">
        <Stack className='d-flex align-items-center justify-content-center h-100' style={{ 'color': `${theming.whiteBlack.color}`, 'background-color': `${theming.greyN.code}` }}>
          <MultiLenguage props={[theming.greyN.code, theming.whiteBlack.code ]}></MultiLenguage>
        </Stack>
      </Col>

    </Row>

  )
}




export default FooterSup;