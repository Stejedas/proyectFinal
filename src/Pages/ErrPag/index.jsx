import React from "react";
import FooterCustSupp from "../../Components/FooterCustSupp";
import HeaderCustom from "../../Components/HeaderCustom";
import { Container, Col, Row, Form, Button } from "react-bootstrap"
import './style.css'




function PageError(){

    return (
    <React.Fragment>
        <HeaderCustom></HeaderCustom>
        <Container fluid className="bg-error w-100 h-100 m-0 p-0">
            <Row>
              <Col >
              
              <img
                  src="https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/404-not-found-t.jpg"
                  width="100%"
                  
              />
              </Col>
            </Row>
        </Container>
        <FooterCustSupp></FooterCustSupp>
    </React.Fragment>)
}

export default PageError;