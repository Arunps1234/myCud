import React, {useState} from 'react'
import  Axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Create = () =>{
const[name, setName] = useState();
const[age, setAge] = useState();
const[phone, setPhone] = useState()
const[gmail, setGmail] = useState()

const data ={
    name:name,
    age:age,
    phone:phone,
    gmail:gmail,
}

const navigate= useNavigate()

const submitForm = (e)=>{
    e.preventDefault();
    console.log(data)
    Axios.post("http://localhost:9000/Data", data).then(function(){
        alert("Submitted successfully");
        navigate("/read")
    }).catch(
        function(error){
            console.log(error)
        }
    )
}

    return(
        <div>
            <form className='form-group' style={{width:"50%", marginLeft:"350px", marginTop:"150px"}}>
                <div>
                    <label>Name:</label>
                <input type="text" className='form-control'  value={name} onChange={e=>setName(e.target.value)} required></input>
</div>


<div>
                    <label>Age:</label>
                <input type="text" className='form-control' value={age} onChange={e=>setAge(e.target.value)} required></input>
</div>

<div>
                    <label>Phone:</label>
                <input type="text" required className='form-control' value={phone} onChange={e=>setPhone(e.target.value)} ></input>
</div>

<div>
                    <label>Gmail:</label>
                <input type="text" className='form-control' value={gmail} onChange={e=>setGmail(e.target.value)} required></input>
</div>
<br/>
<div>
    <button className='btn btn-success' style={{width:"100%"}} onClick={submitForm}>Submit</button>
</div>
            </form>

        </div>
    )
}

export default Create