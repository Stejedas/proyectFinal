import * as React from 'react';
import { render } from 'react-dom';
import Map, { Marker } from 'react-map-gl';
import maplibregl from 'mapbox-gl';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { GetAllOfferts, } from '../../APP/index.jsx';
import { MdLocationOn } from 'react-icons/md';
import {  BiRestaurant, BiFoodMenu } from 'react-icons/bi'
import { BsPinMapFill } from 'react-icons/bs'
import { FiInfo } from 'react-icons/fi'
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BiSearchAlt } from 'react-icons/bi'
import { MdFoodBank, MdOutlineRestaurantMenu } from 'react-icons/md'
import { FaStreetView } from 'react-icons/fa'
import { useContext } from 'react'
import { ThemingContext } from '../mult-theming/theming.context'
import './style.css'




import 'mapbox-gl/dist/mapbox-gl.css'

maplibregl.accessToken = 'pk.eyJ1IjoidGVqZWRhcyIsImEiOiJjbDE3emt2MHgwOHp3M2JtbTI0d204MW92In0.O2VWky7lBOpqeD5yelOS8A';



function MapStreet(props) {

    const [t] = useTranslation("global");
    const [viewRest, uploadViewRest] = useState('busca');

    const [offerts, uploadOfferts] = useState()

    const [theming] = useContext(ThemingContext);

    useEffect(() => {
        uploadOfferts(props.info)
    }, [props])

    const [viewPort, setviewPort] = useState({
        latitude: 40.3983449,
        longitude: -3.6885401,
        zoom: 11,
        width: "200vw",
        height: "100vh"


    })

    console.log(viewRest)


    return (
        <div className="d-flex justify-content-center p-0">
            <Container className='p-0'>
                <Row>
                    <Col xs={12} md={12} lg={7} xl={7} className="pb-3">
                    <Container fluid>
                        <Row>
                        {props !== undefined ? <Map
                            {...viewPort}
                            onMove={evt => setviewPort(evt.viewState)}
                            style={{ height: "40vh" }}
                            mapStyle="mapbox://styles/tejedas/cl17u0aom005715murei29p9x"
                            mapboxAccessToken='pk.eyJ1IjoidGVqZWRhcyIsImEiOiJjbDE3emt2MHgwOHp3M2JtbTI0d204MW92In0.O2VWky7lBOpqeD5yelOS8A'
                            boxZoom={true}

                        >

                            <Marker
                                latitude="40.3983449"
                                longitude="-3.6885401"

                            ><p ><FaStreetView className='fs-2' /></p></Marker>




                            {
                                offerts !== undefined ? offerts.map((e, i) =>


                                    <Marker
                                        key={e.idOffer}
                                        latitude={e.lat}
                                        longitude={e.lon}
                                    >
                                        <button type="submit" className="btn btn-link">
                                            <MdOutlineRestaurantMenu className={`${e.typeFood} fs-3`} onClick={() => { uploadViewRest(e) }} />
                                        </button>
                                    </Marker>)
                                    :
                                    <></>

                            }


                        </Map> : <></>}
                        </Row>
                        <Container className='pb-5'>
                        <Row className='d-flex justify-content-center fs-5' style={{'color': `${theming.whiteBlack.code}`}}>
                            {t('typeFood.x1')}  <MdOutlineRestaurantMenu className="standard w-auto mt-1 p-0 m-1" /> -  {t('typeFood.x2')} <MdOutlineRestaurantMenu className="japanese w-auto mt-1 p-0 m-1" /> - {t('typeFood.x3')} <MdOutlineRestaurantMenu className="asiatic w-auto mt-1 p-0 m-1" /> - {t('typeFood.x4')} <MdOutlineRestaurantMenu className="chinese w-auto mt-1 p-0 m-1" /> 
                        </Row>
                        <Row className='d-flex justify-content-center fs-5' style={{'color': `${theming.whiteBlack.code}`}}>
                        {t('typeFood.x5')} <MdOutlineRestaurantMenu className="american w-auto mt-1 p-0 m-1" /> - {t('typeFood.x6')} <MdOutlineRestaurantMenu className="fastFood w-auto mt-1 p-0 m-1" /> - {t('typeFood.x7')} <MdOutlineRestaurantMenu className="vegan w-auto mt-1 p-0 m-1" />
                        </Row>
                        </Container>
                    </Container>
                        
                    </Col>
                    <Col xs={12} md={12} lg={5} xl={5}>
                        <div className='w-100 h-100'>
                            {
                                viewRest === "busca" ?
                                    <div>
                                        <Card.Body className='d-flex flex-column text-center w-100 border border-3 rounded-3' style={{ 'color': `${theming.whiteBlack.code}`}}>
                                            <p className='px-3 pt-3 fs-5'>{t('map.x1')}</p>

                                            <BiSearchAlt className='fs-1 w-100 text-center pb-3' />
                                        </Card.Body>


                                    </div>

                                    :
                                    <Card className='d-flex flex-row mb-5' > 
                                        <Card.Header className='d-flex justify-content-center align-items-center' >
                                            <img
                                                alt=""
                                                src={`https://vast-everglades-16758.herokuapp.com/${viewRest?.file}`}
                                                width="100"
                                                height="100"
                                                className="d-inline-block align-top"
                                            />
                                        </Card.Header>
                                        <Card.Body style={{ 'background-color': `${theming.backA.code}` , 'color': `${theming.whiteBlack.code}`}}>
                                            <blockquote className="blockquote mb-0">

                                                <div className="mt-2 d-flex flex-row ">
                                                    <BiRestaurant className='mx-2 fs-1'/>
                                                    <h2 className='fs-5'> {viewRest?.nameRest}</h2>
                                                </div>

                                                <div className="mt-2 d-flex flex-row">
                                                    <BsPinMapFill className='mx-2 fs-2' />               
                                                    <h2 className='mx-3 fs-5'>{viewRest?.addressRest}</h2>
                                                </div>
                                                <div className="mt-2 d-flex flex-row">
                                                    <h5 className='mx-3 fs-5 text-center'>{viewRest?.townRest} - {viewRest?.postalRest}</h5>
                                                </div>
                                                <div className="mt-2 d-flex flex-row">
                                                    <BiFoodMenu  className='mx-3 fs-3'/>             
                                                    <h4 className='mx-1 fs-5'>{viewRest?.typeFood}</h4>
                                                </div>

                                                <div className=" mt-3 mb-2 d-flex justify-content-center">
                                                <Link to={`/rest?nameRest=${viewRest.nameRest}&email=${viewRest.token}`} >
                                                    <button type="button" className={`btn btn-${theming.tabSpecial.color}`} style={{'color': `${theming.whiteBlack.code}`}}><MdFoodBank className='fs-3'/> {t('map.x2')}</button>
                                                    </Link>
                                                </div>
                                            </blockquote>
                                        </Card.Body>
                                    </Card>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default MapStreet;
