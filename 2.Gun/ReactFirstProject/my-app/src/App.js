import Categories from './Categories'
import Products from './Products'
import Navbar from './Navbar'
import {Row,Col} from 'reactstrap'
import React, { Component, useState } from 'react'
import alertfy from 'alertifyjs'
import { Routes,Route } from 'react-router-dom'
import CardDetail from './CardDetail'
import Contact from './Contact'
import NoPage from './NoPage'
export default class App extends Component{
  state={
    currentCategory:"",
    products:[],
    num:0,
    basketProducts:[]
  }
  
  getProducts=(categoryId)=>{
    let url="http://localhost:3000/products";
    if(categoryId)
    url+="?categoryId="+categoryId;
    fetch(url)
  .then((response)=>response.json())
  .then((data)=>this.setState({products:data}))

  }
  
 componentDidMount(){
  this.getProducts()
 }

 clickBuy=(product)=>{
  var newBasket=this.state.basketProducts
  var d=newBasket.find(x=>x.product.id==product.id)
  if (!d) {
    var count=this.state.num+1
    this.setState({num:count})
    this.setState(x=>({basketProducts:[...x.basketProducts,{product:product,count:1}]}))
  }
  else{
    d.count++;
    this.setState({basketProducts:newBasket})
  }
  alertfy.success(product.productName+" added to cart!",2)
  //alert(product.productName)
 
      }
  removeChart=(product)=>{
  var list=this.state.basketProducts.filter(x=>x.product.id!==product.id)
  this.setState({basketProducts:list})
  alertfy.error(product.productName+" removed to cart!",2)
  }
  changeCurrentCategory=(category)=>{
    this.setState({
        currentCategory:category.categoryName
    });
    this.getProducts(category.id)
  };
  render(){
    return (
      <div className="App">
        <Navbar num={this.state.num} card={this.state.basketProducts} removeCardProduct={this.removeChart}></Navbar>
        <Row>
          <Col sm="3">
          <Categories changeCurrentCategory={this.changeCurrentCategory}
          currentCategory={this.state.currentCategory}
          ></Categories>
          </Col>
          <Col sm="9">
          <Routes>
            <Route path="/" element={<Products clickBuy={this.clickBuy} currentCategory={this.state.currentCategory} catId={this.state.catId} products={this.state.products}/>
}/>
<Route path='/cart' element={<CardDetail cart={this.state.basketProducts}
 removeToCard={this.removeChart}/>}/>
 <Route path='/contact' element={<Contact/>}/>
 <Route path='/*' element={<NoPage/>}/>
          </Routes>
          </Col>
        </Row>
        
        
      </div>
    );
  }
  
}