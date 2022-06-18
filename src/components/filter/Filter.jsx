import React from "react"
import "../filter/filter.css"
export const Filter = ({filter,current,updatefilter}) => {
  return (
    <div className="container restaurants">
       
            <div className="restaurant-options"> 
            
               {Object.entries(filter).map(([key,value])=><div onClick={()=>{updatefilter(key)}} className={`restaurant-option ${
                 current==key?"underline":""
               }`}>{value}</div>)}
                
            </div>
        </div>
  )
}
