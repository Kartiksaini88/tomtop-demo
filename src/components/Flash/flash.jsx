
import "./flash.css"
import { flash_data } from "./flashdata"
import { addtocart } from "../redux/cart.type"
import { useSelector , useDispatch} from "react-redux/es/exports"
import { nanoid } from "nanoid"
import { Bottom_div } from "../bottom_div/bottomdiv"
import { Eightbottomdiv } from "../eightbottomdiv/eightbottomdiv"
import { Top_Brand } from "../topbrand_header/topbrand_data"
import { TopBrand } from "../topbrand_header/topbrand"
import { AuthContext } from "../Context/auth"
import { useContext } from "react"
import { useNavigate } from "react-router"
export const Flash = ()=>{
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const {isauth} = useContext(AuthContext)
   const addtocarthandle = (img,des,price,strikeoff)=>{
      var data={
             id:nanoid(4),
            img:img,
            description:des,
            price:price,
            strikedOff_price:strikeoff,
            discount:40,
        }
       
        if(isauth){
          dispatch(addtocart(data))
         }
         else{
          navigate("/login")
         }
      
   }
   
   


    return(
      <>
      <div className="flash_main_div">
        {flash_data.map(e=><div className="every_smalldiv">
            <div className={e.id % 2 !== 0 ? "back_url" :"back_urlblue"}>
              <img className="round_img" src={e.img1}alt="" />
              <h4 className="r_title">{e.title}</h4>
            </div>
            <div className="grid_three">
              <div><img className="three_img" src={e.img2}alt="" />
               <p className="three_p">{e.des1}</p>
               <p className="three_price">US${e.pirce1}</p>
               <p className="strike_three">US${e.strikedoff1}</p>
               <button  onClick={()=>{addtocarthandle(e.img2,e.des1 ,e.pirce1 ,e.strikedoff1)}} className="orange">ADD TO 🛒</button>
              </div>
              <div><img className="three_img" src={e.img3} alt="" />
              <p className="three_p">{e.des2}</p>
              <p className="three_price">US${e.pirce2}</p>
               <p className="strike_three">US${e.strikedoff2}</p>
               <button value={2} onClick={()=>{addtocarthandle(e.img3,e.des2 ,e.pirce2 ,e.strikedoff2)}} className="orange">ADD TO 🛒</button>
              </div>
              <div><img className="three_img" src={e.img4}alt="" />
              <p className="three_p">{e.des3}</p>
              <p className="three_price">US${e.pirce3}</p>
               <p className="strike_three">US${e.strikedoff3}</p>
               <button value={3} onClick={()=>{addtocarthandle(e.img4,e.des3 ,e.pirce3 ,e.strikedoff3)}} className="orange">ADD TO 🛒</button>
              </div>
            </div>
          </div>)}
          
           
      </div>
       <TopBrand></TopBrand>
      <Eightbottomdiv></Eightbottomdiv>
      <Bottom_div></Bottom_div>
      </>
    )
}
