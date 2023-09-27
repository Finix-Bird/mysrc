import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Read() {
    const [employee,setEmployee]=useState([])

    const getEmployee=()=>
    {
    axios.get('http://localhost:3000/employee').then(response=>setEmployee(response.data))

    }

    //componentDidMount()
useEffect(()=>{
    getEmployee()
}
,[])

//update operation
    const setData=(data)=>
    {
        const {id,ename,salary}=data
        // console.log(data);
        localStorage.setItem("empId",id)
        localStorage.setItem("empName",ename)
        localStorage.setItem('salary',salary)
    }   


    //delete operation
    const onDelete=(id)=>
    {
        axios.delete(`http://localhost:3000/employee/${id}`).then(getEmployee)
    }

  return (

    <div>
        <h1>EmployeeDatabase</h1>
        <Link to="/">Add Employee</Link> 
        <table style={{backgroundColor:'grey'}}>
            <thead>
                <tr><th>Name</th><th>Salary</th><th>Actions</th></tr>
            </thead>
            <tbody>
                {
                    employee && employee.map(e=><tr key={e.id}><td>{e.ename}</td><td>{e.salary}</td><td><Link to="/update"><button onClick={()=>setData(e)}>Edit</button></Link><button onClick={()=>onDelete(e.id)}>Delete</button></td></tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default Read   