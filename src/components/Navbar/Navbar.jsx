import "./Navbar.css"
import {Link} from "react-router-dom"

export const Navbar=()=>{


    return(
        <div>
           <Link to="/"><img  className="navbar_first_img" src="https://img.tttcdn.com/advertising/2022/6/14/RUvBIs-1396565310.jpg" alt="" /></Link> 
   <nav className="nav">
   <Link to="/"><div className="nav1 center">
      <img
        src="https://img.tttcdn.com/advertising/2022/6/14/QsxxKB-1264470741.jpg"
        alt=""
      />
    </div></Link> 
    <div className="nav2">
      <select id="">
        <option value="">Deliver to <span>110008</span></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <input type="search" name="" id="" />
    </div>
    <div className="flex nav3">
     <Link to="/login"><p> <i className="fa fa-upload"></i><span className="material-symbols-outlined">person</span>Sign-in</p> </Link> 
      <p><i className="fa fa-cart-plus"></i> <span className="material-symbols-outlined">shopping_cart</span> <Link to="/cart">Cart</Link></p>
      <p><i className="fa fa-cart-plus"></i><span className="material-symbols-outlined">favorite</span>Wishlist</p>
    </div>
  </nav>
    <div className="subheader_div">
        <div className="inside_header_div"><Link to="/arrival">New Arrivals</Link></div>
        <div className="inside_header_div"><Link to="/flashdeals">Flash Deals</Link></div>
        <div className="inside_header_div"><Link to="/coupon">Coupons</Link></div>
        <div className="inside_header_div"><Link to="/social">Social Savings</Link></div>
        <div className="inside_header_div">Clearance</div>
    </div>

           
    </div>
    )
}