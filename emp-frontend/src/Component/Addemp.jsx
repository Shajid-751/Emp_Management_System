import React, { useEffect, useState } from 'react'
import { createemp, getemp, updateemp } from '../Service/Empservice';
import { useNavigate, useParams } from 'react-router-dom';




const Addemp = () => {

  const [fname,setFname]=useState("");
  const[lname,setLname]=useState("");
  const[email,setEmail]=useState("");

  //params:
  const{id}=useParams();
  //validate the form:
  const [errorr,setError]=useState({
    fname:"",
    lname:"",
    email:""
  })

  //navigation for navigate:
  const navs=useNavigate();
  // onchange function for firstname :
  // m1 :
  // function first(e){
  //   setFname(e.target.value)
  // }

  // m2 :
  // const first=(e)=>{
  //   setFname(e.target.value)
  // }

  // onchange function for lastname :
  // m1 :
  // function last(e){
  //   setLname(e.target,value);
  // }
  
  // m2 :
  // const last=(e)=>{
  //   setLname(e.target,value);
  // }

  //onchange function for email:
  //m1 :
  // function emaill(e){
  //   setEmail(e.target.value);
  // }

  //m2 :
  // const emaill=(e)=>{
  //   setEmail(e.target.value);
  // }

  //onclick function for save the employee:
  //m1 :
  // function saveEmp(e){
  //   e.preventDefault();

  //   const emp={fname,lname,email};
  //   console.log(emp);
  // }

  //m2 :
  function SaveorUpdEmp(e){
    e.preventDefault();
    if(validform()){
      const emp={fname,lname,email};
      console.log(emp); 

      // for update :
      if(id){
        updateemp(id,emp).then((response)=>{
          console.log(response.data);
          alert("Updated SuccessFully");
          navs("/employees");
        }).catch((erro)=>{
          console.log(erro);
        })
      }
      // for create :
      else{
          // send the given data from the event to createemp function of axios:
        createemp(emp).then((response)=>{
          console.log(response.data);
          //after add move to employees page :
          alert("SuccessFully Added");
          navs("/employees");
        }).catch((er)=>{
          console.log(er);
        })
      }
    }
  }

  // function for validation the form :
  function validform(){
    let valid=true;
    //copy of error state variable:
    const cerror={... errorr};
    // if value enter no error msg:
    if(fname.trim()){
      cerror.fname="";
    }
    //no value then show the error:
    else{
      cerror.fname="First Name Is Required!";
      valid=false;
    }

    //check lastname:
    if(lname.trim()){
      cerror.lname="";
    }
    else{
      cerror.lname="Last Name Is Required!";
      valid=false;
    }

    //check email:
    if(email.trim()){
      cerror.email="";
    }
    else{
      cerror.email="Email Is Required!";
      valid=false;
    }
    setError(cerror);
    return valid;
  }

  // here , we doing the update operation in the same page of add employee. so we need to change the title:
  function tit(){
    if(id){
      return <h2 className="text-center">Update Employee</h2>
    }
    else{
      return <h2 className="text-center">Add Employee</h2>
    }
  }
 //getemployee by id:
 useEffect(()=>{
  if(id){
    getemp(id).then((response)=>{
      setFname(response.data.fname);
      setLname(response.data.lname);
      setEmail(response.data.email);
    }).catch((e)=>{
      console.log(e);
    })
  }
 },[id])

  return (
    <div>
        <div className='container'>
          <br /> <br />
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              {
                tit()
              }
              <div className="card-body">
                <form>
                  {/* firstname */}
                  <div className="form-group mb-2">
                    <label className='form-label'>First Name</label>
                    <input type="text" 
                    placeholder='Enter Employee First Name' 
                    name='fname'
                    value={fname}
                    // if error exists , it will add a red border to input box and error msg:
                    className={`form-control ${errorr.fname?'is-invalid':""}`}
                    onChange={(e)=>setFname(e.target.value)}
                    />
                    {/* conditional rendering for show the error in red in below the input box : */}
                    {errorr.fname && <div className='invalid-feedback'>{errorr.fname}</div>}
                  </div>

                  {/* lastname */}
                   <div className="form-group mb-2">
                    <label className='form-label'>Last Name</label>
                    <input type="text" 
                    placeholder='Enter Employee Last Name' 
                    name='lname'
                    value={lname}
                    className={`form-control ${errorr.lname?"is-invalid":""}`}
                    onChange={(e)=> setLname(e.target.value)}
                    />
                    {errorr.lname&&<div className='invalid-feedback'>{errorr.lname}</div>}
                  </div>

                  {/* email */}
                  <div className="form-group mb-2">
                    <label className="form-label">Enter Employee Email</label>
                    <input type="email"
                    placeholder='Enter Email Address'
                    name='email'
                    value={email}
                    className={`form-control ${errorr.email ? "is-invalid":""}`}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    {errorr.email && <div className='invalid-feedback'>{errorr.email}</div>}
                  </div>
                  {/* button for add employee */}
                  <button className="btn btn-success" onClick={SaveorUpdEmp}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Addemp