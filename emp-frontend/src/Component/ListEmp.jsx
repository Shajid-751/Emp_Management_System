import React, { useEffect } from 'react'
import { useState } from 'react'
//import the function of list employees:
import { deleteemp, listemp } from '../Service/Empservice'
import { useNavigate } from 'react-router-dom'


const ListEmp = () => {
    //state variable:
    const [employee,setEmployee]=useState([]);

    // navigate :
    const navs=useNavigate();
    //useEffect to get data from listemployees:
    useEffect(()=>{
        getemploy();
    },[])
    // []--> it render only 1st time

    //function for listemployess:
    function getemploy(){
        listemp().then((response)=>{
            setEmployee(response.data)
        })
        .catch((error)=>{
            console.error(error)
        })
    }
    // add employee :
    function addEmp(){
        // navigate to this path:
        navs("/add-employee");
    }
    //onclick function for updates:
    function updates(id){
        //navigate to this path:
        navs(`/update-emp/${id}`)
    }

    //onclick function for delete:
    function deletes(id){
        deleteemp(id).then((response)=>{
            alert(`ID : ${id} has been deleted SuccessFully`);
            getemploy();
        }).catch((er)=>{
            console.log(er);
        })
    }
  return (
    <div className='container'>
        <h2>List Of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addEmp}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Fname</th>
                    <th>Employee Lname</th>
                    <th>Employee Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            {/* map each employee to the field */}
            <tbody>
                {
                    employee.map(e=>
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.fname}</td>
                            <td>{e.lname}</td>
                            <td>{e.email}</td>
                            {/* button for update */}
                            <td>
                                <button className="btn btn-info" onClick={()=> updates(e.id)}>Update</button>
                                {/* button for delete */}
                                <button className='btn btn-danger ms-4' onClick={()=> deletes(e.id)} 
                                    // style={{marginLeft:"10px"}}
                                    >Delete</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmp