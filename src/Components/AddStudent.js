import React, { useState } from 'react'
import axios from 'axios';

export default function AddStudent() {
    const [data, setData] = useState({
        name: "",
        roll: "",
        email: ""
      });


     
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      console.log(data)
      };

      
  
      const handleSubmit=(event)=>
        {
  
        event.preventDefault();
  
        console.log(data)
        axios.post('http://localhost:5000/api/adddata',data)
        .then((response) => {
              console.log(response.data)
  
              if(response.status==200)
              {
                  alert('data inserted');
  
                  window.location.href='/studentslist'
              }
              else{
                  alert('failed');
              }
          });
  
      }




  return (
    <>
    <div className='col-md-10 adds'>
        <br/>
        <form onSubmit={handleSubmit}>
         
         <label>Name</label> <input type='text' required name='name' value={data.name}
            onChange={handleInputChange}/><br/><br/>

         <label>Roll</label> <input type='text' name='roll' value={data.roll}
            onChange={handleInputChange}/><br/><br/>

         <label>Email</label> <input type='text' name='email' value={data.email}
            onChange={handleInputChange}/><br/><br/>

<input type='submit' name='Submit' className='btn'/>
        </form>

    </div>
    
    </>
  )
}
