import React, { useEffect, useState } from "react";
import FooterCustSupp from "../../Components/FooterCustSupp/index.jsx";
import HeaderCustom from "../../Components/HeaderCustom/index.jsx";
import { Container, Row, Col, Accordion, Button, Card } from 'react-bootstrap'
import { useSearchParams } from "react-router-dom";
import { GetAllOfferts, GetAllRatings } from "../../APP/index.jsx";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { useTranslation } from "react-i18next";
import { ThemingContext } from "../../Components/mult-theming/theming.context.js";



export default function RestInformation() {

    const token = localStorage.getItem('token');
    const [queryParams] = useSearchParams();
    const nameRestau = queryParams.get('nameRest') ?? "error";
    const emailRest = queryParams.get('email') ?? "error";

    const [theming] = useContext(ThemingContext);
    const [t] = useTranslation("global");

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
            <Container style={{'background-color': `${theming.backA.code}`,'color': `${theming.whiteBlack.code}`, 'min-height': '700px'}} fluid> 
                <Row>
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} xl={{ span: 8, offset: 2 }}>
                        <Card className="p-0 m-0 mt-5 d-flex flex-row" fluid style={{'background-color': `${theming.backA.code}`}}>
                        
                             
                                <Card.Header>

                                    <img
                                        className="d-block"
                                        src={`https://vast-everglades-16758.herokuapp.com/${dataRest?.[0].file}`}
                                        alt="First slide"
                                        height="150px"
                                        width="150px"

                                    /></Card.Header>
                                <Card.Body className="w-auto" style={{'background-color': `${theming.backA.code}`}}>
                                    <Card.Title className="fs-1">{dataRest?.[0].nameRest}</Card.Title>
                                    <Card.Subtitle className="fs-3">{dataRest?.[0].addressRest}</Card.Subtitle>
                                    <Card.Subtitle className="fs-4">{dataRest?.[0].townRest}</Card.Subtitle>
                                    <Card.Subtitle className="fs-5">{dataRest?.[0].postalRest}</Card.Subtitle>

                                </Card.Body>
                    
                      
                            
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} lg={5} xl={5} className="px-2 mt-1">
                        <Row className="mt-4">
                            {/* ACORDION 1 */}
                            <Accordion>
                                {
                                    offertRest ? offertRest.map((e, i) =>
                                        e.token === emailRest ? <Accordion.Item key={i} eventKey={i}>
                                            <Accordion.Header >
                                                <div className="d-flex justify-content-between w-100 px-2 align-items-center">
                                                    <div className="h-100 ">
                                                       
                                                        <p className="m-0 p-0"> {t('tableTwo.x7')} - {e.diners}</p>
                                                    </div>
                                                    <div>
                                                        <p className="m-0 p-0">{e.day}</p>
                                                        <p className="m-0 p-0">{e.hour}</p>
                                                    </div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body style={{'background-color': `${theming.backA.code}`}} className='d-flex justify-content-end'>
                                                <Link to={`/customer/${e.idOffer}`}>
                                                    <Button style={{'background-color': `${theming.blueN.code}`, color: `${theming.whiteBlack.code}`}} className='btn btn-warning' size="lg">
                                                    {t('rate.x5')}
                                                    </Button>
                                                </Link>
                                            </Accordion.Body>
                                        </Accordion.Item> : ""
                                    ) : <></>
                                }


                            </Accordion>
                        </Row>
                    </Col>
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} lg={{ span: 5, offset: 1 }} xl={{ span: 5, offset: 1 }} className="px-2 mt-1">
                        <Container fluid>

                            <Row>
                                {/* ACORDION 2 */}
                                <Container className="mt-4">
                                    <Row >
                                    <div className="d-flex flex-row justify-content-center p-2  align-items-center m-0" style={{border: `2px solid ${theming.whiteBlack.code}`, 'border-radius': '15px'}}>
                                        <p className="m-0">{t('rate.x4')} </p>
                                        <p className="mx-2 m-0">{ratingRestPerc !== undefined ? ratingRestPerc !== NaN ? ratingRestPerc : "" : ""} % </p>
                                        </div>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <p className="pt-3">{t('rate.x3')}</p>
                                            {
                                                rateRest ? rateRest.map((e, i) =>
                                                    e.nameRest === emailRest ? <Card key={i} style={{'background-color': `${theming.blueL.code}`}}><Card.Body className="h-100 "><p className="h-100 d-flex align-items-center m-0">{e.textRate}</p></Card.Body></Card>
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

