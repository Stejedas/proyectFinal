import React, { useEffect } from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import { Tab, Tabs } from "react-bootstrap";
import { BsGridFill } from 'react-icons/bs';
import { BsFillGrid3X3GapFill, BsInfoCircle } from 'react-icons/bs';
import { FcInfo } from 'react-icons/fc'
import { FaMapMarkedAlt } from 'react-icons/fa';
import './style.css'
import { useState } from "react";
import { GetAllOfferts, getUserData } from "../../APP/index.jsx";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MapStreet from "../Map/index.jsx";
import { useTranslation } from "react-i18next";
import { useContext } from 'react'
import { ThemingContext } from '../mult-theming/theming.context'
import { GrMapLocation } from 'react-icons/gr'
import { BsFillPeopleFill } from 'react-icons/bs'
import { GoClock } from 'react-icons/go'
import { AiOutlineCalendar } from 'react-icons/ai'



function CustomerLanding() {

    const [t] = useTranslation("global");

    const [allOffer, uploadAllOffer] = useState()

    const token = localStorage.getItem('token');

    const [theming] = useContext(ThemingContext);

    async function getOfferts(token) {
        const a = await GetAllOfferts(token)
        uploadAllOffer(a)
    }

    useEffect(async () => {
        uploadAllOffer(await GetAllOfferts(token))

    }, [])

    const handleSeeMore = e => {
        console.log(e.target)

    }
    return (
        <React.Fragment>
            <Container className="mb-5 pb-5" style={{'background-color': `${theming.backA.code}` , 'min-height': '800px'}} >
                <Row>
                    <Col xs={6} md={{ span: 4, offset: 3 }} lg={{ span: 4, offset: 3 }} xl={{ span: 4, offset: 3 }} >
                        <Carousel className="mt-3 mb-2 carousel-fade slide " controls={false} indicators={false} slide={true}>

                            {
                                allOffer ? allOffer.map(e => {
                                    return (

                                        <Carousel.Item >
                                            <Link to={`/customer/${e.idOffer}`} style={{ 'text-decoration': 'none' }}>



                                                <div className="d-flex flex-row justify-content-between p-2 px-4 border border-2  align-items-center" style={{ 'color': `${theming.whiteBlack.code}`, 'background-color': `${theming.cardBanner.code}`, 'border-radius': '25px' }}>
                                                    <img
                                                        alt=""
                                                        src={`https://vast-everglades-16758.herokuapp.com/${e?.file}`}
                                                        width="40"
                                                        height="40"
                                                        className="d-inline-block align-top mx-2"
                                                    />
                                                    <div className="d-flex flex-column w-100 ">
                                                        <div className="d-flex flex-row justify-content-between">
                                                            <h5 className="fs-7"><GrMapLocation />:{' '} {e.nameRest}</h5>
                                                            <h5 className="fs-7"><GoClock /> {e.hour}</h5>
                                                        </div>
                                                        <div className="d-flex flex-row justify-content-between">
                                                            <h5 className="fs-7"><BsFillPeopleFill />dinners: {e.diners}</h5>
                                                            <h5 className="fs-7"><AiOutlineCalendar />{e.day}</h5>
                                                        </div>
                                                    </div>


                                                </div>

                                            </Link>
                                        </Carousel.Item>

                                    )
                                }) : <></>
                            }
                        </Carousel>
                    </Col>
                    <Col xs={6} md={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }} xl={{ span: 4, offset: 1 }}>
                        <Carousel className="mt-3 mb-2 carousel-fade slide " controls={false} indicators={false} slide={true}>

                            {
                                allOffer ? allOffer.map(e => {
                                    return (

                                        <Carousel.Item >
                                            <Link to={`/customer/${e.idOffer}`} style={{ 'text-decoration': 'none' }}>



                                                <div className="d-flex flex-row justify-content-between p-2 px-4 border border-2  align-items-center" style={{ 'color': `${theming.whiteBlack.code}`, 'background-color': `${theming.cardBanner.code}`, 'border-radius': '25px' }}>
                                                    <img
                                                        alt=""
                                                        src={`https://vast-everglades-16758.herokuapp.com/${e?.file}`}
                                                        width="40"
                                                        height="40"
                                                        className="d-inline-block align-top mx-2"
                                                    />
                                                    <div className="d-flex flex-column w-100 ">
                                                        <div className="d-flex flex-row justify-content-between">
                                                            <h5 className="fs-7"><GrMapLocation />:{' '} {e.nameRest}</h5>
                                                            <h5 className="fs-7"><GoClock /> {e.hour}</h5>
                                                        </div>
                                                        <div className="d-flex flex-row justify-content-between">
                                                            <h5 className="fs-7"><BsFillPeopleFill />dinners: {e.diners}</h5>
                                                            <h5 className="fs-7"><AiOutlineCalendar />{e.day}</h5>
                                                        </div>
                                                    </div>


                                                </div>

                                            </Link>
                                        </Carousel.Item>

                                    )
                                }) : <></>
                            }
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={3} lg={3} xl={3} className="px-2">
                        <div className='filtro'></div>
                    </Col>
                    <Col xs={12} md={9} lg={9} xl={9}>
                        <Container className="mt-2 p-0" fluid>

                            <Row className="mt-3">
                                <Col xs={12}>
                                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 w-100">
                                        {/* TABLE 1 */}
                                        <Tab eventKey="home" title={<BsGridFill className="fs-3"  />}>
                                            <Container fluid className="px-1 pb-5" >
                                                <Row >

                                                    {

                                                        allOffer ? allOffer.map(e => {
                                                            return (
                                                                <Col xs={12} sm={12} md={12} lg={6} xl={6} className='p-2' key={e.idOffer}>
                                                                    <div className="w-100 d-flex justify-content-between flex-row borRadiTarg" style={{ 'color': `${theming.whiteBlack.code}`, 'background-color': `${theming.cardN.code}`, 'border-radius': '25px' }}>
                                                                        <div className="d-flex align-items-center justify-content-center">
                                                                            <img
                                                                                alt=""
                                                                                src={`https://vast-everglades-16758.herokuapp.com/${e.file}`}
                                                                                width="150vw"
                                                                                height="150vh"
                                                                                className="d-inline-block align-top m-2 rounded-pill"
                                                                            />
                                                                        </div>
                                                                        <div className="d-flex flex-column w-100">
                                                                            <div className="d-flex flex-column pt-3 m-2">
                                                                                <Card.Title className="p-0 m-0" >{e.nameRest}</Card.Title>
                                                                                <Card.Subtitle className="mb-2 text-muted">{e.townRest}</Card.Subtitle>
                                                                                <Card.Title className="p-0 m-0">{e.pUni} €/pers</Card.Title>
                                                                                <Card.Text className="p-0 m-0">
                                                                                    {t('customer.x2')} {e.diners}
                                                                                </Card.Text>
                                                                                <Card.Text className="p-0 m-0">
                                                                                    {t('customer.x3')}: {e.diners * e.pUni} €
                                                                                </Card.Text>


                                                                            </div>
                                                                            <div className="d-flex flex-row justify-content-between pb-3">

                                                                                <div className="d-flex align-items-star p-0 m-0 mx-2 flex-column">
                                                                                    <strong className="m-0 p-0">{e.hour} h </strong>
                                                                                    <strong className="m-0 p-0"> {e.day}</strong>
                                                                                </div>

                                                                                <Link to={`/customer/${e.idOffer}`} className="d-flex justify-content-end px-3 pt-2 align-items-center">
                                                                                    <FcInfo className="rounded-circle m-2 fs-2 d-flex justify-content-end" />
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            )
                                                        }) : <></>
                                                    }

                                                </Row>
                                            </Container>


                                        </Tab>
                                        {/* TABLE 2 */}
                                        <Tab eventKey="profile" title={<BsFillGrid3X3GapFill className="fs-3" />}>
                                            <Container fluid className="px-1 pb-5" >
                                                <Row>
                                                    <Container fluid className="d-flex justify-content-center flex-wrap">
                                                        {
                                                            allOffer ? allOffer.map(e => {
                                                                return (
                                                                    <Col xs={6} md={4} lg={2} xl={2} key={e.idOffer} className='mt-3 p-xl-2'  >

                                                                        <div className="w-100 p-1"  style={{ 'color': `${theming.whiteBlack.code}`, 'background-color': `${theming.cardN.code}`, 'border-radius': '25px' }}>
                                                                            <div className="d-flex flex-row justify-content-between">
                                                                                <div className="d-flex align-items-star p-0 m-0 mx-1 flex-column fs-9">
                                                                                    <strong className="m-0 p-0 text-center fs-8">{e.hour} h </strong>
                                                                                    <strong className="m-0 p-0 text-center fs-8"> {e.day}</strong>
                                                                                </div>
                                                                                <div className="fs-9 d-flex align-items-center text-center p-2  rounded-circle" style={{border: `1px solid ${theming.whiteBlack.code}`}}>
                                                                                    {e.diners} P
                                                                                </div>
                                                                            </div>
                                                                            <Link to={`/customer/${e.idOffer}`}>
                                                                                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                                                                    <img
                                                                                        alt=""
                                                                                        src={`https://vast-everglades-16758.herokuapp.com/${e.file}`}

                                                                                        height="100vh"
                                                                                        width="100vh"


                                                                                        className="d-inline-block align-top p-2 rounded-pill" style={{border: `1px solid ${theming.whiteBlack.code}`}}
                                                                                    />
                                                                                </div>
                                                                            </Link>

                                                                        </div>

                                                                    </Col>
                                                                )
                                                            }) : <></>
                                                        }
                                                    </Container>
                                                </Row>
                                            </Container>

                                        </Tab>
                                        <Tab eventKey="contact" title={<FaMapMarkedAlt className="fs-3" />} >
                                            <Container fluid className="p-0 m-0">
                                                {allOffer != undefined ? <MapStreet className="w-100 d-flex justify-content-center m-0 p-0" info={allOffer}></MapStreet> : <></>}
                                            </Container>



                                        </Tab>
                                    </Tabs>
                                </Col>
                            </Row>
                        </Container>

                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default CustomerLanding;