
import "./coupon.css"
import { coupon_data } from "./coupondata"
import {TbDiscount2} from "react-icons/tb"
import { useSelector , useDispatch} from "react-redux/es/exports"
import {AiOutlineHeart} from "react-icons/ai"
import { Bottom_div } from "../bottom_div/bottomdiv"
import { addtocart } from "../redux/cart.type"
import { useContext } from "react"
import { AuthContext } from "../Context/auth"
import { useNavigate } from "react-router"


export const Coupon = ()=>{

    const {isauth} = useContext(AuthContext)
    const navigate = useNavigate()
const dispatch = useDispatch()
const handleaddtocart = (e)=>{
    if(isauth){
     dispatch(addtocart(e))
    }
    else{
     navigate("/login")
    }
 
 }

    return(
        <div>
           <div><img className="banner_img" src="https://img.tttcdn.com/banner/2018/8/3/1920x500.jpg" alt="" /></div>
            
           <div className="coupon_main_div">
             <header>Shop By Category</header>
             <div className="grid_product_div">
                {coupon_data.map(e=>  <div className="inside_flex_div" >
                    <div>
                    <img className="product_img_coupon" src={e.img} alt="" />
                    </div>
                    <div>
                    <h4 className="product_price">US${e.price}</h4>
                    <p className="product_des">{e.description}</p>
                    </div>
                    <div className="btn_div">   <button onClick={()=>{handleaddtocart(e)}} className="add_to_cart">ADD TO 🛒</button></div>

                </div>)}
              
             </div>
            </div> 

            <Bottom_div></Bottom_div>
        </div>
    )

}