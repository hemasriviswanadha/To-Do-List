import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Studentslist() {

    
    const [students, setStudents]= useState([])


  useEffect(()=>{
        setTimeout(()=>{
            axios.get('http://localhost:5000/api/getTrainees')
            .then(res=>setStudents(res.data.students))
        },1000)
    },[])

    
// Delete function
 const handleDelete=(_id)=>{
       
    // console.log(_id)
  
  axios.delete('http://localhost:5000/api/deletestudent/'+_id)
  .then((response)=>
  {
   if(response.status==200)
   {
    alert("data deleted");
  
    window.location.href=''
  
   }
   
  })}
  
  // Delete functionend
  


  return (
    <>
    <div className='col-md-12 tb'>
    <table  align="center" border={1} width={600} className='table'>
      <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>roll</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
              </tr>
         {
            students.map((e,i)=>{
             return(
              <>
                <tr>
                <td>{i+1}</td>
                  <td>{e.name}</td>
                  <td>{e.roll}</td>
                  <td>{e.email}</td>
                  <td>
                 <Link to={`/editstudent/${e._id}`}><button className="btn1">Edit</button></Link></td>
                 <td><button className='btn2' onClick={()=>handleDelete(e._id)} >Delete</button></td>
                </tr>
        
              
              </>
  
  
             )
  
            })
         }
         </table>

    </div>
    </>
  
  )
}
