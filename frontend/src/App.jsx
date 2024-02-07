import {Routes, Route} from "react-router-dom"
import Dashboard from "./Pages/Dashboard"

import Documents from "./Pages/Documents"
import Teachers from "./Pages/Teachers"
import SideNav from "./Componants/SideNav"
import TeacherInfo from "./Componants/TeacherInfo"
import StudentInfo from "./Componants/StudentInfo"
import Students from "./Pages/Students"
import Login from "./Pages/Login"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
function App(){

const isAuth = localStorage.getItem("admin")
const navigate = useNavigate()

const handleRefresh= ()=>{
  if (!isAuth) {
    navigate("/")
  }
}
useEffect(()=>{
  handleRefresh()
},[])


  return  <>
  {isAuth ?
  <SideNav>
    <Routes>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/Students" element={<Students/>}/>
    <Route path="/Documents" element={<Documents/>}/>
    <Route path="/Teachers" element={<Teachers/>}/>
    <Route path="/TeacherInfo" element={<TeacherInfo/>}/>
   <Route path="StudentInfo" element={<StudentInfo/>}/>
   
  </Routes>
  </SideNav>
  :
  <Routes>
    <Route path="/" element={<Login/>}/>
  </Routes>
}
</>
}
export default App