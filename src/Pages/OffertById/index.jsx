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
import { useContext } from 'react'
import { ThemingContext } from "../../Components/mult-theming/theming.context";
import espFlg from '../../Assets/Home/Carrusell/espFlg.png'
import ukFlg from '../../Assets/Home/Carrusell/ukFlg.png'
import { useNavigate } from "react-router-dom";



function OfferById() {

    const [t, i18n] = useTranslation("global");

    const [theming] = useContext(ThemingContext);

    let navigate = useNavigate();

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
        navigate(`/customer/${menuData[0].idOffer}`)
    }
 

    return (
        <React.Fragment>
            <HeaderCustom></HeaderCustom>
            <Container className="w-100 pt-3" fluid style={{color: `${theming.whiteBlack.code}`, 'background-color': `${theming.backA.code}`}}> 
                {
                    menuData ?
                        <Row className="pt-2">
                            <Col xs={12}>
                                <div style={{ 'min-height': '700px' }}>
                                    <Container>
                                        <Row>
                                            <Col xl={{ span: 4, offset: 1 }}>
                                                <Row>
                                                    <Col xs={5} className='p-2 d-flex justify-content-center  align-items-center h-100' >
                                                        <p className="fs-5 p-3 px-3 m-0 w-100 text-center" style={{border: `2px solid ${theming.whiteBlack.code}`, 'border-radius': '15px' }}><MdOutlineToday className="fs-3 mx-2" />{menuData?.[0].hour}</p>
                                                    </Col>
                                                    <Col xs={7} className='p-2 d-flex justify-content-center  align-items-center h-100'>
                                                        <p className="fs-5 p-3 px-3 m-0 w-100 text-center" style={{border: `2px solid ${theming.whiteBlack.code}`, 'border-radius': '15px' }}><BsClockHistory className="fs-3 mx-2" />{menuData?.[0].day}</p>
                                                    </Col>
                                                    
                                                </Row>
                                                <Row>
                                                    <Col xs={5} className='p-2 d-flex justify-content-center  align-items-center h-100'>
                                                        <p className="fs-5 p-3 px-3 m-0 w-100 text-center" style={{border: `2px solid ${theming.whiteBlack.code}`, 'border-radius': '15px' }}><BsPersonCircle className="fs-3 mx-2" />{menuData?.[0].diners}</p>
                                                    </Col>
                                                    <Col xs={7} className='p-2 d-flex justify-content-center  align-items-center h-100'>
                                                        <p className="fs-5 p-3 px-3 m-0 w-100 text-center" style={{border: `2px solid ${theming.whiteBlack.code}`, 'border-radius': '15px' }}><GrMoney className="fs-3 mx-2" />{menuData?.[0].pUni} €/<BsPersonPlusFill className=" mb-1" /></p>
                                                    </Col>
                                                    
                                                </Row>
                                               
                                              
                                                <Row>
                                                    <div className="w-100 h-100 text-center p-3 ">
                                                        <div>
                                                            <Row>

                                                                <div className="d-flex flex-column">
                                                                    <div className="d-flex justify-content-center w-100">
                                                                        <img
                                                                            alt=""
                                                                            src={`https://vast-everglades-16758.herokuapp.com/${menuData?.[0].file}`} //ojito con esto!!
                                                                            width="100px"
                                                                            height="100px"
                                                                            className="d-inline-block align-top m-1 rounded"
                                                                        /></div>
                                                                    <div className="mt-3">
                                                                        <h2 className="fs-3">{menuData?.[0].nameRest}</h2>
                                                                    </div>

                                                                    <div className="mt-1">
                                                                        <h4 className="fs-5">{menuData?.[0].addressRest}</h4>
                                                                    </div>
                                                                    <div className="mt-1">
                                                                        <h4 className="fs-5">{menuData?.[0].townRest} - {menuData?.[0].postalRest}</h4>
                                                                    </div>
                                                                    <div className="mt-3">
                                                                        <h5 className="fs-4">{t('byID.x1')}</h5>
                                                                        <h4 className="fs-5">{menuData?.[0].typeFood}</h4>
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
                                                                <div className="w-100 h-100 text-center p-5 ">
                                                                    <h4>MENU  <img alt="" src={espFlg} width="25" height="25" className="d-inline-block align-top mx-1" /> </h4>
                                                                    <p className="m-0 p-0"> Primer Plato</p>
                                                                    <p className="m-0 p-0 pb-2"> {menuData ? menuData[0].FirstPlaEsp : ""}</p>
                                                                    <hr className="m-0 p-0"></hr>
                                                                    <p className="m-0 p-0"> Segundo Plato</p>
                                                                    <p className="m-0 p-0 pb-2">  {menuData ? menuData[0].SecondPlaEsp : ""}</p>
                                                                    <hr className="m-0 p-0"></hr>
                                                                    <p className="m-0 p-0"> Postre</p>
                                                                    <p className="m-0 p-0 pb-2"> {menuData ? menuData[0].CandyPlaEsp : ""}</p>
                                                                    <hr className="m-0 p-0"></hr>
                                                                    <p className="m-0 p-0"> Bebida y otros</p>
                                                                    <p className="m-0 p-0 pb-2"> {menuData ? menuData[0].DrinkPlaEsp : ""}</p>
                                                                    <hr className="m-0 p-0 "></hr>
                                                                </div>

                                                            </Carousel.Item>
                                                            <Carousel.Item>
                                                                <div className="w-100 h-100  text-center p-5 bdRadiusCarr">
                                                                    <h4>MENU <img alt="" src={ukFlg} width="25" height="25" className="d-inline-block align-top mx-1" /></h4>
                                                                    <p className="m-0 p-0"> First</p>
                                                                    <p className="m-0 p-0 pb-2"> {menuData ? menuData[0].FirstPlaIng : ""}</p>
                                                                    <hr className="m-0 p-0"></hr>
                                                                    <p className="m-0 p-0"> Second</p>
                                                                    <p className="m-0 p-0 pb-2"> {menuData ? menuData[0].SecondPlaIng : ""}</p>
                                                                    <hr className="m-0 p-0"></hr>
                                                                    <p className="m-0 p-0">  Dessert</p>
                                                                    <p className="m-0 p-0 pb-2"> {menuData ? menuData[0].CandyPlaIng : ""}</p>
                                                                    <hr className="m-0 p-0"></hr>
                                                                    <p className="m-0 p-0"> Drinks and others</p>
                                                                    <p className="m-0 p-0 pb-2"> {menuData ? menuData[0].DrinkPlaIng : ""}</p>
                                                                    <hr className="m-0 p-0 "></hr>

                                                                </div>
                                                            </Carousel.Item>
                                                        </Carousel>
                                                    </Row>

                                                    <Row>
                                                    
                                                    {
                                                        menuData ? menuData[0].status === "PENDDING" ? <Col xs={{ span: 8, offset: 2 }}>
                                                            <div type='button' className="w-100  text-center mt-5 rounded-pill " style={{'background-color': `#ffee58`}} onClick={handleShow}>
                                                                <p className="p-4" style={{color: 'black'}}>RESERVAR <HiOutlineBadgeCheck /></p>
                                                            </div>
                                                        </Col> 
                                                        :
                                                        <Col xs={{ span: 8, offset: 2 }}>
                                                            <div type='button' className="w-100 bg-danger text-center mt-5 rounded-pill"  style={{'background-color': `#d32f2f`}}>
                                                                <p className="p-4" style={{color: 'white'}}>RESERVADO <BsPatchCheck /></p>
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