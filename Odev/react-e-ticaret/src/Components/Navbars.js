import React from 'react';
import {Link} from 'react-router-dom'
import { Badge } from 'reactstrap';
function Navbars({cart,authorization,removeToCart}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className='nav-item'>    <a href="" className='navbar-brand'><img src="/bosch.png" height="50px" width="80px"/></a></li>

        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/" className="nav-link">Products</Link>
        </li>
        <li className="nav-item">
        <Link to="/about-us" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
        </li>
        <li className="nav-item">
          {authorization==false?
        <Link to="/login" className="nav-link">Login</Link>:<Link to="/login" className="nav-link">User Settings</Link>
          }</li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cart  {cart.lenght}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {cart.products.map((c,index)=>(<li key={index}>{c.product.name} {c.count} <Badge color='danger' className='m-2' style={{cursor:"pointer"}} onClick={()=>removeToCart(c.product)}>X</Badge></li>
))}
<hr/>
<li>Toplam Tutar:{cart.amount}</li>
<li>
          <Badge color='success'><Link to="/cart" style={{"color":"white"}}>Sepeti Onayla</Link></Badge></li>
          </ul>
          
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbars;