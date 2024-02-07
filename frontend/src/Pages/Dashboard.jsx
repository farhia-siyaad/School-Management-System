import { useState,useEffect } from "react"
import axios from "axios"
function Dashboard(){
    const[totalTeacher, setTotalTeachers] = useState([])

    const gettotalTeachers = () => {
        axios.get("http://localhost:3000/teacher/total").then((response)=>{
            setTotalTeachers(response.data.total)
            // console.log(response.data)
        }).catch((error) => console.log(error))
    }
    useEffect(()=>{
        gettotalTeachers()
    },[])
    const[totalStudent, setTotalStudents] = useState([])

    const gettotalStudents = () => {
        axios.get("http://localhost:3000/student/total").then((response)=>{
            setTotalStudents(response.data.total)
            // console.log(response.data)
        }).catch((error) => console.log(error))
    }
    
    useEffect(()=>{
        gettotalStudents()
    },[])
    const[totalSalary, setTotalSalary] = useState([])

    const gettotalSalary = () => {
        axios.get("http://localhost:3000/salary/total").then((response)=>{
            setTotalSalary(response.data[0].salary)
             console.log(response.data)
        }).catch((error) => console.log(error))
    }
    
    useEffect(()=>{
        gettotalSalary()
    },[])

    return <div>
        <div className=" flex justify-center gap-10 pt-10 text-center">
        <div className="bg-blue-500  
         w-[300px] h-[200px] border-b-4 border-red-700">
           <i className="fa-solid fa-users text-purple-800 text-3xl mt-5"></i>
            <h1 className="  mt-3 text-3xl" > TotalTeachers <br/>{totalTeacher} 
            </h1>
            </div>
        <div className="bg-yellow-500   w-[300px] h-[200px] border-b-4
         border-red-700">
           <i class="fa-regular fa-user text-3xl mt-5 "></i>
            <h1 className=" mt-5 text-3xl" > 
         TotalStudents <br/>{totalStudent} 
         </h1></div>
        <div className="bg-orange-500  
         w-[300px] h-[200px] border-b-4 border-red-700  ">
         
         <h1 className=" mt-10 text-3xl text-center " > 
       total salary <br/> ${totalSalary} 
      </h1> </div>
        </div>
    </div>
}
export default Dashboard