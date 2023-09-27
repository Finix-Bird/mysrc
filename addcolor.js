import { useState } from "react";
import Colorbox from "./colorbox";

function Addcolor()
{
    //const[state,setState]=useState(InitialValue)
    // const [t1,t2]=[100,200]
    //state-current value
    //setState--Informs React state in change
    //re-render
    const [color,setcolor]=useState("")
    // const colorList=["red","skyblue","orange"]

    const [colorList,setColorList]=useState(["red","skyblue","orange"])

    const styles = {
        fontSize:"30px",
        backgroundColor : color,
        width:"300px"
    }
    //JS ends
    //JSX starts
    return(
        <div className="color">
            <input type="text"  style={styles}
             onChange={(event)=>{setcolor(event.target.value)}}
            />
            <button onClick={()=>{setColorList([...colorList,color])}}>Add Color</button>

            {
                colorList.map(clr=><Colorbox color={clr}/>)
            }
        </div>
    )
}
export default Addcolor