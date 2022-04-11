import React, {useEffect} from 'react'
import { fetchData } from '../redux/data/dataActions'
import {ethers} from 'ethers'
import { updateAccount, conexion } from '../redux/blockchain/blockchainActions'
import NftView from './nftView'


import store from '../redux/store'
import {useSelector, useDispatch} from "react-redux"


const PrivateKey = 'detect relief daughter weird artwork pelican want victory guess layer acid detail'

export default function MyNFT() {

  const dispatch = useDispatch()

  // Guardando los datos de la STORE en su lugar correspondiente 

  const blockchain = useSelector((store)=>  store.blockchain)
  const data = useSelector((store) => store.data)

  console.log(blockchain)
  console.log(data)
  console.log('TODOS LOS NFT')
  console.log(data.allNFTs)

  // DETECTAR CUANDO RECARGAN PAGINA 

  window.addEventListener('load', ()=>{
    dispatch(conexion())
    console.log('PAGINA RECARGADA')
  })


  const minter = async(_account, amount)=>{

  const options = {
    from: _account,
    value: ethers.utils.parseEther("0.0002")
  }

  const Provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = Provider.getSigner()
 
   const tx = await blockchain.NftContract.connect(signer).mint(amount, options)
   await tx.wait()
  }

  return (
      <div className=' flex flex-row w-full place-items-stretch bg-black text-white  flex'>
          <div className='basis-1/4'></div>
          <div className=' flex flex-col basis-full text-center'>
              {}
            <div className='p-5'>
                <p>ACCOUNT </p>
                <p className='mt-10'>{blockchain.account}</p>
            </div>
            <div className=" p- 5 mt-10">
                                 <button onClick ={(e)=>{
                                    e.preventDefault()
                                    minter(blockchain.account, 1)
                                 }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                     MINT NOW!
                                </button>
                       
            </div>

            <div className=' place-content-center bg-black text-white  flex'>
                <NftView datos={data.allNFTs}/>
            </div>
          </div>
          <div className='basis-1/4'></div>
      </div>
  
  )
}
