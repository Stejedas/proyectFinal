import React, { useContext } from "react"
import HeaderPage from "../../Components/Header/headerHomePage"
import FooterPage from "../../Components/Footer";
import { Stack, Form, Col, Row, Container, Button } from "react-bootstrap";
import './style.css'
import { useTranslation } from "react-i18next";
import { postLogInUser } from "../../APP/index.jsx";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../APP/index.jsx";
import { ThemingContext } from "../../Components/mult-theming/theming.context";


function SingIn(){
    const [t, i18n] = useTranslation("global");
    let navigate = useNavigate();

    const [theming] = useContext(ThemingContext)

    const handleSubmitSignIn = e => {
        e.preventDefault()
       
    
        postLogInUser({
            "email": e.target.emailSingIn.value,
            "password": e.target.passwordSingIn.value
        }).then(e => {  localStorage.setItem('token', e.access_token);
                        getUserData(e.access_token).then(e =>  
                            {
                                if(e.type === 'SUPPLIER') {
                            navigate('/supplier')
                        } else if(e.type === 'CUSTOMER'){
                            navigate('/customer')
                        }})
                   })}

    return (
        <React.Fragment>
            <HeaderPage></HeaderPage>
            <Container fluid style={{'background-color': `${theming.blueN.code}`, color: `${theming.whiteBlack.code}`, "min-height": '750px'}}>
            <Row className=" pt-3 d-flex align-items-center " > 
            <Col className="mt-5 pt-5 border border-3 rounded-3" xs={{ span: 10, offset: 1 }} sm={{ span: 6, offset: 3 }}>
                                    <Form className='pb-5' onSubmit={handleSubmitSignIn}>
                                    <h3 className="mt-3 text-center">{t('login.x2')}</h3>
                                        <Form.Group as={Row} className="mb-3 mt-2 d-flex flex-column" controlId="formPlaintextEmail">
                                            <Col xs={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                                                <Form.Control type="text" name='emailSingIn' placeholder={t('login.x3')} size="lg" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3 d-flex flex-column" controlId="formPlaintextPassword">
                                            <Col xs={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }}>
                                                <Form.Control type="password" name='passwordSingIn' placeholder={t('login.x5')} size="lg" />
                                            </Col>
                                        </Form.Group>
                                        <Col className="d-flex justify-content-center">
                                            <p> </p> <Form.Check
                                                type='checkbox'
                                                className="mx-2"
                                                name='checkboxSingIn'
                                            />
                                            <p>{' '} {t('login.x13')}</p>
                                        </Col>
                                        <Col className="d-flex justify-content-center">
                                            <Button variant="secondary" type='submit' active>

                                            {t('login.x10')}
                                            </Button>
                                        </Col>
                                        <p className="text-center mt-3"> {t('login.x7')}</p>
                                        <Col className="d-flex justify-content-center">
                                            <Button variant="secondary" active className="mb-3" style={{'background-color': `${theming.blueN.code}`, color: `${theming.whiteBlack.code}`}}>

                                            {t('login.x11')}
                                            </Button>
                                        </Col>
                                    </Form>
                                    </Col>
                                </Row>
                                </Container>
            <FooterPage></FooterPage>
        </React.Fragment>
    )
}

export default SingIn;