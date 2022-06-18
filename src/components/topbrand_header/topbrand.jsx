import { Top_Brand } from "./topbrand_data";
import "./top_brand.css"



export const TopBrand = ()=>{

    return(
        <>
        <div className="top_brand_div_main">
         {Top_Brand.map(e=><div className="top_brand_img_div" ><img className="top_brand_img" src={e.img} alt="" /></div>)}
        </div>
        
        </>
    )
}