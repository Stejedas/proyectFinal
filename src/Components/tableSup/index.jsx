import React, { useEffect } from "react";
import { Tab, Tabs, Container, Stack, Col, Row, Table, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Button, Modal, Card } from "react-bootstrap";
import { useState } from "react";
import { DeleteOfferById, postAddNewOffer, PatchModificateOfferById } from "../../APP/index.jsx";
import { getOffertsByToken, getUserData, GetAllBooks } from "../../APP/index.jsx";
import { useContext } from 'react'
import { ThemingContext } from '../mult-theming/theming.context'
import './style.css'


function TableSup(props) {

    const [t] = useTranslation("global");

    const [theming] = useContext(ThemingContext); 

    const [valueModificate, updateValueModif] = useState('Open this select menu')
    const [valueModificate2, updateValueModif2] = useState('Open this select menu')

    const [books, uploadBooks] = useState()

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [contador, uploadContador] = useState(0)

    const [arrayOfferts, uploadaArayOfferts] = useState([])

    const token = localStorage.getItem('token');

    async function getOfferts(email, token) {
        const a = await getOffertsByToken(email, token)

        uploadaArayOfferts(a)
    }



    useEffect(() => {

        // traemos todos los datos del restaurante, para su zona perfil y para poder obtener las ofertas
        getOfferts(props.userData?.email, token)
        GetAllBooks(token).then(e => uploadBooks(e))

    }, [props, arrayOfferts.length, contador])

    console.log(props.userData)
    { /* OFFER CREATION FUNCTION */ }
    const createNewOffer = async e => {
        const userFormData = new FormData(e.target);
        userFormData.append('token', token);
        userFormData.append('addressRest', props.userData.address);
        userFormData.append('nameRest', props.userData.comercialName);
        userFormData.append('townRest', props.userData.town);
        userFormData.append('postalRest', props.userData.postalTown);
        userFormData.append('lat', props.userData.lat);
        userFormData.append('lon', props.userData.lon);


        console.log(userFormData)

        await postAddNewOffer(userFormData, token)

        uploadContador(contador + 1)

        handleClose()
    }

    { /* OFFER CHANGE FUNCTION */ }
    const handleModificate = async e => {

        const userFormData = new FormData(e.target);
        userFormData.append('token', token);


        const newOffer = {

            "day": e.target.day.value,
            "hour": e.target.hour.value,
            "diners": e.target.diners.value,
            "pUni": e.target.pUni.value,
            "FirstPlaEsp": e.target.FirstPlaEsp.value,
            "SecondPlaEsp": e.target.SecondPlaEsp.value,
            "CandyPlaEsp": e.target.CandyPlaEsp.value,
            "DrinkPlaEsp": e.target.DrinkPlaEsp.value,
            "FirstPlaIng": e.target.FirstPlaIng.value ? e.target.FirstPlaIng.value : "",
            "SecondPlaIng": e.target.SecondPlaIng.value ? e.target.SecondPlaIng.value : "",
            "CandyPlaIng": e.target.CandyPlaIng.value ? e.target.CandyPlaIng.value : "",
            "DrinkPlaIng": e.target.DrinkPlaIng.value ? e.target.DrinkPlaIng.value : ""


        }
        await PatchModificateOfferById(valueModificate, userFormData, token)

        handleClose2()
    }

    { /* OFFER DELETE FUNCTION */ }
    const handleDelete = async (e) => {

        await DeleteOfferById(valueModificate2, token)
        handleClose3()
    }

    { /* UPDATES THE VALUE TO BE DELETED */ }
    const handleDeleteOffer = e => {
        e.preventDefault();
        updateValueModif2(e.target.value)

    }

    { /* UPDATES THE VALUE TO BE MODIFIED */ }
    const handleChangeModificateOffer = e => {
        e.preventDefault()
        updateValueModif(e.target.value)
    }


    return (
        <React.Fragment>

            { /* MAIN PART OF THE SUPPLIERS PAGE */}
            <Container fluid className="px-5 pt-3" style={{'background-color': `${theming.tabN.code}`, height: "100vh"}}>

                { /* BOTTONS DELETE-MODIFICATE-CREATE OFFERTS */}
                <Row className="px-3 ">
                    <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 4, offset: 7 }} xl={{ span: 6, offset: 6 }} className="d-flex justify-content-end">

                        <Button variant="outline-danger" className="border border-danger px-3 border-2" style={{'color': `${theming.whiteBlack.code}`}} onClick={handleShow3}>{t('supplier.x7')}</Button>{' '}

                        <Button variant="outline-warning" className="border border-warning px-3 mx-3 border-2" style={{'color': `${theming.whiteBlack.code}`}} onClick={handleShow2}>{t('supplier.x6')}</Button>{' '}

                        <Button variant="outline-success" className="border border-success px-3 border-2" style={{'color': `${theming.whiteBlack.code}`}} onClick={handleShow}>{t('supplier.x4')}</Button>{' '}
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 12, offset: 0 }}>
                        <Container fluid className="pb-5 ">
                            <Tabs
                                defaultActiveKey="home"
                                transition={false}
                                id="noanim-tab-example"
                                className=" px-3 pt-3 table-responsive"
                                style={{'color': `${theming.whiteBlack.code}`}}
                            >
                                { /* TABLE PENDDING OFFERTS */}
                                <Tab eventKey="home" title={t('supplier.x1')} style={{'min-height': '500px', 'color': `${theming.whiteBlack.color}`, 'background-color': `${theming.tabD.code}` }}>
                                  
                                    <Row>

                                        <Table striped bordered hover  responsive="xl" variant={`${theming.tabSpecial.color}`}>
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-center">{t('tableTwo.x1')}</th>
                                                    <th className="text-center">{t('tableTwo.x2')}</th>
                                                    <th className="text-center">{t('tableTwo.x7')}</th>
                                                    <th className="text-center">{t('tableTwo.x4')}</th>
                                                    <th className="text-center">{t('tableTwo.x5')}</th>

                                                    <th className="text-center">{t('tableTwo.x3')}</th>
                                                    <th className="text-center">{t('tableTwo.x8')}</th>
                                                    <th className="text-center">{t('tableTwo.x9')}</th>



                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    arrayOfferts ? arrayOfferts.map((e, i) => {
                                                        if (e.status === 'PENDDING') {
                                                            return (

                                                                <tr key={i} >


                                                                    <td className="text-center pt-3">{i + 1}</td>
                                                                    <td className="text-center pt-3">{e.day}</td>
                                                                    <td className="text-center pt-3">{e.hour}</td>
                                                                    <td className="text-center pt-3">{e.diners} Personas</td>
                                                                    <td className="text-center pt-3">{e.pUni}€</td>
                                                                    <td className="text-center pt-3">{e.diners * e.pUni}€</td>
                                                                    <td className="text-center pt-3">
                                                                        <Table striped bordered hover size="sm" variant={`${theming.tabSpecial.color}`}>
                                                                            <thead>
                                                                                <tr>
                                                                                    <th></th>
                                                                                    <th className="text-center">{t('tableTwo.x10')}</th>
                                                                                    <th className="text-center">{t('tableTwo.x11')}</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr >
                                                                                    <td className="text-center">1º</td>
                                                                                    <td className="text-center text-break">{e?.FirstPlaEsp}</td>
                                                                                    <td className="text-center text-break">{e?.FirstPlaIng}</td>

                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="text-center">2º</td>
                                                                                    <td className="text-center text-break">{e?.SecondPlaEsp}</td>
                                                                                    <td className="text-center text-break">{e?.SecondPlaIng}</td>

                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="text-center">POS</td>
                                                                                    <td className="text-center text-break">{e?.CandyPlaEsp}</td>
                                                                                    <td className="text-center text-break">{e?.CandyPlaIng}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="text-center">BEB</td>
                                                                                    <td className="text-center text-break">{e?.DrinkPlaEsp}</td>
                                                                                    <td className="text-center text-break">{e?.DrinkPlaIng}</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </Table>
                                                                    </td>
                                                                    <td className="text-center pt-3 "><p>{e?.idOffer}</p></td>
                                                                    <td className="text-center pt-3">{e?.status}</td>



                                                                </tr>

                                                            )
                                                        }
                                                    }) : "<></>"
                                                }



                                            </tbody>

                                        </Table>

                                    </Row>

                                </Tab>



                                { /* TABLE ALL OFFERTS */}
                                <Tab eventKey="profile" title={t('supplier.x2')}  style={{'min-height': '500px', 'color': `${theming.whiteBlack.color}`, 'background-color': `${theming.tabD.code}` }}>
                                    <Row> </Row>
                                    <Row>
                                        <Table striped bordered hover className="mb-5" variant={`${theming.tabSpecial.color}`}>
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th className="text-center pt-3">{t('tableTwo.x1')}</th>
                                                    <th className="text-center pt-3">{t('tableTwo.x2')}</th>
                                                    <th className="text-center pt-3">{t('tableTwo.x7')}</th>
                                                    <th className="text-center pt-3">{t('tableTwo.x4')}</th>
                                                    <th className="text-center pt-3"> {t('tableTwo.x5')}</th>

                                                    <th className="text-center pt-3">{t('tableTwo.x3')}</th>
                                                    <th className="text-center pt-3">{t('tableTwo.x8')}</th>
                                                    


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    arrayOfferts ? arrayOfferts.map((e, i) => {
                                                        return (
                                                            <tr key={i}>
                                                                <td className="text-center pt-3">{i + 1}</td>
                                                                <td className="text-center pt-3">{e.day}</td>
                                                                <td className="text-center pt-3">{e.hour}</td>
                                                                <td className="text-center pt-3">{e.diners} Personas</td>
                                                                <td className="text-center pt-3">{e.pUni}€</td>
                                                                <td className="text-center pt-3">{e.diners * e.pUni}€</td>
                                                                <td className="text-center pt-3">
                                                                    <Table striped bordered hover size="sm" variant={`${theming.tabSpecial.color}`}>
                                                                        <thead>
                                                                            <tr>
                                                                                <th></th>
                                                                                <th className="text-center">ESP</th>
                                                                                <th className="text-center">ING</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr >
                                                                                <td className="text-center" >1º</td>
                                                                                <td className="text-center" name="number1">{e.FirstPlaEsp}</td>
                                                                                <td className="text-center">{e.FirstPlaIng}</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">2º</td>
                                                                                <td className="text-center">{e.SecondPlaEsp}</td>
                                                                                <td className="text-center">{e.SecondPlaIng}</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">POS</td>
                                                                                <td className="text-center">{e.CandyPlaEsp}</td>
                                                                                <td className="text-center">{e.CandyPlaIng}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">BEB</td>
                                                                                <td className="text-center">{e.DrinkPlaEsp}</td>
                                                                                <td className="text-center">{e.DrinkPlaIng}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </Table>
                                                                </td>
                                                                <td className="text-center pt-3">{e.status}</td>
                                                            </tr>
                                                        )
                                                    }) : <></>
                                                }



                                            </tbody>
                                        </Table>
                                    </Row>




                                </Tab>

                                { /* USER RESERVATIONSS */}
                                <Tab eventKey="contact" title={t('supplier.x8')} style={{'min-height': '500px', 'color': `${theming.whiteBlack.color}`, 'background-color': `${theming.tabD.code}` }} >
                                    <Container>
                                        <Row>

                                        </Row>
                                    </Container>
                                    {
                                        (books && props.userData) ? books.map((e,i)=> e.emailRest === props.userData?.email ? (
                                            <Col>
                                                <Card key={i} className="d-flex flex-row">
                                                    <Card.Body className="d-flex flex-row">
                                                        <div className="w-50 text-center">
                                                            <h5>ID oferta:</h5>{e.idOffer}
                                                        </div>
                                                        <div className="w-50 text-center">
                                                            <h5>Email Usuario:</h5>{e.emailUser}
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ) : '') : "undefined"
                                    }
                                </Tab>
                                

                            </Tabs>
                        </Container>
                    </Col>
                </Row>


            </Container>

            { /* MODAL FOR OFFER CREATION */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Form onSubmit={createNewOffer}>
                    <Modal.Header closeButton>
                        <Modal.Title >{t('supplier.x4')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>


                            <Row >
                                <Form.Group className="mb-3 d-flex flex-row" controlId="exampleForm.ControlInput1">
                                    <Col xs={6}>

                                        <Form.Label>Fecha</Form.Label>
                                        <Form.Control type="date" name="day" placeholder="name@example.com" required />
                                    </Col>
                                    <Col xs={6}>

                                        <Form.Label>Hora</Form.Label>
                                        <Form.Control type="time" name="hour" placeholder="name@example.com" required />

                                    </Col>
                                </Form.Group>

                            </Row>
                            <Row >
                                <Form.Group className="mb-3 d-flex flex-row" controlId="exampleForm.ControlInput1">
                                    <Col xs={6}>

                                        <Form.Label>Nº Comensales</Form.Label>
                                        <Form.Control type="number" name="diners" placeholder="0" required />
                                    </Col>
                                    <Col xs={6}>

                                        <Form.Label>Precio por persona en €</Form.Label>
                                        <Form.Control type="number" name="pUni" min="1" step="any" placeholder="0" required />

                                    </Col>
                                </Form.Group>

                            </Row>
                            <Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Menu (Español)</Form.Label>

                                    <Form.Control as="textarea" name="FirstPlaEsp" rows={1} placeholder='1º Plato / Entrantes' required />
                                    <Form.Control as="textarea" name="SecondPlaEsp" rows={1} placeholder='2º Plato' required />
                                    <Form.Control as="textarea" name="CandyPlaEsp" rows={1} placeholder='Postre' required />
                                    <Form.Control as="textarea" name="DrinkPlaEsp" rows={1} placeholder='Bebidas y otros' required />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Menu (Ingles Opc.)</Form.Label>

                                    <Form.Control as="textarea" name="FirstPlaIng" rows={1} placeholder='1º Plato / Entrantes' />
                                    <Form.Control as="textarea" name="SecondPlaIng" rows={1} placeholder='2º Plato' />
                                    <Form.Control as="textarea" name="CandyPlaIng" rows={1} placeholder='Postre' />
                                    <Form.Control as="textarea" name="DrinkPlaIng" rows={1} placeholder='Bebidas y otros' />

                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3" controlId="exampleForm.imgRest">
                                    <Form.Label>Img</Form.Label>
                                    <Form.Control type="file" name="file" rows={1} placeholder='img' />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3" controlId="exampleForm.imgRest">
                                    <Form.Select aria-label="Default select example" name="typeFood">
                                        <option>TYPO DE COMIDA</option>
                                        <option value="standard">ESTANDAR</option>
                                        <option value="japanese">JAPONESA</option>
                                        <option value="asiatic">ASIATICA</option>
                                        <option value="chinese">CHINA</option>
                                        <option value="american">AMERICANA</option>
                                        <option value="fastFood">FAST FOOD</option>
                                        <option value="vegan">VEGANO</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            {t('supplier.x5')}
                        </Button>
                        <Button variant="success" type="submit">{t('supplier.x3')}</Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            { /* MODAL FOR OFFER MODIFICATION */}
            <Modal
                show={show2}
                onHide={handleClose2}
                backdrop="static"
                keyboard={false}
            >
                <Form onSubmit={handleModificate}>
                    <Modal.Header closeButton>
                        <Modal.Title >{t('supplier.x6')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Container>
                            <Row>
                                <Form.Select aria-label="Default select example" onChange={handleChangeModificateOffer}>
                                    <option>Open this select menu</option>
                                    {
                                        arrayOfferts ? arrayOfferts.filter(e => e.status === 'PENDDING').map((e, i) => { return <option key={i} value={e.idOffer}>{e.idOffer}</option> }) : <></>
                                    }
                                </Form.Select>

                            </Row>


                            {
                                valueModificate !== 'Open this select menu' ? <Stack><Row >
                                    <Form.Group className="mb-3 mt-3 d-flex flex-row" controlId="exampleForm.ControlInput1">
                                        <Col xs={6}>

                                            <Form.Label>Fecha</Form.Label>
                                            <Form.Control type="date" name="day" required ></Form.Control>
                                        </Col>
                                        <Col xs={6}>

                                            <Form.Label>Hora</Form.Label>
                                            <Form.Control type="time" name="hour" placeholder={arrayOfferts.find(e => e.idOffer === valueModificate).hour} required />

                                        </Col>
                                    </Form.Group>

                                </Row>
                                    <Row >
                                        <Form.Group className="mb-3 d-flex flex-row" controlId="exampleForm.ControlInput1">
                                            <Col xs={6}>

                                                <Form.Label>Nº Comensales</Form.Label>
                                                <Form.Control type="number" name="diners" placeholder={arrayOfferts.find(e => e.idOffer === valueModificate).diners} required />
                                            </Col>
                                            <Col xs={6}>

                                                <Form.Label>Precio por persona en €</Form.Label>
                                                <Form.Control type="number" name="pUni" min="1" step="any" placeholder={arrayOfferts.find(e => e.idOffer === valueModificate).pUni} required />

                                            </Col>
                                        </Form.Group>

                                    </Row>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Menu (Español)</Form.Label>

                                            <Form.Control as="textarea" name="FirstPlaEsp" rows={1} placeholder={arrayOfferts.find(e => e.idOffer === valueModificate).FirstPlaEsp} required />
                                            <Form.Control as="textarea" name="SecondPlaEsp" rows={1} placeholder={arrayOfferts.find(e => e.idOffer === valueModificate).SecondPlaEsp} required />
                                            <Form.Control as="textarea" name="CandyPlaEsp" rows={1} placeholder={arrayOfferts.find(e => e.idOffer === valueModificate).CandyPlaEsp} required />
                                            <Form.Control as="textarea" name="DrinkPlaEsp" rows={1} placeholder={arrayOfferts.find(e => e.idOffer === valueModificate).DrinkPlaEsp} required />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Menu (Ingles Opc.)</Form.Label>

                                            <Form.Control as="textarea" name="FirstPlaIng" rows={1} placeholder={arrayOfferts.find(e => e.idOffer === valueModificate).FirstPlaIng} />
                                            <Form.Control as="textarea" name="SecondPlaIng" rows={1} placeholder={arrayOfferts.find(e => e.idOffer === valueModificate).SecondPlaIng} />
                                            <Form.Control as="textarea" name="CandyPlaIng" rows={1} placeholder={arrayOfferts.find(e => e.idOffer === valueModificate).CandyPlaIng} />
                                            <Form.Control as="textarea" name="DrinkPlaIng" rows={1} placeholder={arrayOfferts.find(e => e.idOffer === valueModificate).DrinkPlaIng} />

                                        </Form.Group>



                                    </Row>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="exampleForm.imgRest">
                                            <Form.Label>Img</Form.Label>
                                            <Form.Control type="file" name="file" rows={1} placeholder='img' />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="exampleForm.imgRest">
                                            <Form.Select aria-label="Default select example" name="typeFood">
                                                <option>TYPO DE COMIDA</option>
                                                <option value="standard">ESTANDAR</option>
                                                <option value="japanese">JAPONESA</option>
                                                <option value="asiatic">ASIATICA</option>
                                                <option value="chinese">CHINA</option>
                                                <option value="american">AMERICANA</option>
                                                <option value="fastFood">FAST FOOD</option>
                                                <option value="vegan">VEGANO</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <Row> <Button className="mt-3 p-2" type="submit" variant="warning"><strong>MODIFICAR</strong></Button> </Row> : <></></Stack> : <></>}

                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            {t('supplier.x5')}
                        </Button>

                    </Modal.Footer>
                </Form>
            </Modal>

            { /* MODAL FOR OFFER DELETE */}
            <Modal
                show={show3}
                onHide={handleClose3}
                backdrop="static"
                keyboard={false}
            >
                <Form onSubmit={handleDelete}>
                    <Modal.Header closeButton>
                        <Modal.Title >{t('supplier.x6')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Container>
                            <Row>
                                <Form.Select aria-label="Default select example" onChange={handleDeleteOffer}>
                                    <option>Open this select menu</option>
                                    {
                                        arrayOfferts ? arrayOfferts.filter(e => e.status === 'PENDDING').map((e, i) => { return <option key={i} value={e.idOffer}>{e.idOffer}</option> }) : <></>
                                    }
                                </Form.Select>

                            </Row>


                            {
                                valueModificate2 !== 'Open this select menu' ? <Row> <Button className="mt-3 p-2" type="submit" variant="danger"><strong>ELIMINAR</strong></Button> </Row> : <></>
                                /* 
                                aqui paro para seguir mañana: 
                                    deberia eliminarlo de la base de datos, y tambien del array para que se vea en directo (quizas esto funcione para las nuevas etiquetas tambien, asique miremoslo tambien, puesto que cuando reinicias cmabias todo de nuevo GRANDE SERGIO JODDER)
                                    despues sigue con la modificacion que esta ya hecha y simplemente hay que hacer el patch del backend
                                */
                            }
                            <Row>
                                <p> Solo podra eliminar aquellas que se encuentren PENDIENTES</p>
                            </Row>

                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose3}>
                            {t('supplier.x5')}
                        </Button>

                    </Modal.Footer>
                </Form>
            </Modal>

        </React.Fragment >


    )

}

export default TableSup;