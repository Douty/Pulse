import React from "react";
import downarrow from "../assets/downarrow.svg"
const Home = () => {
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
        
        <h1 className="pt-12">Scroll down to register</h1>
        <img src={downarrow} className="h-12 py-2 animate-bounce stroke-white"/>
      </section>
      {/* Registration Section */}
      <section className="h-[100vh] flex flex-col p-4 snap-start" >
        <h1 className="text-center text-2xl">Create your Account</h1>
        <h2></h2>
      </section>
      

    </main>
  )
}

export default Home;
