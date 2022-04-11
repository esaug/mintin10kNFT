import React from "react"
import lipsMid from "../images/lipsMid.png"


export default function Team() {
    return (
        <div className="flex flex-row text-center text-white">
        <div className="basis-1/6"></div>
        <div className="basis-full flex flex-col">
            <div className="text-center">
                 <p className="text-5xl mb-5 pt-10"> THE TEAM</p>
            </div>
           <div className="  text-center md:flex md:flex-row md:justify-around pb-10 pt-10">
                <div >
                    <div className=" ">
                        <img src={lipsMid}/>
                    </div>  
                    <div className="pt-5">
                        <span>Nombre</span>
                    </div>
                    <div>
                        <span>CARGO</span>
                    </div>
                    
                </div>
                <div>
                    <div className="">
                        <img src={lipsMid}/>
                    </div>  
                    <div className="pt-5">
                        <span >Nombre</span>
                    </div>
                    <div>
                        <span>CARGO</span>
                    </div>
                </div>
                <div>
                    <div >
                        <img src={lipsMid}/>
                    </div>  
                    <div className="pt-5">
                        <span>Nombre</span>
                    </div>
                    <div>
                        <span>CARGO</span>
                    </div>
                </div>
                <div>
                <div>
                        <img src={lipsMid}/>
                    </div>  
                    <div className="pt-5">
                        <span>Nombre</span>
                    </div>
                    <div>
                        <span>CARGO</span>
                    </div>
                </div>
           </div>
           <div className="text-center md:flex md:flex-row md:justify-around pb-10 pt-10">
                <div>
                <div>
                        <img src={lipsMid}/>
                    </div>  
                    <div className="pt-5">
                        <span>Nombre</span>
                    </div>
                    <div>
                        <span>CARGO</span>
                    </div>
                </div>
                <div>
                <div>
                        <img src={lipsMid}/>
                    </div>  
                    <div className="pt-5">
                        <span>Nombre</span>
                    </div>
                    <div>
                        <span>CARGO</span>
                    </div>
                </div>
                <div>
                <div>
                        <img src={lipsMid}/>
                    </div>  
                    <div className="pt-5">
                        <span>Nombre</span>
                    </div>
                    <div>
                        <span>CARGO</span>
                    </div>
                </div>
                <div>
                <div>
                        <img src={lipsMid}/>
                    </div>  
                    <div className="pt-5">
                        <span>Nombre</span>
                    </div>
                    <div>
                        <span>CARGO</span>
                    </div>
                </div>
           </div>

        </div>
        <div className="basis-1/6"></div>
    </div>
    )
}