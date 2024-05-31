import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';
 const Navbar=() => {

    const[menu,setMenu]=useState("shop");
    const{getTotalCartItems}=useContext(ShopContext);
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src="https://img.freepik.com/premium-vector/shopping-bag-illustration-vector_643279-153.jpg" alt=" "/>
            <p>SHOPPER</p>
        </div>
<ul className="nav-menu">
    <li ><Link to='/'>Shop</Link><hr/></li>
    <li><Link to='/men'>Men</Link></li>
    <li ><Link to='/women'>Women</Link></li>
    <li ><Link to='/kids'>Kids</Link></li>
</ul>
<div className="nav-login-cart">
   <Link to='/login'><button>Login</button></Link> 
   <Link to='/cart'><img src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg" alt=" "/></Link> 
    <div className="nav-cart-count">{getTotalCartItems()}</div>
</div>
    </div>
  )
}
export default Navbar