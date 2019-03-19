import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Link from "next/link";

TODO: 
{/* 
1. Redo 'Link' design on Navbar 
2. Consider active indicator on active links 
*/}

export default class extends React.Component {
  constructor(props) {
    super(props); 

    this.toggleNavbar = this.toggleNavbar.bind(this); 
    this.state = { 
      collapsed: true
    }
  }

  toggleNavbar() {
    this.setState({ 
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return( 
      <div>
        <Navbar className="main-nav" color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Futbol ⚽ League Table</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link href="/">
                  <a>Premiere League</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/bundesliga">
                  <a>Bundesliga</a>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}; 

