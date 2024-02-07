import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from "axios"
function Documents() {
  const [model ,setModel] = useState()
  const[file,setfile] = useState(null)
  const[read, setRead] = useState([])
  const navigate= useNavigate()
  
  const handleRegesterDocument= (event)=>{
    event.preventDefault()
    const formData = new FormData()
  formData.append("file", file)
 axios.post("http://localhost:3000/teacher/file",formData).then(()=>{
  
  alert("document has been created successfully")
  navigate("/documents")
 }).catch((error) =>console.log(error) )
  }
  const handleDocument = ()=>{
    axios.get("http://localhost:3000/alldocument").then((response)=>{
      setRead(response.data)
    }) .catch((error)=> console.log(error))
  };
  useEffect(()=>{
    handleDocument();
  })
  
  const handleModel = () => {
    setModel(true)

  }
  const closeModel = (e) => {
    e.preventDefault()
    setModel(false)

  }
  return <>
    <div className='p-6 mb-10'>
      <NavLink onClick={handleModel}   className='bg-purple-500 p-3 m-3' >Upload Document</NavLink>
    </div>
    {/* form */}
    <div style={{display : model === true ? "flex" : ""}}  className='hidden justify-center '>
    <form className='p-10 bg-gray-300 w-[400px] h-[200px] text-white '>

        <input onChange={event =>setfile(event.target.files[0])} className='h-[50px] w-[350px] border-purple-700 border-2 file-bg-red-500 file:border-0 file:text-white  pl-5' type="file" accept='.pdf' placeholder='' />
        <br/>
        <br/>
        <button onClick={closeModel} className='mr-10 bg-purple-500 px-5 py-3 text-white text-lg'>Close</button>
        <button onClick={handleRegesterDocument}  className='bg-rose-500 px-5 py-3 text-white text-lg'>Upload</button>
             </form>
    </div>
    <div  className='grid grid-cols-3 space-y-3'>
    {
      read.map((item)=>{
        return <div 
        className='bg-blue-400 px-[20px]  grid
        text-center mb-4 rounded py-[10px] w-[300px] h-[200px] '> 
        <embed src= {`http://localhost:3000/alldocs/${item.file}`} ></embed> 
        <p>{item.createdAt}</p>
        </div>
      })
    }
    </div>
    </>

  
}

export default Documents