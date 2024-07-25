import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';
import Studentslist from './Components/Studentslist';
import Sidebar from './Components/Sidebar';

function App() {
  return (
   <>
    <div className='container-fluid'>
   <div className='row'>
     <BrowserRouter>
      <Sidebar></Sidebar>
 
        <Routes>
          <Route path= 'addstudent' element={<AddStudent/>}></Route>
          <Route path= '/editstudent/:id' element={<EditStudent/>}></Route>
          <Route path= 'studentslist' element={<Studentslist/>}></Route>
          
           

        </Routes>
    
     </BrowserRouter>
   </div> 
   </div> 
   
   

   </>
  );
}

export default App;
