
import Login from './Components/Login';
import {Route,Routes} from 'react-router-dom'
import NoPage from './Components/NoPage';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Cart from './Components/Cart';
import UserTransactions from './Components/UserTransactions';
import alertfy from 'alertifyjs'
import { Component, useState } from 'react';
import Navbars from './Components/Navbars';
import ProductDetail from './Components/HomeComponents/ProductDetail';
class App extends Component {
state={
  authorization:false,
  activeUser:{},
  currentCategory:0,
  cart:{products:[],amount:0},
  categories:[{id:1,name:"Beyaz Eşyalar"},{id:2,name:"Elektronik Eşyalar"}],
  products:[
  {id:1,name:"Buzdolabı",categoryId:1,price:10000,stock:10,img:"https://avatars.mds.yandex.net/i?id=ea02d073b0707f194d731a739af38749bff35495-5099622-images-thumbs&n=13"},
  {id:2,name:"Çamaşır Makinesi",categoryId:1,price:8000,stock:5,img:"https://avatars.mds.yandex.net/i?id=28712e8272dbf7e4ee0d5257794611b1e8fbe2ca-6371016-images-thumbs&n=13"}
],
currentProduct:{}
}
  login=(inputs)=>{
  console.log(inputs)
  this.setState({activeUser:inputs})
  this.setState({authorization:true})
}
componentDidMount(){
  this.login();
}
  addCart=(p)=>{
  let newCart=this.state.cart
  let c=newCart.products.find(x=>x.product.id==p.id)
  if (c) {
    c.count++
  }
  else{
    newCart.products.push({product:p,count:1})
  }
  newCart.amount+=p.price
  this.setState({cart:newCart})
  alertfy.success(p.name+" added to cart!",2)
  }
  removeToCart=(p)=>{
    var cardProducts=this.state.cart.products
  var newProducts=cardProducts.filter(x=>x.product.id!=p.id)
  var newCart={products:newProducts,amount:0}
 
  this.setState({cart:newCart})
  }
  categoriFilter=(categoryId)=>{
    this.setState({currentCategory:categoryId})
  }
  goDetail=(id)=>{
     console.log(id)
     var data=this.state.products.find(x=>x.id==id)
     this.setState({currentProduct:data})
  }
  
 render(){ 
  console.log(window.location.href)
  return (
   <>
   {window.location.href!="http://localhost:3001/login"?
   <Navbars cart={this.state.cart} authorization={this.state.authorization} removeToCart={this.removeToCart}/>:""}
    <Routes>
      <Route index element={<Home categoriFilter={this.categoriFilter} categories={this.state.categories} products={this.state.products} addToCart={this.addCart} goDetail={this.goDetail}/>}/>
            <Route path="login" element={<Login loginSubmit={this.login} authorization={this.state.authorization}/>}/>
            <Route path='about-us' element={<AboutUs/>}/>
            <Route path='contact-us' element={<ContactUs/>}/>
            <Route path='login' element={<UserTransactions/>}/>
            <Route path='cart' element={<Cart cart={this.state.cart}/>}/>
            <Route path='/product-detail/:id' element={<ProductDetail product={this.state.currentProduct}/>}></Route>
            <Route path='*' element={<NoPage/>}/>
      </Routes>
   </>
  );
}
}
export default App;
