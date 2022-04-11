import React from "react"
import lips from "../images/logo512.png"

export default function Hero() {
    return (
        <>
            <div className="
            flex 
            flex-col 
            text-center   
            mt-5
            text-white 
            ">

                <div className="
                basis-1/4
                ">
                
                </div>
                <div className="
                basis-1/2 
                flex 
                flex-col
                
                ">
                    <img src={lips} className="  sm:mb-15 w-50 h-50 md:w-1/3 md:h-1/4" />
                    <p className="
                    lg:text-6xl 
                    text-4xl 
                    text-shadow-2 
                    text-center      
                    md:pt-10
                    mb-24
                    "
                    > WELCOME TO THE LIPS SOCIETY<br />
                    </p>

                </div>

                <div className="
                md:basis-1/4
                sm:h-72
                ">

                </div>
                
            </div>
        </>
    )
}