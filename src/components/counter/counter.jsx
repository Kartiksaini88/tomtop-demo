import { useState } from "react"


export const Counter = ()=>{
 

    const [count , setcount] = useState(0)

    let handlecount = (value) =>{
        setcount(count+value)

    }
  return(
    <p>{count}</p>
  )

}