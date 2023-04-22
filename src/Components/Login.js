import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const[error, setError] = useState(false)


    const[name, setName] = useState();
    const[password, setPassword] = useState()
   
const LoginPage = ()=>{
if (name=="Arunps" && password=="Arun123"){
    navigate("/read")
}
else{
setError(true)
}

}





    return (
        <>
        { error &&
        <p style={{position:"absolute", top:"220px", left:"450px", background:"red"}}>Please Enter Valid UserName and Password</p>
}
        <div>
<form className='form-group' style={{width:"50%", margin:"300px"}}>

<div>
    <label>Name:</label>
    <input type="text" className='form-control' placeholder='Username' value={name} onChange={e=>setName(e.target.value)}/>

</div>

<div>
    <label>Password:</label>
    <input type="password" className='form-control' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>

</div>
<br/>

<button className='btn btn-success' style={{width:"100%"}} onClick={LoginPage} >Login</button>

</form>
        </div >

        </>
    )
}

export default Login