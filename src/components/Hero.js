import React from "react"
import lips from "../images/logo512.png"

export default function Hero() {
    return (
        <>
            <div className=" md:flex md:flex-row text-center mt-60  h-screen">
                <div className="md:basis-1/4">
                </div>
                <div className="md:basis-1/2 text-center">
                    <img src={lips} className="inline-block" />
                    <p className="text-6xl fredoka text-white text-shadow-2 text-center mt-2 pt-10"> WELCOME TO THE LIPS SOCIETY<br />
                    </p>

                </div>

                <div className="md:basis-1/4">

                </div>
                
            </div>
        </>
    )
}