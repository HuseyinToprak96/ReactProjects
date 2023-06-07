import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from 'reactstrap';



export default class Navbars extends Component{
  
  render(){

    return (
      <div>
        <Navbar>
            <Nav className="me-auto" navbar>
            <NavItem>
                <NavLink href="/components/"></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options {this.props.card.length}
                </DropdownToggle>
                <DropdownMenu right>
                 {this.props.card.map((basket)=>( <DropdownItem key={basket.product.id}> {basket.product.productName} {basket.count} <Badge className='btn btn-danger' onClick={()=>this.props.removeCardProduct(basket.product)}>X</Badge></DropdownItem> ))}
                 <DropdownItem ><Link to="/cart"> Card</Link></DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
        </Navbar>
      </div>
    );
  }

  
}