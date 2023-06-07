import { Component } from "react";

export default class LeftMenu extends Component{
    render(){
        return(
            <>
            <h4 className="bg-dark text-white text-align mt-4">Categories</h4>
            <ul className="list-group">
           {this.props.categories.map((category,index)=>(<li className="list-group-item" style={{cursor:"pointer"}} onClick={()=>this.props.categoriFilter(category.id)} key={index}>{category.name}</li>))}
           </ul>
            </>
        )
    }
}