import React from "react"
import lipsMid from "../images/lipsMid.png"
import { useNavigate } from "react-router-dom"
//import { useNavigate } from "react-router-dom"
import getData from "./myNFT"
import {ethers} from "ethers"
import {useState} from "react"
import store from "../redux/store"
import {useDispatch, useSelector} from "react-redux"
import { conexion } from "../redux/blockchain/blockchainActions";

const openSea = 'https://testnets.opensea.io/0xece6ffff5ad61a2dc2e2dcf94a46554c0933d549'







export default function Navbar() {

    //dispatch 

    const dispatch = useDispatch()
    
    //Conectar billetera 

    const navigate = useNavigate()

    const connect = async ()=>{


      dispatch(conexion())
       navigate("/mynft")
       
    }     

    const handleClick = () => {
        window.location.href = openSea
    }


    return (
            <div   className=" inline-block relative bg-black w-full ">
                <div className="fixed
                            w-full
                            bg-black
                            flex
                            justify-between
                            items-center
                            px-4
                            md:px-12
                            transition-all
                            duration-200
                            h-24
                            bg-opacity-30
                            backdrop-filter backdrop-blur-lg
                            firefox:bg-opacity-90
                            ">
                                
                        <a href="">
                            <img 
                                src={lipsMid}
                                alt=""
                                className="h-10"
                            />
                        </a>
                
                        <nav className="backdrop-filter backdrop-blur-lg ">
                            <button className="md:hidden" >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-8 w-8 text-white " 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    strokeWidth={2}>
                                    
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M4 6h16M4 12h16M4 18h16" 
                                        />
                                </svg>
                            </button>

                        <ul className=" fixed 
                                    left-0 
                                    right-0 
                                    min-h-screen 
                                    text-white 
                                    space-y-4
                                    p-4
                                    transform 
                                    translate-x-full
                                    md:relative
                                    md:flex md:min-h-0 md:space-y-0 md:space-x-6 md:p-0
                                    md:translate-x-0
                                    ">
                            <li>
                                <a href="" >Home</a>
                            </li>
                            <li>
                                <a href="">The Vision</a>
                            </li>
                            <li>
                                <a href="">RoadMap</a>
                            </li>
                            <li>
                               
                            </li>
                            <li>
                                <a href="">FAQ</a>
                            </li>
                            <li>    
                                <a href="">Contact</a>
                            </li>
                            <li>
                                <button onClick ={()=> handleClick()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                                    Open Sea
                                </button>
                                
                             </li>
                             <li>
                             <button onClick={(e)=> {
                                 e.preventDefault()
                                 connect()

                             }
                             

                            } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                                    Connect Metamask
                                </button>
                             </li>
                        </ul>
                        </nav>
                    
                    </div>
                 </div>        

           
    )
}