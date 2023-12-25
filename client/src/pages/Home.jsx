import React, { useEffect } from "react";
import downarrow from "../assets/downarrow.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState("");
  const [unit, setUnit] = useState("metric");
  const [currentWeight, setCurrentWeight] = useState(100);
  const [goalWeight, setGoalWeight] = useState(100);
  const [height, setHeight] = useState(5.3);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordVerified, setPasswordVerified] = useState();
  const [warning, setWarning] = useState()
  const [warningMessage, setWarningMessage] = useState("");

  

  const handleSubmit = () =>{
    const user = {
      name,
      age,
      gender,
      unit,
      currentWeight,
      goalWeight,
      height,
      username,
      password
    }
    if (password == passwordCheck){
      console.log(user);
      axios.post("/api/getuserdata",({user:user})).then(res =>{
        if (res.status === 200){
          navigate("/login");
        }
      }).catch(error =>{
        setWarningMessage(`${error.response.data.message}`)
      });
    } else {
      setWarning(true);
    }
    
  }

  return(
    <main className="snap-y snap-mandatory  h-screen font-Zen">
      {/* Hero Section */}
      <section className="flex flex-col justify-center text-center  gap-2 h-[100vh] bg-slate text-white snap-start">
        <h2>Welcome to</h2>
        <h1 className="text-8xl">Pulse</h1>
        <h2>Meet your new personal workout assistant</h2>
        
        <img src={downarrow} className="h-12 py-2 animate-bounce stroke-white"/>
        <h6 className="text-sm">Scroll down to learn more</h6>
      </section>
      {/* Information Section */}
      <section className="h-[100vh] px-3 flex flex-col items-center bg-slate text-white gap-3 snap-start " >
        <h1 className="text-center text-3xl ">Let me show you what i could do</h1>
        <div className=" flex justify-center gap-3 flex-wrap">
          <section className="w-[300px] info-card mt-12">
            <h1 className="font-bold">Tracking Macros</h1>
            <p>Ensure your meeting your macro goals with a detailed chart</p>
          </section>

          <section className="w-[300px] info-card">
            <h1 className="font-bold">Routine Tracker</h1>
            <p>Keep a journal of your workouts.</p>
          </section>

          <section className="w-[300px] info-card">
            <h1 className="font-bold ">Join the community!</h1>
            <p>Encorage your friends to get active! Share recipes, workouts and more</p>
          </section>
          <section className="w-[300px] info-card flex justify-center">
            <h1 className="font-bold text-2xl">...and so much more!</h1>
          </section>
        </div>
        <h1 className="">Scroll down to create a profile</h1>
        <img src={downarrow} className="h-12 py-2 animate-bounce md:hidden stroke-white"/>
      </section>
      {/* Profile Section */}
      <section className="h-[100vh] snap-start bg-slate p-2 " >
        <h1 className="text-center text-3xl text-white">Create a Profile!</h1>
        <section className="p-3 mt-2 flex flex-wrap justify-evenly gap-3 ">
        <div className="flex flex-col gap-3 items-center justify-center">
          <label className="text-white ">Whats your name?</label>
          <input
            placeholder="Name"
            type="text"
            className="input"
            value={name}
            onChange={(e)=>{
              setName(e.target.value);
            }}
          />
          <label className="text-white ">Whats your age?</label>
          <input
            placeholder="Age"
            type="number"
            className="input"
            value={age}
            onChange={(e)=>{
              setAge(parseInt(e.target.value));
              if(age < 0){
                setAge(0);
              }
            }}
          
          />
          <div className="flex gap-2 text-white">
	          <label className="text-white ">Biological Gender</label>
            <input
              id="male"
              name="gender"
              className=""
              type="radio"
              value="male"
              onChange={(e)=>{
                setGender(e.target.value);
               
              }}
            />
            <label htmlFor="male">Male</label>

            <input
              id="female"
              name="gender"
              className=""
              type="radio"
              value="female"
              onChange={(e)=>{
                setGender(e.target.value);
                
              }}
            />
            <label htmlFor="female">Female</label>
          </div>
          
          <div className="flex gap-2 text-white ">
            <label className="text-white">Unit of Measurement</label>
            <input
              id="metric"
              name="weightmetric"
              className=""
              type="radio"
              value="metric"
              onChange={(e)=>{
                setUnit(e.target.value);
              }}
            />
            <label htmlFor="metric">Metric</label>

            <input
              id="imperial"
              name="weightmetric"
              className=""
              type="radio"
              value="imperial"
              onChange={(e)=>{
                setUnit(e.target.value);
              }}
            />
            <label htmlFor="imperial">Imperial</label>
          </div>    
          
        </div>
        <div className="flex flex-col gap-2 items-center">
          <label className="text-white">Current weight</label>

          <input 
            className="input"
            type="number"
            value={currentWeight}
            onChange={(e)=>{
              setCurrentWeight(parseFloat(e.target.value));
              if(currentWeight  < 0){
                setCurrentWeight(0);
              }
            }}
          />
        <label className="text-white">Goal weight</label>
          <input 
            className="input"
            type="number"
            value={goalWeight}
            onChange={(e)=>{
              setGoalWeight(parseFloat(e.target.value));
              if(goalWeight  < 0){
                setGoalWeight(0);
              }
            }}
          />
          <label className="text-white">Height</label>
          <div className="flex">

            <input 
              className="input"
              type="number"
              value={height}
              onChange={(e)=>{
              setHeight(parseFloat(e.target.value));
                if(height  < 0){
                  setHeight(0);
                  }
                }}
            />
            {unit === "metric" ? (
              <>
                <h1 className="text-white pl-2 w-2">ft</h1>     
              </>
              )
              :
              ( <h1 className="text-white pl-2 w-2">cm</h1> )
             }
          </div>
          
             
        </div>
          
        </section>
        <h1 className="text-center text-white pt-5">Scroll down to finish creating your account!</h1>
        
      </section>
      <section className="bg-slate snap-start h-[100vh] text-center items-center p-6 flex flex-col gap-3">
        <h1 className="text-white text-2xl py-3">Create your account</h1>
        <label className="text-white">Username</label>
        <input 
              className="input"
              type="text"
              value={username}
              onChange={(e)=>{
                setUsername(e.target.value);
              }}
        />
        <label className="text-white">Password</label>
        <input 
              className="input"
              type="password"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
        />
        <label className="text-white">Verify Password</label>
        <input 
          className="input"
          type="password"
          value={passwordCheck}
          onChange={(e)=>{
            setPasswordCheck(e.target.value);
          }}
        />
        <button className="border-2 text-white p-3 mt-5 animated-glow" onClick={()=>{handleSubmit()}}>Begin your journey with pulse</button>
        {warning ? (<h1>{warningMessage}</h1>):(<h1></h1>)}
      </section>
      

    </main>
  )
}

export default Home;
