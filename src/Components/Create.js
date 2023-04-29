import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [phone, setPhone] = useState()
    const [gmail, setGmail] = useState()
    const [gender, SetGender] = useState()
    const [disablebtn, setDisablebtn] = useState(true)
    const [cretedDate, setcreatedDate] = useState(new Date().toLocaleDateString())
    const [cretedTime, setcreatedTime] = useState(new Date().toLocaleTimeString())


    const data = {
        name: name,
        age: age,
        phone: phone,
        gmail: gmail,
        gender: gender,
        cretedDate: cretedDate,
        createdTime:cretedTime

    }



    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault();
        
        Axios.post("http://localhost:9000/Data", data).then(function () {

            alert("Submitted successfully");

            navigate("/read")
        }).catch(
            function (error) {
                console.log(error)
            }
        )
    }

    


    return (
        <div>
            <form className='form-group' style={{ width: "50%", marginLeft: "350px", marginTop: "150px" }}>
                <div>
                    <label>Name:</label>
                    <input type="text" className='form-control' value={name} onChange={e => setName(e.target.value)} required></input>
                </div>


                <div>
                    <label>Age:</label>
                    <input type="text" className='form-control' value={age} onChange={e => setAge(e.target.value)} required></input>
                </div>

                <div>
                    <label>Phone:</label>
                    <input type="text" required className='form-control' value={phone} onChange={e => setPhone(e.target.value)} ></input>
                </div>

                <div>
                    <label>Gmail:</label>
                    <input type="text" className='form-control' value={gmail} onChange={e => setGmail(e.target.value)} required></input>
                </div>
                <div>
                    <label>Select Your Gender :</label>
                    <br />
                    <select value={gender} onChange={e => SetGender(e.target.value)}>
                        <option selected disabled hidden>Select Your Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>


                    </select>
                </div>
                <br />
                <div>
                    <button className='btn btn-success' style={{ width: "100%", }} onClick={submitForm} >Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Create