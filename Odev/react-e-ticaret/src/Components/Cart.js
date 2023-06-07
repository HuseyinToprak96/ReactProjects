import { Component } from "react";
import {Button, Table} from 'reactstrap'
export default class Cart extends Component{
    render(){
        return(
        <>
        <Table>
  <thead className="bg-dark" style={{color:"white"}}>
    <tr >
      <th>
        Product Name
      </th>
      <th>
        Count
      </th>
      <th>
        Price
      </th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    {this.props.cart.products.map((p)=>(<tr>
        <th>{p.product.name}</th>
        <th>{p.count}</th>
        <th>{p.product.price}</th>
        <th>{p.product.price*p.count}</th>
    </tr>))}
    <tr>
        <th colSpan={2}></th>
        <th>Total Amount:</th>
        <th>{this.props.cart.amount}</th>
    </tr>
    <tr>
        <th colSpan={3}></th>
        <th><Button color="primary">Sipariş Ver</Button><Button color="warning">Iptal Et</Button></th>
    </tr>
  </tbody>
</Table>
        </>
        )
    }
}