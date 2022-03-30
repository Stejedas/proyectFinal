import React from "react";
import FooterPage from "../../Components/Footer";
import HeaderPage from "../../Components/Header/headerHomePage";
import { Container, Row, Col, InputGroup, FormControl, Form, Button } from "react-bootstrap";
import imgCompany from '../../Assets/Home/Carrusell/company.jpg'
import './style.css'
import { useTranslation } from "react-i18next";
import { postSendEmailAndPassword } from "../../APP/index.jsx";
import { Link } from "react-router-dom";


function SingInCompany() {

    const [t] = useTranslation("global");

    const handleSubmit = e => {
        e.preventDefault()
        
        
        if(e.target.password.value === e.target.passwordSecond.value && e.target.checkValid.checked === true){
            postSendEmailAndPassword({
                "comercialName": e.target.comercialName.value,
                "email": e.target.email.value,
                "password": e.target.password.value,
                "nameCompany": e.target.nameCompany.value,
                "address": e.target.address.value,
                "town": e.target.town.value,
                "postalTown": e.target.postalTown.value,
                "contactPerson": e.target.contactPerson.value,
                "firstNum": e.target.firstNum.value,
                "secondNum": e.target.secondNum.value ? e.target.secondNum.value : "",
                "cif": e.target.cif.value,
                "checkValid": e.target.checkValid.checked,   
                "lat": e.target.lat.value ? e.target.lat.value : "" ,
                "lon": e.target.lon.value ? e.target.lon.value : "", 
                "type": "SUPPLIER"
        }) } else {
            console.log('Las contraseñas no son iguales')
        }

    }

    return (
        <React.Fragment>
            <HeaderPage></HeaderPage>
            <div className="companyImgBg vh-100 pt-5">
                <Container fluid>
                    <Row className="">
                        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 5, offset: 0 }} xl={{ span: 4, offset: 2 }}>
                            <Form noValidate validated='' onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <Form.Group md="4" controlId="validationCustom011">
                                            <Form.Label>{t('signCompany.x7')}</Form.Label>
                                            <Form.Control
                                                required
                                                name="comercialName"
                                                type="text"
                                                placeholder={t('signCompany.x7')}

                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group as={Col} controlId="validationCustom022">
                                            <Form.Label>{t('signCompany.x17')}</Form.Label>
                                            <Form.Control
                                                required
                                                name="email"
                                                type="email"
                                                placeholder={t('signCompany.x17')}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row className="mb-3">
                                    <Col xs={6}>
                                        <Form.Group md="4" controlId="validationCustom21">
                                            <Form.Label>{t('signCompany.x3')}</Form.Label>
                                            <Form.Control
                                                required
                                                name="password"
                                                type="password"
                                                placeholder={t('signCompany.x3')}

                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group as={Col} controlId="validationCustom22">
                                            <Form.Label>{t('signCompany.x4')}</Form.Label>
                                            <Form.Control
                                                required
                                                type="password"
                                                name="passwordSecond"
                                                placeholder={t('signCompany.x4')}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row className="mb-3">
                                    <Col xs={12}>
                                        <Form.Group xs="4" controlId="validationCustom01">
                                            <Form.Label>{t('signCompany.x6')}</Form.Label>
                                            <Form.Control
                                                required
                                                name="nameCompany"
                                                type="text"
                                                placeholder={t('signCompany.x6')}

                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} xs="6" controlId="validationCustom13">
                                        <Form.Label>{t('signCompany.x12')}</Form.Label>
                                        <Form.Control type="text" name="address" placeholder={t('signCompany.x12')} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid city.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} xs="3" controlId="validationCustom10">
                                        <Form.Label>{t('signCompany.x11')}</Form.Label>
                                        <Form.Control type="text" name="town" placeholder={t('signCompany.x11')} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid state.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} xs="3" controlId="validationCustom09">
                                        <Form.Label>{t('signCompany.x8')}</Form.Label>
                                        <Form.Control type="text" name="postalTown" placeholder={t('signCompany.x8')} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid CIF.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} xs="6" controlId="validationCustom08">
                                        <Form.Label>{t('signCompany.x9')}</Form.Label>
                                        <Form.Control type="text" name="contactPerson" placeholder={t('signCompany.x9')} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid state.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} xs="6" controlId="validationCustom05">
                                        <Form.Label>{t('signCompany.x15')}</Form.Label>
                                        <Form.Control type="text" name="firstNum" placeholder={t('signCompany.x15')} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid CIF.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} xs="6" controlId="formBasicPhone">
                                        <Form.Label>{t('signCompany.x16')}</Form.Label>
                                        <Form.Control type="text" name="secondNum" placeholder={t('signCompany.x16')} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid number.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} xs="6" controlId="validationCustom05">
                                        <Form.Label>{t('signCompany.x18')}</Form.Label>
                                        <Form.Control type="text" name="cif" placeholder={t('signCompany.x18')} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid CIF.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} xs="6" controlId="formBasicLat">
                                        <Form.Label>{t('signCompany.x19')}</Form.Label>
                                        <Form.Control type="text" name="lat" placeholder={t('signCompany.x19')} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid lat.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} xs="6" controlId="validationCustom05">
                                        <Form.Label>{t('signCompany.x20')}</Form.Label>
                                        <Form.Control type="text" name="lon" placeholder={t('signCompany.x20')} required />
                                        <Form.Control.Feedback type="invalid">
                                        Please provide a valid lon.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Img cambiar</Form.Label>
                                    <Form.Control type="file" name="file" rows={1} placeholder='img' />
                                </Form.Group>
                            </Row>
                                <Form.Group className="mb-3">
                                    <Link to={"https://www.freeprivacypolicy.com/live/701e58e0-650e-4185-8f19-fc9ca3e66da5"}>

                                   <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                        name="checkValid"
                                    />
                                     </Link>
                                </Form.Group>
                                <Button type="submit">Submit form</Button>
                            </Form>

                        </Col>
                    </Row>

                </Container>
            </div>
            <FooterPage></FooterPage>
        </React.Fragment>
    )
}
export default SingInCompany;
