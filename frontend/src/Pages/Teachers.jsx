import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

function Teachers(){
    const [teacher, SetTeacher]= useState([])
    const [page, setpage] = useState(0)
    const handleReadData = ()=>{
        axios.get(`http://localhost:3000/allteacher?page=${page}`).then((response)=>{
            SetTeacher(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
  const handleNextButton= ()=>{
    setpage(page+1)
  }
  const handleprevious = ()=>{
    if (page>0) {
        setpage(page-1)
    }
  }

    const handleSearchTeacher = (id) => {
        const key = id.target.value
        if(key){
        axios.get(`http://localhost:3000/teacher/search/${key}`).then((response)=>{
            SetTeacher(response.data)
        }).catch((error)=>{
            console.log(error);
        })
    }
    else{
        getAllTeachers()
    }
    }
    useEffect(()=>{
        handleReadData()
    },[page])
    return <div>
       <div className="py-5 flex justify-between">
        <Link to="/TeacherInfo" className="bg-green-200 text-white px-5 py-3 rounded mb-3">Add Teacher</Link>
        <form className="mr-5">
            <input onChange={handleSearchTeacher}   className="w-[350px] pl-10 h-[50px] border-2" type="text" placeholder="search techer"/>
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
            teacher.length > 0 ? teacher.map((data)=>{
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
            :
            <p>there is no data</p>
          }
        </tbody>
       
       </table>
      <div className=" flex gap-5 justify-end mt-4 mr-3">
       <button onClick={handleNextButton} className="bg-blue-500 px-4 py-2 rounded  text-white">Next</button>
       <button onClick={handleprevious} className="bg-blue-500 px-4 py-2 rounded  text-white">prev</button>
       </div>
    </div>
}
export default Teachers