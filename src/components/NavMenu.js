import React from 'react';
import HomeContainer from './HomeContainer';
import { Button, Card, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link, Route} from 'react-router-dom';

function NavMenu() {
  return (
    <div className="NavMenu">
          <Navbar style={{backgroundColor: '#0055a5'}} variant="dark">
            <Navbar.Brand href="/">Outbound Insights</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Contacts</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
            </Nav>
        
          
          </Navbar>

          <Route
                    path="/"
                    component={HomeContainer}
                    exact 
                />
    </div>
  );
 }

export default NavMenu;