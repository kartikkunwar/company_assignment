import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const details={
    username:"",
    password:""
 }
export const Login=()=>{
    const [data,setData]=useState([])
    const [log,setLog]=useState(details)
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("https://react-mock-api.onrender.com/signup")
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
       },[])

       const handlechange=(e)=>{
        setLog({...log,[e.target.name]:e.target.value})
     }

     const checkdata=()=>{
        console.log(data)
        let filtered=data.filter((el)=>{
            return el.username==log.username&&el.password==log.password
          });
          if(filtered.length){
            navigate("/singleuser",{state:filtered[0].id})
          }else{
            alert("wrong username or password")
          }
     }
    return(
        <div className="signup">
            <h1>Login</h1>
            <div className="form">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input placeholder="enter username here" name="username" type="text" value={log.username} onChange={handlechange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input placeholder="enter password here" name="password" type="text" value={log.password} onChange={handlechange} />
                </div>
                <button onClick={checkdata}>Submit</button>
            </div>
        </div>
    )
}