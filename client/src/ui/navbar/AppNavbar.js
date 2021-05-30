import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import airplane from '../../assets/airplane.png'
import './AppNavbar.css';

const AppNavbar = () => {
  const [cookies, remove] = useCookies();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    if (cookies.token) {
      setIsAuthenticated(true);
    }
  }, [cookies]);

  return (
    <Navbar bg="myColor" variant="dark" sticky="top" expand="sm">
    <Navbar.Brand>
      <img  width="50" height="50" src={airplane}/> 
      {" "} SCE Tours
    </Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
    <Nav className="justify-content-center" style={{ width: "100%" }}>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/deals">Deals</Nav.Link>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
      <Nav.Link href="/your-orders">Your Orders</Nav.Link>
      </Nav>
      <Nav className="justify-content-end" style={{ width: "100%" }}>
      {!isAuthenticated ? (
          <Nav.Link href="/login">Login</Nav.Link>
        ) : (
          <>
              
            <Nav.Link href="/agent-dashboard">Dashboard</Nav.Link>
            <Nav.Link onClick={() => {
              remove('token', "");
              history.push('/');
              window.location.href = window.location.href; }}>Log Out</Nav.Link>
          </>
)}
    </Nav>
    </Navbar.Collapse>
      </Navbar>
  );
};

export default AppNavbar;










