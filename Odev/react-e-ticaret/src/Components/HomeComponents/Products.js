import { Component } from "react";
import { Card, CardBody, CardFooter, CardHeader, Row,Col, Badge } from "reactstrap";
import {Link} from 'react-router-dom'
import {Route,Routes} from 'react-router-dom'
import ProductDetail from "./ProductDetail";
export default class Products extends Component{

    render(){
        return(
        <>
        <Row className="mt-4">
        {this.props.products.map((p,index)=>(
          <Col key={index} className="col-12 col-lg-3 col-md-6 col-sm-12"> 
          <Card>
                <CardHeader>
                   <Link to={`/product-detail/${p.id}`} onClick={()=>this.props.goDetail(p.id)}>{p.name}</Link> </CardHeader>
                <CardBody>
                    <img src={p.img} height="100px" width="100px"/>
                </CardBody>
                <CardFooter>
                    <strong>{p.price} TL</strong><br/> Son {p.stock} ürün kaldı
                    <Badge color="primary" onClick={()=>this.props.addToCart(p)}>Sepete Ekle</Badge>
                </CardFooter>
            </Card>
            </Col> 
        ))}
        </Row>
        <Routes>
            <Route path="/product-detail" element={<ProductDetail/>}></Route>
        </Routes>
        </>
        )
    }
}