import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Navbar } from "./navbar"


export const SingleUser=()=>{
    const location=useLocation()
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`https://react-mock-api.onrender.com/signup/${location.state}`)
            .then(res => {
                setData(res.data)
            })
    },[location])

    const changeformat = (date) => {
        let changeddate = new Date(date)
        let dateMDY = String(changeddate.getDate() + '/' + (changeddate.getMonth() + 1) + '/' + changeddate.getFullYear());
        return dateMDY
    }
    return(
       <>
       <Navbar/>
        <div className="form">
            <h1>User Data</h1>
            <div>
                <label htmlFor="username">User Name:</label>
                <h3>{data.username}</h3>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <h3>{data.password}</h3>
            </div>
            <div>
                <label htmlFor="DOB">DOB:</label>
                <h3><span>{changeformat(data.dob)}</span></h3>
            </div>
            <div>
                <label htmlFor="email">Email ID:</label>
                <h3>{data.emailid}</h3>
            </div>
            <div>
                <label htmlFor="email">First Name:</label>
                <h3>{data.firstname}</h3>
            </div>
            <div>
                <label htmlFor="mbl">Mobile Number:</label>
                <h3>{data.mobilenumber}</h3>
            </div>
        </div>
       </>
    )
}