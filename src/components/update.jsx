import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const Updateuser = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({
        id: id,
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        dob: "",
        mobilenumber: "",
        emailid: ""
    })
    const [message,setMessage]=useState("")

    useEffect(() => {
        axios.get(`https://react-mock-api.onrender.com/signup/${id}`)
            .then(res => {
                setData({ ...data, username: res.data.username, password: res.data.password, firstname: res.data.firstname, lastname: res.data.lastname, mobilenumber: res.data.mobilenumber, emailid: res.data.emailid, dob: res.data.dob })
            })
    }, [])

    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        if (!data.mobilenumber.match("^[0-9]{10}$")) {
            setMessage("**Please enter valid mobile number")
        } else {
            setMessage("")
            return axios.put(`https://react-mock-api.onrender.com/signup/${id}`, data)
                .then((res) => navigate('/users'))
                .catch((err) => console.log(err))
        }

    }
    return (
        <div>
            <h1>Update Info</h1>
            <form onSubmit={handlesubmit} className="form">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" value={data.username} onChange={handlechange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" value={data.password} onChange={handlechange} />
                </div>
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" name="firstname" value={data.firstname} onChange={handlechange} />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" name="lastname" value={data.lastname} onChange={handlechange} />
                </div>
                <div>
                    <label htmlFor="number">Number:</label>
                    <input type="number" name="mobilenumber" value={data.mobilenumber} onChange={handlechange} />
                    <span>{message}</span>
                </div>
                <div>
                    <label htmlFor="DOB">DOB:</label>
                    <input type="date" name="dob" value={data.dob} onChange={handlechange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="emailid" value={data.emailid} onChange={handlechange} />
                </div>
                <button>Update</button>
            </form>
        </div>
    )
}