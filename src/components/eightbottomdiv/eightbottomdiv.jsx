
import { Bottom_div_data } from "./eightbottomdivdata"
import {TbDiscount2} from "react-icons/tb"
import { useSelector , useDispatch} from "react-redux/es/exports"
import {AiOutlineHeart} from "react-icons/ai"
import { addtocart } from "../redux/cart.type"
import "./eightbottomdiv.css"

export const Eightbottomdiv = ()=>{
 
    const dispatch = useDispatch()



    return(
        <div className="main_div_bot">
        
        {Bottom_div_data.map(e=><div className="every_small_div">
        <div>
           <div className="discount_div">{e.discount}% OFF<TbDiscount2 size="20px" className="discount_logo"></TbDiscount2></div>
           <div className="product_img_div"><img className="product_img" src={e.img}></img>
           </div>
        </div>
           <div className="txt-div">
              <div className="product_description_div">{e.description}</div>
              <div className="product_price_div">USD${e.price}</div>
              <div className="strikedoff_price">USD${e.strikedOff_price}</div>
              <button onClick={()=>{dispatch(addtocart(e))}} className="btn">ADD TO 🛒</button>
              <AiOutlineHeart ></AiOutlineHeart>{e.wish}
           </div>
        </div>)}
        
     </div>
    )
}