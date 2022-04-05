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
import './style.css'
import { useEffect } from 'react'
import { getUserData, GetAllBooks } from '../../APP/index.jsx'
import { useState } from 'react'
import { useContext } from 'react'
import { ThemingContext } from '../mult-theming/theming.context'


function HeaderCustom(props) {

    const token = localStorage.getItem('token');
    const [t] = useTranslation("global");
    let navigate = useNavigate();

    const [dataUser, uploadDataUser] = useState()
    const [booksUser, uploadBooksUser] = useState()

    const [theming] = useContext(ThemingContext);

    useEffect(async ()=> {
       
       await getUserData(token).then(e => uploadDataUser(e))
     
        console.log('hola')
    }, [])

    useEffect(async() =>{
        await GetAllBooks(token).then(e => uploadBooksUser(e))
    }, [dataUser])

    const handleLogOut = () => {
        localStorage.removeItem('token')
        navigate('/home')
    }
    console.log(dataUser)
    

    return (
        <Navbar bg={theming.blueD.color} style={{ height: '80px' }} expand={false} className='p-0 m-0'>
            {/* NORMAL HEADER */}
            <Container fluid className='d-flex align-items-center p-0 m-0'>
            
                <Navbar.Brand> <img
                    alt=""
                    src={logo}
                    width="60"
                    height="60"
                    className="m-0 mx-md-4 d-flex align-top p-0"
                   
                /> </Navbar.Brand>
                 <Navbar.Text  style={{color: `${theming.whiteBlack.code}`, 'font-size': '25px'}}>
      The Last Table
      </Navbar.Text>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className='m-0 mx-md-4 d-flex flex-row align-items-center px-0'  style={{ 'color': `${theming.whiteBlack.color}`, 'background-color': `${theming.greyN.code}` }} >
                                            <img
                                                alt=""
                                                src="http://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
                                                width="60"
                                                height="60"
                                                className="d-flex align-top p-1 mx-1 rounded-circle border border-2 border-dark" 
                                            />
                                            <div className='d-flex flex-column mx-2 justify-content-center align-items-center'>
                                            <strong className='pt-2' style={{ 'color': `${theming.whiteBlack.code}`}}>{t('header.x1')}</strong>
                                            <p className='pt-2 fs-10' style={{ 'color': `${theming.whiteBlack.code}`}}>{dataUser?.email}</p>
                                            </div>
                </Navbar.Toggle>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    
                >
                    {/* MENU MODAL FORMAT FROM XS */}
                    <Container  style={{ 'color': `${theming.whiteBlack.color}`, 'background-color': `${theming.blueN.code}` }} >
                  
                        <div>
                            <Offcanvas.Header >
                                <Container>
                                    <Row>
                                        <Col xs={{ span: 4, offset: 4 }}>
                                            <img
                                                alt=""
                                                src="http://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
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

                                <Row >
                                
                                    <Accordion defaultActiveKey="0" >
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header >Books</Accordion.Header>
                                            <Accordion.Body style={{ 'background-color': `${theming.blueN.code}` }}>
                                        
                                           { booksUser ? booksUser.map((e,i) => e.emailUser === dataUser?.email ? <div key={i}>
                                           <p style={{ 'color': `${theming.whiteBlack.code}`}}>Nº: {i+1}</p>
                                           <p style={{ 'color': `${theming.whiteBlack.code}`}}>{e.nameRest}</p>
                                           <p style={{ 'color': `${theming.whiteBlack.code}`}}>{e.addressRest}</p>
                                           <p style={{ 'color': `${theming.whiteBlack.code}`}}>{e.day}</p>
                                           <p style={{ 'color': `${theming.whiteBlack.code}`}}>{e.hour}</p>
                                           <hr></hr>
                                           </div>
                                           : "" )
                                           :
                                            "" }
                                            
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    
                                        
                                    </Accordion>
                                </Row>




                            </Offcanvas.Body>
                        </div>
                    </Container>
                    <Container className='pt-5 h-100' style={{ 'color': `${theming.whiteBlack.color}`, 'background-color': `${theming.blueN.code}` }}>
                    <Row>
                        <Col xs={{ span: 6, offset: 4 }}>
                            <Button variant="outline-warning" size="lg" classname="w-100" onClick={handleLogOut} style={{color: `${theming.whiteBlack.code}`, 'background-color': `${theming.greyL.code}`}}>{t('supplierMenu.x13')}</Button>
                        </Col>
                    </Row>
                    </Container>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    )
}

export default HeaderCustom;