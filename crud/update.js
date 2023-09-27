import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Update() {
  const [ename,setEname]=useState("")
  const [salary,setSalary]=useState()
  const [id,setId]=useState()

  useEffect(()=>{
    setEname(localStorage.getItem('empName'))
    setSalary(localStorage.getItem('salary'))
    setId(localStorage.getItem('empId'))
  },[])
  const updateEmpData=()=>{
axios.put(`http://localhost:3000/employee/${id}`,{ename,salary})

  }

  return (
    <div>
      <input type='text' placeholder="ename" value={ename} onChange={(e)=>setEname(e.target.value)}/><br/>
      <input type='text' placeholder="salary" value={salary} onChange={e=>setSalary(e.target.value)}/><br/>
     <Link to="/read"> <button onClick={updateEmpData}>Update Employee</button></Link>

    </div>

  )
}

export default Update