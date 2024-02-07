import { useState } from "react"
import { Link } from "react-router-dom"
function SideNav({children}){
    const[IsOpen , setIsOpen]= useState(false)
    const handleIsOpen=()=>{
    setIsOpen(true)
   }

  const handClose=()=>{
    setIsOpen(false)
  }
  const logOut =()=>{
    localStorage.clear()
  }
    return <div>
        <div style={{ width: IsOpen === true ? "100px" : "" }} className=" bg-blue-500 h-screen w-[20%] fixed transition-all duration-500">
        <i style={{display: IsOpen=== true ? "none": "flex"}} onClick={handleIsOpen} className="fa-solid fa-xmark text-4xl text-white ml-[205px] mt-2"></i>
        <i style={{display: IsOpen=== true ? "block": "none"}} onClick={handClose} className="fa-solid fa-bars text-4xl text-white ml-[1.2em] hidden"></i>
        <ul className="text-3xl flex flex-col space-y-14 text-white pt-10 pl-10">
          {IsOpen === true? <i class="fa-brands fa-microsoft"></i> : 
            <Link to="/dashboard"><i class="fa-brands fa-microsoft"></i>Dashboard</Link>}
            {IsOpen === true? <i class="fa-solid fa-user"></i>:
            <Link to="/Students"> <i class="fa-solid fa-user"></i>Students</Link>}
            {IsOpen === true? <i class="fa-solid fa-chalkboard-user"></i>:
             <Link to="/Teachers"><i class="fa-solid fa-chalkboard-user"></i>Teachers</Link>}
             {IsOpen === true? <i class="fa-solid fa-file"></i>:
            <Link to="/Documents"><i class="fa-solid fa-file"></i>Documents</Link>}
            {IsOpen === true? <i  class="fa-solid fa-right-from-bracket"></i>:
            <Link to="/" onClick={logOut}   ><i class="fa-solid fa-right-from-bracket"></i>LogOut</Link>}
        </ul>
        
    </div>
    <div id="main" className={`${IsOpen ===true?"ml-[120px]":"ml-[21%]"} transition-all duration-500`}>
             {children}
        </div>
    </div>
  }
  export default SideNav