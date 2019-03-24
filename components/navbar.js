import React from 'react';
import { Button, Badge, Collapse, Fade, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import Link from "next/link";

TODO: 
{/* 
✅ 1. Redo 'Link' design on Navbar 
✅ 2. Consider active indicator on active links 
✅ 3. Flush out functionality 
FIXME: 4. Migrate these TODOs to Trello Board
*/}

export default class navBar extends React.Component {
  constructor(props) {
    super(props); 

    this.state = { 
      collapsed: true, 
    }

    this.toggleNavbar = this.toggleNavbar.bind(this); 
  }

  toggleNavbar() {
    this.setState({ 
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return( 
      <div>
        <Navbar className="main-nav" light expand="md">
          <NavbarBrand href="/" className="mr-auto">
            <img 
              className="logo"
              src="https://raw.githubusercontent.com/Jzbonner/futbol-next/master/img-media/futbol-logo.png" 
              alt="logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav>
              <NavItem className="nav-links">
                <Link href="/">
                  <Button onClick={this.toggle} className="nav-links" color="secondary">Standings Table <Badge color="secondary">⚽</Badge></Button>
                </Link>
              </NavItem>
              <NavItem className="nav-links">
                <Link href="/matches">
                  <Button onClick={this.toggle} className="nav-links" color="secondary">Matches <Badge color="secondary">⌚</Badge></Button>
                </Link>
              </NavItem>
              <NavItem className="nav-links">
                <Link href="/">
                  <Button onClick={this.toggle} className="nav-links" color="secondary">Social <Badge color="secondary">📱</Badge></Button>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}; 

