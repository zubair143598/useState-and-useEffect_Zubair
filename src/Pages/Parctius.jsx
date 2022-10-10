import { useState,useEffect } from "react"


const Parctius = () => {
    const [count,setCount]=useState(0)
    //useEffect
    useEffect(() => {
     console.log("useEffect of my practius is created ")
    
      
    }, [count])
    


    function incriment()
    {
        setCount(count+1)
    }
    const decriment=()=>
    {
        setCount(count-1)
    }

  return (
    <div>
        <button className="btn" onClick={decriment}>-</button>
        <span>{count}</span>
        <button className="btn" onClick={incriment}>+</button>

    </div>
  )
}

export default Parctius