import React from "react"
import lipsmid from "../images/lipsMid.png"

const openSea = 'https://testnets.opensea.io/collection/nftlips-v4'



export default function Vision() {

    const handleClick =()=>{
        window.location.href = openSea
    }
    return (
        <div className="flex flex-row text-center text-white pt-10">
        <div className="basis-1/6"></div>
        <div className="basis-full md:flex md:flex-w md:justify-between">
           <div className="text-center">
                <div>
                    <p className="text-5xl pt-10"> Vision</p>
                </div>
                <div className="w-80 pt-10 text-2xl">
                    <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder 
                    text commonly used to demonstrate the visual form of a document 
                    or a typeface without relying on meaningful content. Lorem ipsum 
                    may be used as a placeholder before the final copy is
                    </p>
                </div>
            
                <div className="  pb-10 pt-10  ">
                    <button onClick ={(e)=> {
                                    e.preventDefault()
                                    handleClick()
                                }} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">
                                     OpenSea
                    </button>
                </div>
            
           </div>

           <div>
                <img src={lipsmid} className=" sm:ml-3 md:md-0 pb-50 h-72" />
           </div>
        </div>
        <div className="basis-1/6"></div>
    </div>
    )
}