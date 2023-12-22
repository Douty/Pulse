import React, { useEffect } from "react";
import downarrow from "../assets/downarrow.svg"
import { useState } from "react";
import axios from "axios";
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
      //axios.post("/api/getuserdata",({user:user}));
    } else {
      setWarning(true);
    }
    
  }

  return(
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* Hero Section */}
      <section className="flex flex-col text-center pt-56 gap-2 h-[100vh] bg-slate text-white snap-start">
        <h2>Welcome to</h2>
        <h1 className="text-5xl">Pulse</h1>
        <h2>Meet your new personal workout assistant</h2>
        <img src={downarrow} className="h-12 py-2 animate-bounce stroke-white"/>
        <h6 className="text-sm">Scroll down to learn more</h6>
      </section>
      {/* Information Section */}
      <section className="h-[100vh] p-6 flex flex-col items-center bg-slate text-white gap-3 snap-start" >
        <h1 className="text-center text-3xl ">Let me show you what i could do</h1>

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
        
        <h1 className="pt-12">Scroll down to create a profile</h1>
        <img src={downarrow} className="h-12 py-2 animate-bounce stroke-white"/>
      </section>
      {/* Registration Section */}
      <section className="h-[100vh] flex flex-col p-4 snap-start bg-slate" >
        <h1 className="text-center text-2xl text-white">Create a Profile!</h1>
        <section className="flex flex-col items-center gap-3 mt-10 ">
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
          <label className="text-white ">Biological Gender</label>
          <div className="flex gap-2 text-white">
            <input
              id="male"
              name="gender"
              className="input"
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
              className="input"
              type="radio"
              value="female"
              onChange={(e)=>{
                setGender(e.target.value);
                
              }}
            />
            <label htmlFor="female">Female</label>
          </div>
          <label className="text-white">Unit of Measurement</label>
          <div className="flex gap-2 text-white">
            <input
              id="metric"
              name="weightmetric"
              className="input"
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
              className="input"
              type="radio"
              value="imperial"
              onChange={(e)=>{
                setUnit(e.target.value);
              }}
            />
            <label htmlFor="imperial">Imperial</label>
          </div>
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
          <details className="text-center text-white leading-8">
            <summary>Click to see example</summary>
            If you are 5 feet and 6 inches, using the metric option you would write it as 5.6.<br></br>

            In imperial you would write it as 170.69
          </details>
          
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
        </section>
        <div className="text-white flex flex-col justify-center">
          <h1 className="pt-12 text-center">Scroll down to make an account</h1>
          <img src={downarrow} className="h-12 py-2 animate-bounce stroke-white"/>
        </div>
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
        {/*warning ? (<h1>Password does not match</h1>):(<h1>Everything is good to go!</h1>)*/}
      </section>
      

    </main>
  )
}

export default Home;
