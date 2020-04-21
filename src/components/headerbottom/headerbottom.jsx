import React from "react";
import {
    Row,
    Navbar,
    NavDropdown,
    Nav,
    Form,
    FormControl,
    Button
} from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Logo from '../../logo.jpg'
import queryString from "query-string";
class HeaderBottom extends React.Component {


    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/"><img style={{height:'60px',width:'60px'}} src={Logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href=""><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link href=""><Link to="/login">Login</Link></Nav.Link>
                            <Nav.Link href=""><Link to="/signup">Sign Up</Link></Nav.Link>
                         
                        </Nav>
                    
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default withRouter(HeaderBottom);
