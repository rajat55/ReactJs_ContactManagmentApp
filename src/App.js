import React,{useState} from 'react';
import './App.css';
import Navbar  from './component/navbar';
import Form from './component/form';
import ContactList from './component/contactList';









function App() {
  const list = []
  const [listn,setlist] = useState(list);

  const getdataFromFrom = (eprops) =>{
    let newList = [...listn,eprops];
      setlist(newList);
        //console.log(newList);
  }
  const deleteContact = (dprops) =>{
    let newList = listn.filter((ele)=>{
      if(ele.id == dprops)
      return false;
      else
      return true;
    });

    setlist(newList);
  }

  return (

    <>
   
      
      <Navbar />
      <Form getdata={getdataFromFrom}/>
     { listn.map((element ) => {
      
        return(
        <ContactList name={element.name} email={element.eamil} relation={element.relation} id={element.id} deleteContact={deleteContact}/>
  );
         
      })}
    
      
    
    </>
   
  );
}

export default App;
