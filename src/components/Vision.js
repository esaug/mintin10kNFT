import React from "react"
import lipsmid from "../images/lipsMid.png"

const openSea = 'https://testnets.opensea.io/0xece6ffff5ad61a2dc2e2dcf94a46554c0933d549'

const handleClick =()=>{
    window.location.href = openSea
}

export default function Vision() {
    return (
        <div className="flex flex-row text-center text-white">
        <div className="basis-1/6"></div>
        <div className="basis-full flex flex-w">
           <div className="text-center">
            <p className="text-5xl mb-5 pt-10"> Vision</p>
                <p className="mb-5 mr-40 ml-40">
                    Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                    when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing.

                    software like Aldus PageMaker including versions of Lorem Ipsum.
                    
                </p>
                <div className="  md:order-2">
                                 <button onClick ={()=>handleClick()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                     Open Sea
                                </button>
                       
                </div>
                
           </div>
        

            <img src={lipsmid} className="inline-block pb-10 mt-20 mr-40 h-72" />
        </div>
        <div className="basis-1/6"></div>
    </div>
    )
}