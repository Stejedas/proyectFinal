
import React from "react"
import { Container, Col, Row, Form, Button } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import { NavigationType, useSearchParams } from "react-router-dom";
import { PostRate } from "../../APP/index.jsx";
import { useNavigate } from "react-router-dom";

function RateComponent() {

    const [queryParams] = useSearchParams();
    const nameRest = queryParams.get('nameRest') ?? "error";
    const idOffer= queryParams.get('idOffer') ?? "error";

    const [t] = useTranslation("global");

    let navigate = useNavigate();

    const SendValoration = e => {
        e.preventDefault()
        console.log(e.target.customRange1.value)
        console.log(e.target.textareaRate.value)
        const token = localStorage.getItem('token');

        const newRate = {
            "levelSatis": e.target.customRange1.value,
            "textRate": e.target.textareaRate.value ? e.target.textareaRate.value : "",
            "nameRest": nameRest,
            "idOffer": idOffer
        }
      
        PostRate(newRate, token)
       
        navigate('/customer')
    }

    console.log(nameRest)
    console.log(idOffer)
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 3 }} className="mt-5 bg-warning">
                        <Form onSubmit={SendValoration}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Container fluid>
                                    <Row className="mt-2 mb-1">
                                        <Col xs={3}>
                                            <img src="https://cdn.templates.unlayer.com/assets/1642914973873-ANNOYED.png" class="img-fluid p-2" alt="..." />
                                        </Col>
                                        <Col xs={3}>
                                            <img src="https://cdn.templates.unlayer.com/assets/1642914981935-SAD.png" class="img-fluid p-2" alt="..." />
                                        </Col>
                                        <Col xs={3}>
                                            <img src="https://cdn.templates.unlayer.com/assets/1642914847646-MEH.png" class="img-fluid p-2" alt="..." />
                                        </Col>
                                        <Col xs={3}>
                                            <img src="https://cdn.templates.unlayer.com/assets/1642914727217-Happy.png" class="img-fluid p-2" alt="..." />
                                        </Col>
                                    </Row>
                                </Container>
                                <label for="customRange1" class="form-label"></label>
                                <input type="range" class="form-range" name="customRange1" id="customRange1" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>{t('rate.x1')}</Form.Label>
                                <Form.Control as="textarea" name="textareaRate" rows={5} />
                            </Form.Group>
                            <Button variant="outline-success" type="submit">{t('rate.x2')}</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default RateComponent;