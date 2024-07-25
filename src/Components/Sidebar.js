import React from 'react'
import { Link } from 'react-router-dom';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import Studentslist from './Studentslist';

export default function Sidebar() {
    return (
    
        <>
        
        
       
         
            <AddStudent></AddStudent>
       
            <Link to='/editstudent:id/'></Link>

        
        
  
        
        
        </>
    );
}
