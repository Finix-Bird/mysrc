import { memo, useState } from "react"

function Callback({count,increment}){
    
    
    return(
        <div>
            <h2>child</h2>
            {console.log("child call")};
            <h1>{count}</h1>
            <button onClick={increment}>click</button>
        </div>
    )
}
export default memo(Callback)