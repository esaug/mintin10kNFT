import React from "react"
import lipsmid from "../images/lipsMid.png"

export default function Vision() {
    return (
        <div className="flex flex-row text-center text-white">
        <div className="basis-1/6"></div>
        <div className="basis-full flex flex-w justify-between">
           <div className="text-center">
            <p className="text-5xl pt-10"> BECOME A LISPS</p>
            <p className="text-5xl "> MEMBER</p>
            <p className="text-5xl "> TODAY!</p>
            <div className="  pb-10 pt-10 md:order-2 ">
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                     JOIN DISCORD!
                                </button>
            </div>
            
           </div>

            <img src={lipsmid} className="inline-block pb-10 pt-5 h-72" />
        </div>
        <div className="basis-1/6"></div>
    </div>
    )
}