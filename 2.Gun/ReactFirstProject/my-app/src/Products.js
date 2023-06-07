import React,{Component} from "react";
import {Button, Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Col} from 'reactstrap'

export default class Products extends Component{
//Set-ExecutionPolicy -ExecutionPolicy RemoteSigned json
    state={
        products:[
        ],
        currentProduct:""
    }
    changeCurrentProduct=(product)=>{
        this.setState({
            currentProduct:product.productName
        });
    };
   
    render(){
const {products}=this.props;
        return(
            <div>
              <CardGroup>
                {products.map((product)=>(
                    <Col xs="3">
                    <Card style={{marginLeft:"10px",marginRight:"10px"}}
                    key={product.id}>
<CardImg
top 
width="100%"
src={product.image}
alt={product.productName}/>
<CardBody>
    <CardTitle>{product.productName}</CardTitle>
    <CardText>{product.desc}</CardText>
    <Button onClick={()=>this.props.clickBuy(product)}>Buy</Button>
</CardBody>
                    </Card>
                    </Col>
                ))}
              </CardGroup>
                <h2>{this.state.currentProduct}</h2>
                <h2>{this.props.currentCategory}</h2>
            </div>
        );
    }


}