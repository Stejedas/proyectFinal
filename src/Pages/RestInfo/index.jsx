import React, { useEffect, useState } from "react";
import FooterCustSupp from "../../Components/FooterCustSupp/index.jsx";
import HeaderCustom from "../../Components/HeaderCustom/index.jsx";
import { Container, Row, Col, Accordion, Button, Card } from 'react-bootstrap'
import { useSearchParams } from "react-router-dom";
import { GetAllOfferts, GetAllRatings } from "../../APP/index.jsx";
import { Link } from "react-router-dom";



export default function RestInformation() {

    const token = localStorage.getItem('token');
    const [queryParams] = useSearchParams();
    const nameRestau = queryParams.get('nameRest') ?? "error";
    const emailRest = queryParams.get('email') ?? "error";

    const [offertRest, updateOfferRest] = useState()
    const [rateRest, updateRateRest] = useState(0)
    const [dataRest, uploadDataRest] = useState()
    console.log(dataRest)
    const CalculatePor = array => {
        let percentage = 0
        let divisor = 0
        array.map(e => {
            e.nameRest === emailRest ?
                percentage = percentage + parseInt(e.levelSatis ? e.levelSatis : 0)
                :
                <></>;
        })
        array.map(e => {
            e.nameRest === emailRest ?
                divisor = divisor + 1
                :
                <></>;
        })
        console.log(percentage)
        console.log(divisor)
        updateRatingRest(percentage / divisor)
    }

    useEffect(async () => {
        await GetAllOfferts(token).then(e => updateOfferRest(e))
        await GetAllRatings(token).then(e => updateRateRest(e))

        console.log(rateRest)

    }, [token])
    

    const [ratingRestPerc, updateRatingRest] = useState()

    useEffect(async () => {
        await CalculatePor(rateRest)
    }, [rateRest])

    useEffect(async () => {
        const data = offertRest.find(e => e.token === emailRest)
        uploadDataRest([data])
    }, [rateRest])

    console.log(ratingRestPerc)

    
    return (
        <React.Fragment>
            <HeaderCustom></HeaderCustom>
            <Container>
                <Row>
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} xl={{ span: 8, offset: 2 }} className='bg-danger'>
                        <Card className="p-0 m-0" fluid>
                            {
                                dataRest !== undefined ? <Container fluid className='w-100 d-flex flex-column flex-md-row'>
                                <Card.Header>

                                    <img
                                        className="d-block"
                                        src={`https://vast-everglades-16758.herokuapp.com/${dataRest?.[0].file}`}
                                        alt="First slide"
                                        height="250px"
                                        width="150px"

                                    /></Card.Header>
                                <Card.Body className="w-auto">
                                    <Card.Title className="fs-1">{dataRest?.[0].nameRest}</Card.Title>
                                    <Card.Subtitle className="fs-3">{dataRest?.[0].addressRest}</Card.Subtitle>
                                    <Card.Subtitle className="fs-4">{dataRest?.[0].townRest}</Card.Subtitle>
                                    <Card.Subtitle className="fs-5">{dataRest?.[0].postalRest}</Card.Subtitle>

                                </Card.Body>
                            </Container>
                            : ""
                        }
                            
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} lg={5} xl={5} className="px-2 mt-1 bg-warning">
                        <Row>
                            {/* ACORDION 1 */}
                            <Accordion>
                                {
                                    offertRest ? offertRest.map((e, i) =>
                                        e.token === emailRest ? <Accordion.Item key={i} eventKey={i}>
                                            <Accordion.Header >
                                                <div className="d-flex justify-content-between w-100 px-2 align-items-center">
                                                    <div className="h-100 ">
                                                        <p className="m-0 p-0">Table {i + 1}</p>
                                                        <p className="m-0 p-0">{e.diners}</p>
                                                    </div>
                                                    <div>
                                                        <p className="m-0 p-0">{e.day}</p>
                                                        <p className="m-0 p-0">{e.hour}</p>
                                                    </div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Link to={`/customer/${e.idOffer}`}>
                                                    <Button variant="primary" size="lg">
                                                        Ver mas detalles
                                                    </Button>
                                                </Link>
                                            </Accordion.Body>
                                        </Accordion.Item> : ""
                                    ) : <></>
                                }


                            </Accordion>
                        </Row>
                    </Col>
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} lg={{ span: 5, offset: 1 }} xl={{ span: 5, offset: 1 }} className="px-2 mt-1 bg-danger">
                        <Container fluid>

                            <Row>
                                {/* ACORDION 2 */}
                                <Container>
                                    <Row>
                                        <p>Nivel de satisfaccion de los usuarios</p>
                                        <p>{ratingRestPerc !== undefined ? ratingRestPerc !== NaN ? ratingRestPerc : "" : ""} % </p>
                                    </Row>
                                    <Row>
                                        <Col>
                                            {
                                                rateRest ? rateRest.map((e, i) =>
                                                    e.nameRest === emailRest ? <Card key={i}><Card.Body className="h-100 "><p className="h-100 d-flex align-items-center m-0">{e.textRate}</p></Card.Body></Card>
                                                        : ""
                                                ) : ""

                                            }
                                        </Col>
                                    </Row>


                                </Container>
                            </Row>
                        </Container>


                    </Col>
                </Row>
            </Container>
            <FooterCustSupp></FooterCustSupp>
        </React.Fragment>
    )
}

