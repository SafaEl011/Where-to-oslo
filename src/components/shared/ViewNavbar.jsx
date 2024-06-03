import React from 'react'
import {useRoutes} from "react-router-dom"
import { useNavigate } from "react-router-dom";

const ViewNavbar = () => {
  const navigate = useNavigate()
  return (
        <nav className="bg-stone-600">
      <div className = "container mx-auto flex arguments-between-elements">

        {/* Navigation links */ }
        <div className="hidden md:flex space-x-4">
          <ul className="hidden md:flex space-x-4 cursor-pointer">
          <li  
          onClick={()=>{
            navigate("/" , {replace: true})
          }}
          className="text-white">Kartet</li>
          <li  
          onClick={()=>{
            navigate("/search" )
          }
          }
          className="text-white">Search </li>
          <li  
          onClick={
            ()=>{

            navigate("/categories", )
            }
          }
          className="text-white">Categories</li>

          <li  
          onClick={
            ()=>{

            navigate("/top5", )
            }
          }
          className="text-white">Top 5</li>
          </ul>

          <li  
          onClick={
            ()=>{

            navigate("/top5", )
            }
          }
          className="text-white">Settings page</li>
        </div>
      </div>
    </nav>
  )
}

export default ViewNavbar