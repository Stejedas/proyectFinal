import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import MultiLenguage from '../multi-language'
import logo from '../../Assets/Home/Carrusell/logo.png'
import ThemingSelector from '../mult-theming/theamingSelector'
import { Offcanvas, Form, FormControl, Button, Row, Col, Accordion } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react'
import { ThemingContext } from '../mult-theming/theming.context'
import './style.css'

function HeaderSupp(props) {

    const [theming] = useContext(ThemingContext); 

    const [t] = useTranslation("global");
    let navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('token')
        navigate('/home')
    }

    console.log(props)

    return ( 
        <Navbar bg={theming.greyN.color} style={{ height: '100px' }} expand={false} className='p-0 m-0'>
            {/* NORMAL HEADER */}
            <Container fluid className='d-flex align-items-center p-0 m-0'>
                <Navbar.Brand style={{ width: '100px' }} className='d-flex justify-content-center align-items-center'> <img
                    alt=""
                    src={logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top mx-2 p-0"
                /> </Navbar.Brand>
                 <Navbar.Toggle aria-controls="offcanvasNavbar"  className='m-0 mx-md-4 d-flex flex-row align-items-center px-0'  style={{ width: '200px', color: `${theming.whiteBlack.code}` }}>
                                            <img
                                                alt=""
                                                src="https://img.freepik.com/vector-gratis/logo-restaurante-retro_23-2148474404.jpg"
                                                width="60"
                                                height="60"
                                                className="d-inline-block align-top p-1 mx-1 rounded-circle border border-2 border-dark" 
                                            />
                                            <div className='d-flex flex-column mx-2 justify-content-center align-items-center'>
                                            <strong className='pt-2'>{t('header.x1')}</strong>
                                            <p className='pt-1 fs-9' >{props.userData?.comercialName}</p>
                                            </div>
                </Navbar.Toggle>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    
                >
                    {/* MENU MODAL FORMAT FROM XS */}
                    <Container style={{color: `${theming.whiteBlack.code}`, 'background-color': `${theming.greyN.code}`}}>
                  
                        <div >
                            <Offcanvas.Header  >
                                <Container  style={{color: `${theming.whiteBlack.code}` }}>
                                    <Row>
                                        <Col xs={{ span: 4, offset: 4 }}>
                                            <img
                                                alt=""
                                                src={"https://img.freepik.com/vector-gratis/logo-restaurante-retro_23-2148474404.jpg"}
                                                width="100"
                                                height="100"
                                                className="d-inline-block align-top mt-5 p-0 rounded-circle"
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Offcanvas.Title id="offcanvasNavbarLabel" className='mt-5'><h2 className='text-center'>{props.userData?.comercialName}</h2></Offcanvas.Title>

                                        </Col>
                                    </Row>
                                </Container>
                            </Offcanvas.Header>


                            <Offcanvas.Body >

                                <Row>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header style={{color: `${theming.whiteBlack.code}`, 'background-color': `${theming.greyD.color}`}}>
                                            {t('supplierMenu.x1')}</Accordion.Header>
                                            <Accordion.Body style={{color: `${theming.whiteBlack.code}`, 'background-color': `${theming.greyL.code}`}}>
                                                <p>{t('supplierMenu.x4')}{props.userData?.address}</p>
                                                <p>{t('supplierMenu.x2')}{props.userData?.postalTown}</p>
                                                <p>{t('supplierMenu.x3')}{props.userData?.town}</p>

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header style={{color: `${theming.whiteBlack.code}`, 'background-color': `${theming.greyD.code}`}}>{t('supplierMenu.x5')}</Accordion.Header>
                                            <Accordion.Body style={{color: `${theming.whiteBlack.code}`, 'background-color': `${theming.greyL.code}`}}>
                                                <p>{t('supplierMenu.x6')}{props.userData?.comercialName}</p>
                                                <p>{t('supplierMenu.x7')}{props.userData?.nameCompany}</p>
                                                <p>{t('supplierMenu.x8')}{props.userData?.cif}</p>


                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header style={{color: `${theming.whiteBlack.code}`, 'background-color': `${theming.greyD.code}`}}> {t('supplierMenu.x9')}</Accordion.Header>
                                            <Accordion.Body style={{color: `${theming.whiteBlack.code}`, 'background-color': `${theming.greyL.code}`}}>
                                                <p>{t('supplierMenu.x10')}{props.userData?.email}</p>
                                                <p>{t('supplierMenu.x11')}{props.userData?.contactPerson}</p>
                                                <p>{t('supplierMenu.x12')}{props.userData?.firstNum}</p>
                                                <p>{t('supplierMenu.x14')}{props.userData?.secondNum}</p>

                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Row>




                            </Offcanvas.Body>
                        </div>
                    </Container>
                    <Container className='pt-5 h-100' style={{color: `${theming.whiteBlack.code}`, 'background-color': `${theming.greyN.code}`}}>
                    <Row>
                        <Col xs={12} className=" w-100 d-flex justify-content-center">
                            <Button size="lg" classname="w-100 "  style={{color: `${theming.whiteBlack.code}`, 'background-color': `${theming.greyL.code}`}} onClick={handleLogOut}>{t('supplierMenu.x13')}</Button>
                        </Col>
                    </Row>
                    </Container>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    )
}

export default HeaderSupp;