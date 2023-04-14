import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.png'

function Header( {onLogoClick}) {



  return (
    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand onClick={onLogoClick} style={{cursor: 'pointer'}} >
        <img src={logo} alt='Logo' style={{width: '100px', opacity: '70%' , brightness: '400%'}}/>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      {/* <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  );
}

export default Header;