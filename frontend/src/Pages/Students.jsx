import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
function Students(){
    const [student, setStudent]= useState([])
    const handleReadData = ()=>{
        axios.get("http://localhost:3000/allstudent").then((response)=>{
            setStudent(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        handleReadData()
    })
    return <div>
       <div className="py-5 flex justify-between">
        <Link to="/StudentInfo" className="bg-blue-500 text-white px-5 py-3 rounded mb-3">Add Student</Link>
        <form className="mr-5">
            <input className="w-[350px] pl-10 h-[50px] border-2" type="text" placeholder="Search Student"/>
        </form>
       </div>
       <table className="w-full text-1xl">
       <tr className="bg-gray-200">
            <th>ID</th>
            <th>Name</th>
            <th>Adress</th>
            <th>Email</th>
            <th>Gender</th>
           
            <th>Date</th>
            <th></th>
        </tr>
        <tbody>
          {
            student.map((data)=>{
                return <tr className="text-center">
                <td>{data.ID}</td>
                <td>{data.name}</td>
                <td>{data.adress}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
                
                {/* <td>1</td>
                <td>Kawther</td>
                <td>Newyork</td>
                <td>Kawther143@gmail.com</td>
                <td>Female</td>
                <td>$5000</td>
                <td>1-3-2024</td> */}
            </tr>
            })
          }
        </tbody>
       </table>
    </div>
}
export default Students