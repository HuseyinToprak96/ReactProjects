import { Component } from "react";

export default class ProductDetail extends Component{
    render(){
        const {product}=this.props.product;
        return(
        <>
        <h2>{product.id}</h2>
        </>
        )
    }
}