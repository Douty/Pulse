import {  Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"


import { useState } from "react"

function App() {
  const [toggle,setToggle] = useState(false);
  return (
  <>
  <nav className="relative flex flex-col p-6">
  <svg 
    width="24" 
    height="24" 
    onClick={()=>{
      toggle ? setToggle(false) : setToggle(true);
    }}
    className="cursor-pointer absolute top-3 right-8"
    xmlns="http://www.w3.org/2000/svg" 
    >
    <path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/>
    <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/>
    </svg>
    <ul className={`${toggle ? "show" : "hidden"} flex flex-col p-2 gap-10 justify-center text-center`}>
      <li><Link>Home</Link></li>
      <li><Link>Charts</Link></li>
      <li><Link>Log</Link></li>
      <li><Link>Account</Link></li>
    </ul>

  </nav>
  
  
  <Routes>
    <Route path="/" element={<Home />}/>
  </Routes>
  </>
  )
}

export default App
