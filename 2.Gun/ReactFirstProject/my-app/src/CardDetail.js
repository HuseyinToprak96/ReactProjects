import { Component } from "react";
import { Badge, Table } from "reactstrap";
export default class CardDetail extends Component{
    render(){
        return (
            <>
            <Table hover>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
       CategoryId
      </th>
      <th>
       Product Name
      </th>
      <th>
        Quantity
      </th>
      <th>

      </th>
    </tr>
  </thead>
  <tbody>
    {
        this.props.cart.map((c,index)=>(
            <tr key={index}>
            <th scope="row">
              {c.product.id}
            </th>
            <td>
            {c.product.categoryId}
            </td>
            <td>
              {c.product.productName}
            </td>
            <td>
              {c.count}
            </td>
            <td>
              <Badge onClick={()=>this.props.removeToCard(c.product)}>Remove</Badge>
            </td>
          </tr>
        ))
    }
  
   
  </tbody>
</Table>
            </>
        )
    }
}