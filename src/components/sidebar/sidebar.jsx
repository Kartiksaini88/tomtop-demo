import { sidebardata } from "./sidebardata"
import "./sidebar.css"

export const SideBar = ()=>{
    return(
        <div className="sidebar_main_div">
            <div className="both_side_div"> {sidebardata.Release_data.map(e=><div className="radio"><input type="radio" name="" id="" /><p className="side_p">{e.txt}</p></div>)}</div>
            <div className="both_side_div">{sidebardata.Department.map(e=><p className="dep_p">{e.txt}</p>)}</div>
        </div>
    )
}