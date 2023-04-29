import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Axios from 'axios'


const Edit = () =>{


    const {id} = useParams()
    const navigate = useNavigate()


    const[name, setName] = useState();
    const[age, setAge]= useState();
    const[phone, setPhone] = useState();
    const[gmail, setGmail] = useState()
    const[gender, SetGender] = useState()

    const[userdata, setUserData] = useState([])

    const data ={
        name:name,
        age:age,
        phone:phone,
        gmail:gmail
    }



    


    useEffect(()=>{
        Axios.get(`http://localhost:9000/Data/${id}`).then(function(Data){
            setName(Data.data.name);
            setAge(Data.data.age)
            setPhone(Data.data.phone)
            setGmail(Data.data.gmail)
            SetGender(Data.data.gender)

        }).catch(function(){
            console.log("Smoething went wrong")
        })
    },[])


    const Editdata = ()=>{
        Axios.put(`http://localhost:9000/Data/${id}`, data).then(data=>{
            alert("Submitted successfully");
            navigate("/create")
        }).catch(error=>{
            console.log(error)
        })
    }

    return(
        <div>
        <div>
            <form className='form-group' style={{width:"50%", marginLeft:"350px", marginTop:"150px"}}>
                <div>
                    <label>Name:</label>
                <input type="text" className='form-control'  value={name} onChange={e=>setName(e.target.value)}></input>
</div>


<div>
                    <label>Age:</label>
                <input type="text" className='form-control' value={age} onChange={e=>setAge(e.target.value)}></input>
</div>

<div>
                    <label>Phone:</label>
                <input type="text" className='form-control' value={phone} onChange={e=>setPhone(e.target.value)}></input>
</div>

<div>
                    <label>Gmail:</label>
                <input type="text" className='form-control' value={gmail} onChange={e=>setGmail(e.target.value)}></input>
</div>
<br/>


<div>
                    <label>Select Your Gender :</label>
                    <br />
                    <select value={gender} onChange={e => SetGender(e.target.value)}>
                        <option selected disabled hidden>Select Your Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>


                    </select>

</div>
<br/>

<div>
    <button className='btn btn-success' style={{width:"100%"}} onClick={Editdata}>Edit</button>
</div>
            </form>
</div>
        </div>
    )
}
export default Edit