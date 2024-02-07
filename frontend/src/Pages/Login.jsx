import { useState } from "react"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

function Login(){
  const navigate = useNavigate()

  const[username, setusername] = useState()
  const[password, setpassword] = useState()
  
  const loginadmin = (e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/admin/login",{
      "username":username,
      "password":password
    }).then((response)=>{
      if (response.data.error) {
        alert("incorect password or usename")
      }
      else {
        alert("Successfully login")
        localStorage.setItem("admin",JSON.stringify(response.data))
        navigate("/dashboard")

      }
    })
  }


     return <div className=" h-screen w-full">
   <h1 className="ml-20 text-center font-bold text-purple-500">Login page</h1>
   <div className="flex justify-center pt-10">
   <form  className="w-[400px] h-[300px] rounded m-10 p-5 shadow-lg bg-blue-200">
     <input value={username} onChange={(e)=> setusername(e.target.value)} 
      className="border-2 border-purple-500 w-[340px] h-[50px] px-2 mt-5" type="text" placeholder="enter username" />
      <br />
      <br />
     <input  value={password} onChange={(e)=> setpassword(e.target.value)}  
     className="border-2 border-purple-400 w-[340px] h-[50px] px-2 " type="text" placeholder="enter pasword" />
     <br />
     <button className="mt-10 text-2xl bg-green-400 font-bold px-5" onClick={loginadmin}>Login</button>
     </form>
     </div>
     </div>
     
}
export default Login