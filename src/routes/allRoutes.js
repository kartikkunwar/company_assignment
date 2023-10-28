import { Route, Routes } from "react-router-dom"
import { CreateUser } from "../components/createuser"
import { Updateuser } from "../components/update"
import { AllUser } from "../components/alluser"
import { SingleUser } from "../components/singleuser"
import { Login } from "../components/login"



export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<CreateUser/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/users" element={<AllUser/>}/>
            <Route path="/users/:id" element={<Updateuser />}/>
            <Route path="/singleuser" element={<SingleUser/>}/>
        </Routes>
    )
}