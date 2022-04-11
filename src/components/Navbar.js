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

const openSea = 'https://testnets.opensea.io/collection/nftlips-v4'







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
       
        <div   className=" relative bg-black 
        fixed
        w-full
        bg-black
        flex
        justify-between
        items-center
        transition-all
        h-24
        bg-opacity-30
        backdrop-filter 
        backdrop-blur-lg
        firefox:bg-opacity-90
        ">
                <a href="">
                            <img 
                                src={lipsMid}
                                alt=""
                                className="h-10 pl-10"
                            />
                        </a>

                        <button      className=" text-3x1
                        cursor-pointer
                        mx-2
                        md:hidden
                        block
                        " >
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

                        <nav className="backdrop-filter backdrop-blur-lg">
            

                        <ul className=" md:flex
                        md:items-center z-[-1]
                        med:z-auto 
                        md:static 
                        absolute
                        bg-black
                        w-full
                        left-0
                        md-auto
                        text-white
                        md:w-auto
                        md:py-0
                        py-4
                        md:pl-0
                        pl-7
                        md:opacity-100 
                        opacity-0
                        top-[-400px]
                        transition-all
                        ease-in
                        duration-500
                        md:mr-10

                                    ">
                            <li className="mx-4 my-6 md-my-0 md:mx-2">
                                <p className="text-x1
                                hover:text-cyan-500
                                duration-500
                                md:text-sm
                                lg:text-lg
                                "><a href="" >Home</a></p>
                            </li>
                            <li className="mx-4 my-6 md-my-0 md:mx-2">
                                <p className="text-x1
                                hover:text-cyan-500
                                duration-500
                                md:text-sm
                                lg:text-lg
                                "><a href="">The Vision</a></p>
                            </li>
                            <li className="mx-4 my-6 md-my-0 md:mx-2">
                                <p className="text-x1
                                hover:text-cyan-500
                                duration-500
                                md:text-sm
                                lg:text-lg
                                "><a href="">RoadMap</a></p>
                            </li>
                            <li className="mx-4 my-6 md-my-0 md:mx-2">
                                 <p className="text-x1
                                 hover:text-cyan-500
                                 duration-500
                                 md:text-sm
                                 lg:text-lg
                                 "><a href="">Whipapper</a></p>    
                            </li>
                            <li className="mx-4 my-6 md-my-0 md:mx-2">
                                <p className="text-x1
                                hover:text-cyan-500
                                duration-500
                                md:text-sm
                                lg:text-lg
                                "><a href="">FAQ</a></p>
                            </li>
                            <li className="mx-4  my-6 md-my-0 md:mx-2" >    
                                <p className="text-x1
                                hover:text-cyan-500
                                duration-500
                                md:text-sm
                                lg:text-lg
                                "><a href="">Contact</a></p>
                            </li>
                                <button onClick ={(e)=> {
                                    e.preventDefault()
                                    handleClick()
                                }} className="
                                bg-amber-500
                                text-xs
                                md:h-12 
                                md:w-25  
                                hover:bg-amber-600 text-white font-bold py-2 px-4 rounded
                                " >
                                    <p className="md:text-xs ">Open Sea</p>
                                </button>
                                
                                <button 
                                    onClick={(e)=> {
                                        e.preventDefault()
                                        connect()

                                     }
                             

                                    } className="
                                    bg-amber-500 
                                    md:h-12 
                                    md:w-25 
                                    md:text-xs
                                    text-center 
                                    hover:bg-amber-600 text-white font-bold py-2 px-4 rounded
                                    ml-5
                                    
                                    " >
                                    <p className="">
                                        Connect
                                    </p>
                                    <p className="">
                                        Metamask
                                    </p>
                                </button>
                            
                        </ul>
                        </nav>
                       
                 </div>       

           
    )
}