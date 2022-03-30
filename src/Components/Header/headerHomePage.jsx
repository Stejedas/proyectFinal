import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import MultiLenguage from '../multi-language'
import logo from '../../Assets/Home/Carrusell/logo.png'
import ThemingSelector from '../mult-theming/theamingSelector'
import { useContext } from 'react'
import { ThemingContext } from '../mult-theming/theming.context'

function HeaderPage(){
    const [t] = useTranslation("global");
    const [theming] = useContext(ThemingContext); 

    return (
<Navbar bg={theming.blueD.color} style={{height: '80px', color: `${theming.whiteBlack.code}`}}>
  <Container fluid>
  <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="80"
          height="80"
          className="d-inline-block align-top p-2"
        /> 
      </Navbar.Brand>
      <Navbar.Text style={{color: `${theming.whiteBlack.code}`}}>
      The Last Table
      </Navbar.Text>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
    
      <Nav>
       
        <div className='d-flex align-items-center'>
        <MultiLenguage></MultiLenguage>
        <ThemingSelector></ThemingSelector>
        </div>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default HeaderPage;