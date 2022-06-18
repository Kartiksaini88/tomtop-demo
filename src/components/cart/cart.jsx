import {TbDiscount2} from "react-icons/tb"
import { useSelector , useDispatch} from "react-redux/es/exports"
import {AiOutlineHeart} from "react-icons/ai"
import "./cart.css"
import { deleteitem } from "../redux/cart.type"
export const Cart = ()=>{
    const dispatch = useDispatch()
  
    const {cart} = useSelector((store)=>store.cart)
    return(
        <>
        <div className="main_div_cart">
        {cart.map(e=><div className="every_small_div">
        <div>
           <div className="discount_div">{e.discount}<TbDiscount2   size="20px" className="discount_logo"></TbDiscount2></div>
           <div className="product_img_div"><img className="product_img" src={e.img}></img>
           </div>
        </div>
           <div className="txt-div">
              <div className="product_description_div">{e.description}</div>
              <div className="product_price_div">USD${e.price}</div>
              <div className="strikedoff_price">USD${e.strikedOff_price}</div>
              <button onClick={()=>{dispatch(deleteitem(e.id))}} className="btn">Remove</button>
              <AiOutlineHeart ></AiOutlineHeart>
           </div>
        </div>)}
        
     </div>
     </>
    )


}