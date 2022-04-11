import React from 'react'
import { render } from 'react-dom';

export default function NftView({datos}) {
    console.log('dentro del view NFT')
    console.log(datos)
    
return (
    <div className='flex flex-col'>

        <div className='flex flex-col'>
            <p className='p-5 mt-10'>YOUR NFT</p>
            <div className='md:grid grid-cols-3 divide-x '>
                {datos.map((item, index)=>{
                    return(
                        <div key={index} className=' p-5 border-none'>
                            <div className='p-5 content-center ml-5 hover:border border-inline-1 border-white rounded-lg'>
                                <img src={item.image_thumbnail_url} className='w-100 h-100'/>
                            </div>
                            <div>
                                <div>Name: {item.name}</div>
                                <div>ID: {item.id}</div>
                                <div></div>
                            </div>
                                   
                        </div>
                    
                    )
                })}
            </div>
        </div>
        
    </div>
    
  )
}
