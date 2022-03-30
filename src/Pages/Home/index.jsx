import React from "react";
import ThemingSelector from "../../Components/mult-theming/theamingSelector";
import { useTranslation } from 'react-i18next'
import MultiLenguage from "../../Components/multi-language";
import HeaderPage from "../../Components/Header/headerHomePage";
import BodyHome from "../../Components/BodyHome";
import FooterHome from "../../Components/FooterHome";
import { Row, Col, Container } from 'react-bootstrap'
import { Form, InputGroup, FormControl, Stack, Button, Tab, Tabs, type } from "react-bootstrap";
import './style.css'
import { getUserData, postSendEmailAndPassword } from "../../APP/index.jsx";
import { postLogInUser } from "../../APP/index.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { ThemingContext } from "../../Components/mult-theming/theming.context";


function HomePage() {

    const [t] = useTranslation("global");
    let navigate = useNavigate();

    const [theming] = useContext(ThemingContext)

    // SING IN - INICIAR SESION
    const handleLogIn = e => {
        e.preventDefault()

        postLogInUser({
            "email": e.target.emailSingIn.value,
            "password": e.target.passwordSingIn.value
        }).then(e => {
            
            localStorage.setItem('token', e.access_token);
            getUserData(e.access_token).then(e => {
                if (e.type === 'SUPPLIER') {
                    navigate('/supplier')
                } else if (e.type === 'CUSTOMER') {
                    navigate('/customer')
                }
            })
        })
    }

    // SING UP - REGISTRO
    const handleSubmitSignUp = e => {
        e.preventDefault()
        console.log('se va por aqui')
        postSendEmailAndPassword({
            "email": e.target.emailSingUp.value,
            "password": e.target.passwordSingUp.value,
            "type": "CUSTOMER"
        })
    }

    return (
        <React.Fragment>
            <HeaderPage></HeaderPage>
            <Container className="imgBackGroundHome" fluid >
            <Row>
                    <Col xs={0}>
                        <div style={{ height: '100px' }}></div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 7 }} xl={{ span: 3, offset: 7 }}>
                        <Tabs
                            defaultActiveKey="profile"
                            id="noanim-tab-example"
                            className='bg_table mt-2'
                            fill
                            style={{ "background-color": `${theming.blueTra.code}`}}
                        >

                            <Tab eventKey="profile" title={t('login.x2')} className='flex-fill' id='inicio' style={{ "background-color": `${theming.blueTra.code}`}} >
                                <Stack className="border border-0 rounded-5 "  >
                                    <Form style={{ "background-color": `${theming.blueTra.code}`}} onSubmit={handleLogIn}>
                                        <Form.Group as={Row} className="mb-3 mt-5 d-flex flex-column" controlId="formPlaintextEmail1">
                                            <Col xs={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                                                <Form.Control type="text" name='emailSingIn' autoComplete="on" placeholder={t('login.x3')} size="lg" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3 d-flex flex-column" controlId="formPlaintextPassword1">
                                            <Col xs={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                                                <Form.Control type="password" name='passwordSingIn' autoComplete="on" placeholder={t('login.x5')} size="lg" />
                                            </Col>
                                        </Form.Group>
                                        <Col className="d-flex justify-content-center">
                                            <p style={{color: `${theming.whiteBlack.code}`}}> {t('login.x13')}</p> <Form.Check
                                                type='checkbox'
                                                className="mx-2"
                                                name='checkboxSingIn'
                                            />
                            
                                        </Col>
                                        <Col className="d-flex justify-content-center">
                                            <Button variant="secondary" type='submit' active  >

                                                {t('login.x10')}
                                            </Button>
                                        </Col>
                                        <p className="text-center mt-3" style={{color: `${theming.whiteBlack.code}`}}>{t('login.x7')}</p>
                                        <Col className="d-flex justify-content-center">
                                            <Button variant="secondary" active className="mb-3">

                                                {t('login.x11')}
                                            </Button>
                                        </Col>
                                    </Form>
                                </Stack>
                            </Tab>

                            <Tab eventKey="home" title={t('login.x1')} id='Registro'  style={{ "background-color": `${theming.blueTra.code}`}}>
                                <Stack className="bg_table' border border-0 rounded-9 ">
                                    <Form className='bg_table' onSubmit={handleSubmitSignUp}  style={{ "background-color": `${theming.blueTra.code}`}}>
                                        <Form.Group as={Row} className="mb-3 mt-5 d-flex flex-column" controlId="formPlaintextEmail2">

                                            <Col xs={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
                                                <Form.Control type="text" name='emailSingUp' autoComplete="on" placeholder={t('login.x3')} size="lg" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3 d-flex flex-column" controlId="formPlaintextPassword2">

                                            <Col xs={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                                                <Form.Control type="password" name='passwordSingUp' autoComplete="on" placeholder={t('login.x5')} size="lg" />
                                            </Col>
                                        </Form.Group>
                                        <Col className="d-flex justify-content-center">
                                            <Form.Check
                                                type='checkbox'
                                                name='checkboxSingUp'
                                            />
                                            <Link  to={'https://www.freeprivacypolicy.com/live/701e58e0-650e-4185-8f19-fc9ca3e66da5'}><p className="fs-8">{' '} {t('login.x9')}</p></Link>
                                        </Col>
                                        <Col className="d-flex justify-content-center">
                                            <Button variant="secondary" type='submit' active>

                                                {t('login.x10')}
                                            </Button>
                                        </Col>
                                        <p className="text-center mt-3" style={{color: `${theming.whiteBlack.code}`}}>{t('login.x7')}</p>
                                        <Col className="d-flex justify-content-center">
                                            <Button variant="secondary" active className="mb-3">

                                                {t('login.x8')}
                                            </Button>
                                        </Col>
                                    </Form>
                                </Stack>
                            </Tab>


                        </Tabs>




                    </Col>
                </Row>
                <Row>
                    <Col xs={0}>
                        <div style={{ height: '100px' }}></div>
                    </Col>
                </Row>
            </Container>

            <FooterHome></FooterHome>
        </React.Fragment>
    )
}

export default HomePage; 