import { useState } from "react"
import  {Arrival_data} from "./Arrival.data"
import "./Arrival.css"
import {TbDiscount2} from "react-icons/tb"
import { useSelector , useDispatch} from "react-redux/es/exports"
import {AiOutlineHeart} from "react-icons/ai"
import { store } from "../store"
import { Navigate } from "react-router-dom";
import { Filter } from "../filter/Filter"
import { addtocart } from "../redux/cart.type"
import { TopBrand } from "../topbrand_header/topbrand"
import { SideBar } from "../sidebar/sidebar"
import { Bottom_div } from "../bottom_div/bottomdiv"
import { useContext } from "react"
import { AuthContext } from "../Context/auth"
import { useNavigate } from "react-router-dom";

let filter = {
    
   1: "Cost High to Low",
 
   2: "Cost Low to High",
 
   3: "High Discount",
 
   4: "Low Discount",
 
   5: "Relevance",
     
 
 }


export const Arrival = ()=>{

  const {isauth} = useContext(AuthContext)
   console.log(isauth)
  const [new_arrival_data , setdata] = useState(Arrival_data)
  
  const navigate = useNavigate() 
const {cart} = useSelector((store)=>store.cart)


const dispatch = useDispatch()
const [filterdata , setfilter] = useState("")

const handleaddtocart = (e)=>{
   if(isauth){
    dispatch(addtocart(e))
   }
   else{
    navigate("/login")
   }

}
const updatefilter=(value)=>{
   switch(value){
     case "1":{
       setfilter(1)
       new_arrival_data.sort((a,b)=>(b.price-a.price))
       setdata(new_arrival_data)
       break;
     }
     case "2":{
       setfilter(2)
       new_arrival_data.sort((a,b)=>(a.price-b.price))
       setdata(new_arrival_data)
       break;
     }
     case "3":{
       setfilter(3)
       new_arrival_data.sort((a,b)=>(b.discount-a.discount))
       setdata(new_arrival_data)
       break;
     }
     case "4":{
       setfilter(4)
       new_arrival_data.sort((a,b)=>(a.discount-b.discount))
       setdata(new_arrival_data)
       break;
     }
     case "5":{
       setfilter(5)
       // data.sort((a,b)=>(a.deliveryTimings-b.deliveryTimings))
       setdata(new_arrival_data)
       break;
     }
     default:{
       setdata(new_arrival_data)
       break;
     }
   }
  }

   return(
      <>
      <div className="flex_div">
        <div> <SideBar></SideBar></div>
        <div><TopBrand></TopBrand>
       <Filter  current={filterdata} filter={filter} updatefilter={updatefilter}></Filter>
      <div className="main_div">
        
         {new_arrival_data.map(e=><div className="every_small_div">
         <div>
            <div className="discount_div">{e.discount}% OFF<TbDiscount2 size="20px" className="discount_logo"></TbDiscount2></div>
            <div className="product_img_div"><img className="product_img" src={e.img}></img>
            </div>
         </div>
            <div className="txt-div">
               <div className="product_description_div">{e.description}</div>
               <div className="product_price_div">USD${e.price}</div>
               <div className="strikedoff_price">USD${e.strikedOff_price}</div>
               <button onClick={()=>{handleaddtocart(e)}} className="btn">ADD TO 🛒</button>
               <AiOutlineHeart ></AiOutlineHeart>{e.wish}
            </div>
         </div>)}
         
      </div></div>
      </div>
     
       <Bottom_div></Bottom_div>
      </>
   )

}