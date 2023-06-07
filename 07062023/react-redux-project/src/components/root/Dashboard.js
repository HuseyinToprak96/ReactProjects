import {Container,Row,Col} from 'reactstrap'
import Categories from '../categories/Categories';
import Products from '../products/Products';
import Navs from '../navi/Navs';
import { Component } from 'react';
export default class Dashboard extends Component { 

    render() {
        return (<>
        <Container>
    <Row>
      <Col className='col-3'>
      <Categories/>
      </Col>
      <Col className='col-8 m-4'>
        <Products/>
        </Col>
    </Row>
  </Container></>)
    }
 }