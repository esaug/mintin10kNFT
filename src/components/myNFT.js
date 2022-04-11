import React, {useEffect, useState} from 'react'
import { fetchData } from '../redux/data/dataActions'
import {ethers} from 'ethers'
import { updateAccount, conexion } from '../redux/blockchain/blockchainActions'
import NftRender from './nftRender'
import {useSelector, useDispatch} from "react-redux"



export default function MyNFT() {

  const [datos, setDatos] = useState([]) 

  const dispatch = useDispatch()

  const blockchain = useSelector((store)=> store.blockchain)
  const data = useSelector((store) => store.data)

   console.log(blockchain)
   console.log(data)

  // DETECTAR CUANDO RECARGAN PAGINA 

  window.addEventListener('load', ()=>{
    dispatch(conexion())
    console.log('PAGINA RECARGADA')
  })

  console.log('PROBANDOO NFT')
  console.log(data.allNFTs)


  //Minting NFT 

  const minter = async(_account, amount)=>{

  const options = {
    from: _account,
    value: ethers.utils.parseEther("0.0002")
  }

  const Provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = Provider.getSigner()
 
   const tx = await blockchain.NftContract.connect(signer).mint(amount, options)
   await tx.wait()
   console.log(tx)

  
  }

 


  return (
    <>
      <div className='flex place-items-stretch'>
          <div className='w-1/6'></div>
          <div className='w-1/2 text-center'>
            <div>
                <p>ACCOUNT: {blockchain.account}</p>
            </div>
            <div className="  md:order-2">
                                 <button onClick ={(e)=>{
                                    e.preventDefault()
                                    minter(blockchain.account, 1)
                                 }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                     MINT NOW!
                                </button>
                       
            </div>
            <div>
             <NftRender/>
            </div>
        
          </div>
          <div className='w-1/6'></div>
      </div>
    </>
  )
}

