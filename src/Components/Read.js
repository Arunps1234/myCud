import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import "./Read.css"
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Male from "./Male.png"
import Female from "./Female.png"
import { transpileModule } from 'typescript';






const Read = () => {
    const [Data, setData] = useState([])
    const [search, setSearch] = useState("")
    const[username, setUsername] = useState()
    const[userId, setUserId] = useState()
    const[showpopup, setShowpopup] = useState(false)
    const[showconfirm, setShowConfirm] = useState(false)


    useEffect(() => {
        Axios.get("http://localhost:9000/Data").then(function (Value) {
            setData(Value.data)
        }).catch(function (error) {
            console.log(error)
        })
    })

    console.log(Data)

    const navigate = useNavigate()

    const MovetoRead = () => {
        navigate("/Create")
    }
    const Delete = (id) => {
        setShowpopup(false)
        setShowConfirm(true)
        setTimeout(()=>{


            Axios.delete(`http://localhost:9000/Data/${id}`).then(function () {
                console.log("Successfully")
                    setShowConfirm(false)

                
            }).catch(
               function (error) {
                    console.log(error)
                })
             } ,1000)
        }
    //}


const deleteAccount = (id, name) =>{
    setUserId(id)
setUsername(name);
setShowpopup(true)
}

const closePopup  = () =>{
    setShowpopup(false)

}

const Closepopupbtn = () =>{
    setShowpopup(false)

}




    const Edit = (id) => {
        navigate(`/Edit/${id}`)
    }


    const Logout = () => {
        if (window.confirm("Are You Sure You Want To Logout ?")) {
            navigate("/")
        }
        else {

        }

    }
    console.log(search)
    return (
        <>
            <button className='btn btn-danger' style={{ margin: "30px" }} onClick={Logout}>Logout</button>
            <input type="search" style={{ position: "relative", left: "900px", borderRadius: "5px" }} placeholder='Search' value={search} onChange={e => setSearch(e.target.value)} />
            <button className='btn btn-success' id="one" onClick={MovetoRead}>Create</button>
            <br /><br />
            <div className='card' style={{margin:"40px"}}>
            <table className='table' >
                <thead >
                    <tr>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Gmail</th>
                        <th>Created Date</th>
                        <th>Created TIme</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>



                    {
                        Data.length > 0 ?

                            (Data.filter(value => value.name.toLowerCase().trim().includes(search.toLowerCase().trim()))

                                .map(user => (
                                    <tr>
                                        <td>

                                          { user.gender==="Male" ? 
                                        <img src={Male} alt="Male Profile" style={{width:"50px", height:"50px"}} />
                                         :
                                        <img src={Female} alt="Female Profile" style={{width:"50px", height:"50px", borderRadius:"50%"}} />
}
                                        </td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.gmail}</td>

                                        <td>{user.cretedDate}</td>
                                  <td>{user.createdTime}</td>
                                  


                                        <td><AiOutlineEdit style={{ width: "40px", height: "30px", cursor: "pointer" }} onClick={() => Edit(user.id)} /> &nbsp;
                                            <AiFillDelete style={{ width: "40px", height: "30px", cursor: "pointer" }} onClick={() => deleteAccount(user.id, user.name)} /></td>
                                  
                                 
                                    </tr>
                                ))
                            ) : <p style={{justifyContent:"center", position:"absolute", left:"45%",}}>No Data Found</p>
                    }

                </tbody>
            </table>
            </div >
            { showpopup &&

            <div className='deletepopup'>
                <h5 className='closebtn' onClick={closePopup}>X</h5>
<h1 className='textmsg'>Are You Sure You Want TO Remove {username} ? </h1>
<button className='btn btn-primary' id="cancelbtn" onClick={Closepopupbtn}>Cancel</button>
<button className='btn btn-danger' id="yesdelete" onClick={()=>Delete(userId)}>Yes</button>
            
            </div>
}

{
showconfirm &&
<div className='deleteconfirm'>
<p className='confirm'>Deleted Successfully!</p>


</div>
}
        </>
    )
}

export default Read