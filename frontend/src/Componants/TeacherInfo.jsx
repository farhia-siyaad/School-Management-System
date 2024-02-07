import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function TeacherInfo(){
    const [ ID , SetID] =useState("")
    const [ name , setName] =useState("")
    const [ email , setEail] =useState("")
    const [adress, setAdress] = useState("")
    const [gender, setGender] = useState("")
    const [salary, setSalary] = useState("")
    //regester Teacher
    const DiwanGaliMacalinka =(e) =>{
        e.preventDefault()
        axios.post("http://localhost:3000/create/teacher",{
            "ID":ID,
            "name":name,
            "email":email,
            "adress":adress,
            "gender":gender,
            "salary":salary
        }).then((res) => {
            toast("teacher has been registered successfully",{
                position: "top-right",
                aoutoClose: 500,
                hideProgressBar:false
            })
        }).catch((error) => console.log(error))
    }
    return <div>
        
        <h1 className="text-3xl text-center pt-4">Regester Teacher</h1>
        <form className="text-center pt-20">
        <input value={ID} onChange={(event)=> SetID(event.target.value)} className="w-[350px] pl-10 h-[50px] m-3 border-2 border-gray-300 rounded" type="text" placeholder="Enter ID"/>
        <input value={name} onChange={(event)=> setName(event.target.value)} className="w-[350px] pl-10 h-[50px] m-3 border-2 border-gray-300" type="text" placeholder="Enter name"/>
        <br />
        <input value={email} onChange={(event)=> setEail(event.target.value)} className="w-[350px] pl-10 h-[50px] m-3 border-2 border-gray-300" type="text" placeholder="Enter email"/>
        <input value={adress} onChange={(event)=> setAdress(event.target.value)} className="w-[350px] pl-10 h-[50px] m-3 border-2 border-gray-300" type="text" placeholder="Enter adress"/>
        <br />
        <input value={gender} onChange={(event)=> setGender(event.target.value)} className="w-[350px] pl-10 h-[50px] m-3 border-2 border-gray-300" type="text" placeholder="Enter gender"/>
        <input value={salary} onChange={(event)=> setSalary(event.target.value)} className="w-[350px] pl-10 h-[50px] m-3 border-2 border-gray-300" type="text" placeholder="Enter salary"/>
        <br />
        <button onClick={DiwanGaliMacalinka} className="bg-red-200 px-16  text-white rounded -ml-[730px] mt-20 py-2 text-3xl">Save</button>
        </form>
        <ToastContainer/>
    </div>
}
export default TeacherInfo