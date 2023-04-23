import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import "./Read.css"
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import female from "./female.png"
import male from "./male.png"






const Read = () => {
    const [Data, setData] = useState([])
    const [search, setSearch] = useState("")


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
    const deleteAccount = (id, name) => {

        if (window.confirm(`Are You Sure You Want to Delete ${name} ?`)) {
            Axios.delete(`http://localhost:9000/Data/${id}`).then(function () {
                alert("Deleted")
            }).catch(
                function (error) {
                    console.log(error)
                })
        }
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
                        <th>Image</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Gmail</th>
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
                                            {user.gender == "Female" ?
                                                <img src={female} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                                                :
                                                <img src={male} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                                            }
                                        </td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.gmail}</td>
                                        <td><AiOutlineEdit style={{ width: "40px", height: "30px", cursor: "pointer" }} onClick={() => Edit(user.id)} /> &nbsp;
                                            <AiFillDelete style={{ width: "40px", height: "30px", cursor: "pointer" }} onClick={() => deleteAccount(user.id, user.name)} /></td>
                                    </tr>
                                ))
                            ) : ("No Data Found")
                    }

                </tbody>
            </table>
            </div >
        </>
    )
}

export default Read