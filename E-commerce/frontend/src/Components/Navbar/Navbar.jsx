import React, { useState } from 'react'
import './Navbar.css'
import final from '../Assests/final.png'
import lop from '../Assests/lop.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={lop} alt="" />
                <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to ='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}>Men{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}>Women{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
           
            
        </ul>
           <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <img src={final} alt="" />
            <div className="nav-cart-count"></div>
            </div> 
        </div>
  )
}
export default Navbar
