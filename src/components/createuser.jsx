import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"

const init = {
    "username": "",
    "password": "",
    "firstname": "",
    "lastname": "",
    "dob": "",
    "mobilenumber": "",
    "emailid": ""
}
export const CreateUser = () => {
    const [data, setData] = React.useState(init)
    const [message, setMessage] = React.useState("")
    const navigate=useNavigate()

    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const postdata = () => {
        if (!data.mobilenumber.match("^[0-9]{10}$")) {
            console.log("wrong number")
            setMessage("**Please enter valid mobile number")
        } else {
            setMessage("")
            return axios.post("https://react-mock-api.onrender.com/signup", data)
                .then((res) => {
                    setData(init)
                    navigate("/login")
                })
                .catch((err) => console.log(err))
        }

    }
    return (
        <div className="signup">
            <h1>Sign Up</h1>
            <div className="form">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input placeholder="enter username here" name="username" type="text" value={data.username} onChange={handlechange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input placeholder="enter password here" name="password" type="text" value={data.password} onChange={handlechange} />
                </div>
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input placeholder="enter first name here" type="text" name="firstname" value={data.firstname} onChange={handlechange} />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input placeholder="enter last name here" type="text" name="lastname" value={data.lastname} onChange={handlechange} />
                </div>
                <div>
                    <label htmlFor="number">Number:</label>
                    <input placeholder="enter number here" type="number" name="mobilenumber" value={data.mobilenumber} onChange={handlechange} />
                    <span>{message}</span>
                </div>
                <div>
                    <label htmlFor="DOB">DOB:</label>
                    <input placeholder="enter DOB here" type="date" name="dob" value={data.dob} onChange={handlechange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input placeholder="enter emailid here" type="text" name="emailid" value={data.emailid} onChange={handlechange} />
                </div>
                <button onClick={postdata}>submit</button>
            </div>
        </div>
    )
}