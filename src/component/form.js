import './formR.css';
import React ,{ useState } from 'react';


export default function FormR(props){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [rel,setRelation] = useState("Friend");
   const [id,setid] = useState(1);
    
    const setname = (e) => {
        
        setName(e.target.value);
        
    }

    const setemail = (e) => {
        
        setEmail(e.target.value);
      
    }

    const setrelation = (e) => {
        setRelation(e.target.value);
        
    }
    const addData = () =>{
    
        const data = {name,eamil:email,relation:rel,id};
        props.getdata(data);
        setName("");
        setEmail(" ");
        setid(id+1);
        
        
    }


return(
<>
<div className='form-area'>
    <input type="text" min="6"required placeholder='Contact  Name' value={name} onChange={setname}/>
    <input type="email" required placeholder='Contact Email' value={email} onChange={setemail}/>
    <select name="Relation" className='mb-2' onChange={setrelation}>
    <option value="Friends">Friends</option>
    <option value="Family">Family</option>
    <option value="Colleague">Colleague</option>
    <option value="Client">Client</option>
</select>
    <button className='btn btn-primary mb-2' onClick={addData}>Add</button>

</div>
</>
);


}