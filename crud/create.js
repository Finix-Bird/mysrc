import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Create()
{
    const [ename,setEname]=useState("")
    const [salary,setSalary]=useState()
    const myForm={
        padding:'10px',
        margin:'10px',
        border:'2px solid red'
    }

    const postData=()=>{
        // console.log(ename,salary);
        axios.post('http://localhost:3000/employee',{ename,salary})
    }
        return(
            <div style={myForm}>
                <Link to="/read">List Employee</Link><br/>
                <input type='text' placeholder="ename" onChange={(e)=>setEname(e.target.value)}/><br/>
                <input type='text' placeholder="salary" onChange={e=>setSalary(e.target.value)}/><br/>
                <Link to={"/read"}><button onClick={postData}>Add Employee</button></Link>

            </div>
        )
    
}
export default Create