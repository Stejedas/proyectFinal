import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FooterCustSupp from "../../Components/FooterCustSupp";
import HeaderCustom from "../../Components/HeaderCustom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { GetOfferById, getUserData, PostBook } from "../../APP/index.jsx";
import './style.css'
import { BsPersonCircle, BsPersonPlusFill, BsClockHistory, BsPatchCheck } from 'react-icons/bs'
import { GrMoney } from 'react-icons/gr'
import { HiOutlineBadgeCheck } from 'react-icons/hi'
import { MdOutlineToday } from 'react-icons/md'
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";


function OfferById() {

    const [t, i18n] = useTranslation("global");

    const { offer } = useParams();
    const [menuData, uploadMenudata] = useState()
    const [userData, uploadUserData] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(async () => {
        const token = localStorage.getItem('token');
        await GetOfferById(token, offer).then(e => uploadMenudata(e))
        await getUserData(token).then(e => uploadUserData(e))
    }, [offer])

    const doBook = e => {
       
        const token = localStorage.getItem('token');
        const book = {
            'emailRest': menuData[0].token,
            'idOffer': menuData[0].idOffer,
            'nameRest': menuData[0].nameRest,
            'hour': menuData[0].hour,
            'day': menuData[0].day,
            'pUni': menuData[0].pUni,
            'addessRest': menuData[0].addressRest,
            'diners': menuData[0].diners,
            'emailUser': userData?.email
            

        }
       
        console.log(token)
        console.log(book)
        
        PostBook(book,token )

        handleClose()
    }
 

    return (
        <React.Fragment>
            <HeaderCustom></HeaderCustom>
            <Container className="w-100 pt-2" fluid>
                {
                    menuData ?
                        <Row className="pt-2">
                            <Col xs={12}>
                                <div style={{ height: '850px' }}>
                                    <Container>
                                        <Row>
                                            <Col xl={{ span: 4, offset: 1 }}>
                                                <Row>
                                                    <Col xs={4}>
                                                        <p className="fs-3 text-center"><MdOutlineToday className="mx-2 mb-1" />{menuData?.[0].hour}</p>
                                                    </Col>
                                                    <Col xs={8}>
                                                        <p className="fs-3 text-center"><BsClockHistory className="mx-2 mb-1" />{menuData?.[0].day}</p>
                                                    </Col>
                                                    
                                                </Row>
                                                <Row>
                                                    <Col xs={4}>
                                                        <p className="fs-3 text-center"><BsPersonCircle className="mx-2 mb-1" />{menuData?.[0].diners}</p>
                                                    </Col>
                                                    <Col xs={8}>
                                                        <p className="fs-3 text-center"><GrMoney className="mx-2 mb-1" />{menuData?.[0].pUni} €/<BsPersonPlusFill className=" mb-1" /></p>
                                                    </Col>
                                                    
                                                </Row>
                                               
                                              
                                                <Row>
                                                    <div className="w-100 h-100 bg-success text-center p-5 bdRadiusCarr">
                                                        <div>
                                                            <Row>

                                                                <div className="d-flex flex-column">
                                                                    <div className="d-flex justify-content-center w-100">
                                                                        <img
                                                                            alt=""
                                                                            src={`https://vast-everglades-16758.herokuapp.com/${menuData?.[0].file}`} //ojito con esto!!
                                                                            width="200px"
                                                                            height="200px"
                                                                            className="d-inline-block align-top m-2 rounded"
                                                                        /></div>
                                                                    <div className="mt-2">
                                                                        <h2>{menuData?.[0].nameRest}</h2>
                                                                    </div>

                                                                    <div className="mt-2">
                                                                        <h4>{menuData?.[0].addressRest}</h4>
                                                                    </div>
                                                                    <div className="mt-2">
                                                                        <h5>{menuData?.[0].townRest} - {menuData?.[0].postalRest}</h5>
                                                                    </div>
                                                                    <div className="mt-5">
                                                                        <h5>Tipo de comida</h5>
                                                                        <h4>{menuData?.[0].typeFood}</h4>
                                                                    </div>


                                                                </div>
                                                            </Row>

                                                        </div>

                                                    </div>
                                                </Row>

                                            </Col>
                                            <Col xl={{ span: 7, offset: 0 }}>
                                                <Container fluid>
                                                    
                                                    <Row>
                                                        <Carousel>
                                                            <Carousel.Item>
                                                                <div className="w-100 h-100 bg-warning text-center p-5 bdRadiusCarr">
                                                                    <h4>MENU</h4>
                                                                    <p> Primer Plato</p>
                                                                    <p> {menuData ? menuData[0].FirstPlaEsp : ""}</p>
                                                                    <p> Segundo Plato</p>
                                                                    <p> {menuData ? menuData[0].SecondPlaEsp : ""}</p>
                                                                    <p> Postre</p>
                                                                    <p> {menuData ? menuData[0].CandyPlaEsp : ""}</p>
                                                                    <p> Bebida y otros</p>
                                                                    <p> {menuData ? menuData[0].DrinkPlaEsp : ""}</p>

                                                                </div>

                                                            </Carousel.Item>
                                                            <Carousel.Item>
                                                                <div className="w-100 h-100 bg-success text-center p-5 bdRadiusCarr">
                                                                    <h4>MENU</h4>
                                                                    <p> Primer Plato</p>
                                                                    <p> {menuData ? menuData[0].FirstPlaIng : ""}</p>
                                                                    <p> Segundo Plato</p>
                                                                    <p> {menuData ? menuData[0].SecondPlaIng : ""}</p>
                                                                    <p> Postre</p>
                                                                    <p> {menuData ? menuData[0].CandyPlaIng : ""}</p>
                                                                    <p> Bebida y otros</p>
                                                                    <p> {menuData ? menuData[0].DrinkPlaIng : ""}</p>

                                                                </div>
                                                            </Carousel.Item>
                                                        </Carousel>
                                                    </Row>

                                                    <Row>
                                                    
                                                    {
                                                        menuData ? menuData[0].status === "PENDDING" ? <Col xs={{ span: 8, offset: 2 }}>
                                                            <div type='button' className="w-100 bg-warning text-center mt-5 rounded-pill" onClick={handleShow}>
                                                                <p className="p-4">RESERVAR <HiOutlineBadgeCheck /></p>
                                                            </div>
                                                        </Col> 
                                                        :
                                                        <Col xs={{ span: 8, offset: 2 }}>
                                                            <div type='button' className="w-100 bg-danger text-center mt-5 rounded-pill">
                                                                <p className="p-4">RESERVADO <BsPatchCheck /></p>
                                                            </div>
                                                        </Col> 
                                                        : 
                                                        <></>
                                                    }
                                                        
                                                    </Row>
                                                </Container>
                                            </Col>

                                        </Row>

                                    </Container>
                                </div>
                            </Col>
                        </Row>


                        :
                        <></>
                }

            </Container>
            <FooterCustSupp></FooterCustSupp>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('books.x4')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{t('books.x1')}</p>
                    <p>{t('books.x5')}<strong>{menuData?.[0].nameRest}</strong>{t('books.x6')}<strong>{menuData?.[0].diners}</strong>{t('books.x7')}<strong>{menuData?.[0].diners*menuData?.[0].pUni}</strong>{t('books.x8')}</p>
                </Modal.Body>
                <Button variant="primary" onClick={doBook}>
                    {t('books.x2')}
                </Button>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {t('books.x3')}
                    </Button>

                </Modal.Footer>
            </Modal>
        </React.Fragment>

    )

}

export default OfferById;