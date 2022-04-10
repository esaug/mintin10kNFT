import React, {useEffect} from 'react'
import { fetchData } from '../redux/data/dataActions'


import store from '../redux/store'
import {useSelector, useDispatch} from "react-redux"


export default function MyNFT() {

  const dispatch = useDispatch()

  // Guardando los datos de la STORE en su lugar correspondiente 

  const blockchain = useSelector((store)=>  store.blockchain)
  const data = useSelector((store) => store.data)

  console.log('Estoy en NFT')
  console.log('DATa BLOCKCHAIN')
  console.log(blockchain)
  console.log('DATA')
  console.log(data)
  console.log('Estoy saliendo de NFT')

  //Actualizador 

  useEffect(()=>{
    
    if(blockchain.account != "" || blockchain.NftContract != null){
      dispatch(fetchData(blockchain.account))
     console.log('ACTUALIZANDO COMPA!')
      
    }
  },[blockchain])

  return (
    <>
      <div className='flex place-items-stretch'>
          <div className='w-1/6'></div>
          <div className='w-1/2 text-center'>
              {}
            <div>
                <p>ACCOUNT: {data.account}</p>
            </div>
            <div className="  md:order-2">
                                 <button onClick ={()=>{}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                     MINT NOW!
                                </button>
                       
            </div>
            <div>
                <p>YOUR NFT</p>
            </div>
          </div>
          <div className='w-1/6'></div>
      </div>
    </>
  )
}
