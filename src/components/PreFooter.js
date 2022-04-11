import React from "react"
import lipsmid from "../images/lipsMid.png"

export default function Vision() {
    return (
        <div className="md:flex md:flex-row text-center text-white">
        <div className="basis-1/6"></div>
        <div className="basis-full md:flex md:flex-w md:justify-between  mt-10">
           <div className="text-center">
                <p className="text-5xl pt-10 "> BECOME A LISPS</p>
                <p className="text-5xl "> MEMBER</p>
                <p className="text-5xl "> TODAY!</p>
            <div className="  pb-10 pt-10 md:order-2 ">
                <button  className="bg-amber-500 text-sm h-10 w-35 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">
                        JOIN DISCORD!
                </button>
            </div>
            
           </div>

            <img src={lipsmid} className="inline-block pb-10 pt-5 md:h-72 md:w-1/5 sm:h-1/3 w-1/3" />
        </div>
        <div className="basis-1/6"></div>
    </div>
    )
}