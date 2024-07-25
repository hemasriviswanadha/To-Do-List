import React, { useState } from 'react'
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function EditStudent() {

     
    const [data, setData] = useState({
        name: "",
        roll: "",
        email: ""
      });

      let params = useParams('id');
      let edit_studentid = params.id; // get id from url


      let api = 'http://localhost:5000/api/get_student_data/'+edit_studentid
    useEffect(() => {
        axios.get(api).then((response) => {
            console.log(response.data.student_data)
            setData(response.data.student_data);            
        });
      },[]);

     
       
      //updating the form after click update button
  const handleSubmit = (event) => {
    event.preventDefault();
    const api = 'http://localhost:5000/api/edit_student/'+edit_studentid
        axios.put(api,data).then((response) => {
            console.log(response.data)
            if(response.status==200){
              alert("Updated successfully.")
              window.location.href='/studentslist';
            }          
        });
       };
    


  return (
     <>
    <div className='col-md-10 edits'>
      <div className='row'>
        <br/>
        <form onSubmit={handleSubmit}>
         
         <label>Name</label> <input type='text' required name='name' value={data.name}
            onChange={(e) =>
              setData({...data, name: e.target.value })
            }/><br/><br/>

         <label>Roll</label> <input type='text' name='roll' value={data.roll}
             onChange={(e) =>
              setData({...data, roll: e.target.value })
            }/><br/><br/>

         <label>Email</label> <input type='text' name='email' value={data.email}
             onChange={(e) =>
              setData({...data, email: e.target.value })
            }/><br/><br/>

        <input type='submit' name='Update' value='Update' className='btn'/>
        </form>

    </div>
   </div> 
    </>
  )
}
