
import { Data } from "./bottom_div_data";
import "./bottmdiv.css"


export const Bottom_div=()=>{

    return(
        <div className="flex_bottom">{Data.map(e=><div className="every_bottom_div"><img className="bottom_img" src={e.img} alt="" /><br /><p>{e.des}</p></div>)}</div>
    )
}