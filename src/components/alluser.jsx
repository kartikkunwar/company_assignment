import axios from "axios"
import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Confirmation } from "./confirmation"
import { Navbar } from "./navbar"


export const AllUser = () => {
    const [dat, setDat] = React.useState([])
    const [showconfirmation, setShowconfirmation] = useState(false)
    const userRef = useRef();
    const getUser = () => {
        return axios.get("https://react-mock-api.onrender.com/signup")
            .then((res) => {
                setDat(res.data)

            })
            .catch((err) => console.log(err))
    }

    React.useEffect(() => {
        getUser();
    }, [])

    const changeformat = (date) => {
        let changeddate = new Date(date)
        let dateMDY = String(changeddate.getDate() + '/' + (changeddate.getMonth() + 1) + '/' + changeddate.getFullYear());
        return dateMDY
    }

    const handledelete = (id) => {
        useRef.current = id
        setShowconfirmation(true)
    }
    const checksure = (sure) => {
        if (sure) {
            setShowconfirmation(false)
            return axios.delete(`https://react-mock-api.onrender.com/signup/${useRef.current}`)
                .then((res) => getUser())
                .catch((err) => console.log(err))
        } else {
            setShowconfirmation(false)
        }

    }

    return (
        <div className="main">
            <Navbar/>
            <table className="userinfo">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile Number</th>
                        <th>D.O.B</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        dat.length && dat.map((el) => {
                            return (
                                <tr key={el.id} >
                                    <td>{el.id}</td>
                                    <td>{el.username}</td>
                                    <td>{el.password}</td>
                                    <td>{el.firstname}</td>
                                    <td>{el.lastname}</td>
                                    <td>{el.mobilenumber}</td>
                                    <td ><span>{changeformat(el.dob)}</span></td>
                                    <td>{el.emailid}</td>
                                    <button onClick={() => handledelete(el.id)}>delete</button>
                                    <button><Link  to={`/users/${el.id}`}>Edit</Link></button>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="confirmation">
                {
                    showconfirmation && <Confirmation onSure={checksure} />
                }
            </div>
        </div>
    )
}