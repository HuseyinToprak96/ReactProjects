import { Component } from "react";
import { Container,Row,Col } from "reactstrap";
import LeftMenu from "./HomeComponents/LeftMenu";
import Products from "./HomeComponents/Products";

export default class Home extends Component{
    
    render(){
        return(
            <>
            <Container>
                <Row>
<Col className="col-4">
    <LeftMenu categories={this.props.categories} categoriFilter={this.props.categoriFilter}/>
</Col>
<Col className="col-8">
    <Products products={this.props.products} addToCart={this.props.addToCart} goDetail={this.props.goDetail}/>
    </Col>
                </Row>
            </Container>
            </>
        )
    }
}