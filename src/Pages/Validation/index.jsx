import React, { useEffect } from "react";
import FooterPage from "../../Components/Footer";
import HeaderPage from "../../Components/Header/headerHomePage";
import { Card, Button, Col, Row, Container, Stack } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { getConfirmTokenValidation } from "../../APP/index.jsx";
import { useState } from "react";
import checked from '../../Assets/Home/Carrusell/checked.png'
import './style.css'

function Validation() {

    const [t, i18n] = useTranslation("global");
    const [query] = useSearchParams()
    let [counter, updateCounter] = useState(5)

    useEffect(() => {
       

        getConfirmTokenValidation(query.get('token'))
    }, [])

    function vuelta() {
        setTimeout(() => {
            window.location = '/singIn'
        }, 7500)
    }

    //SE PASA EL COUNTER DONDE QUIERAS TENER EL CONTADOR

    let intervalId = useEffect(() => {
        setInterval(() => {
            if (counter >= 0) {
                updateCounter(counter--)
            }

        }, 1000)

        return () => clearInterval(intervalId)
    }, [])
    vuelta()

    return (
        <React.Fragment>
            <HeaderPage></HeaderPage>
            <Container>


                {
                    counter !== 0 ? 
                    <Row className="mt-5">
                    <Col xs={{ span: 10, offset: 2 }} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 3 }}>
                            <Row>
                            <h5 className="textVerify text-center">{t('verify.x1')}</h5>
                            </Row>
                            <Row className="mt-3">
                            
                            <Col className="d-flex justify-content-center" xs={{ span: 6, offset: 3 }}> 
                            <p className="counterVerify border p-4 px-5">{counter}</p>
                            
                            </Col>
                            </Row>
                           
                            
                            
                        </Col>
                    </Row>
                        :
                        <Row className="mt-5">
                        <Col xs={{ span: 10, offset: 2 }} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }} xl={{ span: 4, offset: 4 }}>
                        <img
                                    alt="verify"
                                    src={checked}
                                    width="100%"
                                    height="100%"
                                    className="d-inline-block align-top"
                                />
                            </Col>
                        </Row>


                }




            </Container>

            <FooterPage></FooterPage>
        </React.Fragment>
    )
}

export default Validation;