import { Bottom_div } from "../bottom_div/bottomdiv"
import { TopBrand } from "../topbrand_header/topbrand"
import "./social.css"
import {Link} from "react-router-dom"
import { Social_data } from "./social.data"

export const Social = ()=>{

    return(
        <div>
            <div><img className="banner_img" src="https://img.tttcdn.com/advertising/2019/5/7/y2EpJm1089631495.jpg" alt="" /></div>
            <TopBrand></TopBrand>
            <div className="two_grid_div">
                {Social_data.map(e=><Link to="/social"> <div className="flex_inner">
                    <div><img className="social_pro_img" src={e.img} alt="" /></div>
                    <div className="des_div">
                        <div><p className="des_p">{e.des}</p></div>
                        <div><p className="price_p">US${e.price}</p></div>
                        <div><p className="strike_p">US${e.strike_price}</p></div>
                        <div><p className="buy_p">{e.buyers}</p></div>
                        <div><p className="ppl_p">{e.people}</p></div>
                        <div className="start">Start Social Saving</div>
                    </div>
                </div></Link>)}
                
            </div>
            
        </div>
    )
}
