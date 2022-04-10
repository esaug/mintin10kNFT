import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carrucel from "./components/Carrucel";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import Team from "./components/TheTeam"
import FAQ from "./components/FAQ"
import RoadMap from "./components/RoadMap"
import PreFooter from "./components/PreFooter"

export default function completeApp() {
  return (
    <div className='bg-black'>
        <Navbar/>
        <Hero />
        <Carrucel />
        <Vision />
        <RoadMap />
        <Team />
        <FAQ />
        <PreFooter/>
        <Footer />
    </div>
  )
}
