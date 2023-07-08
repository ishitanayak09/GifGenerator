import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
    
    const {getData,load,gif}=useGif();
    
    useEffect(()=>{
        getData();
    },[])
    

  return (
    <div className="w-1/2 bg-green-500 center rounded-lg border border-black flex flex-col items-center gap-y-10 mt-[15px]">
        <h2 className="text-2xl mt-[15px] underline uppercase font-bold">A RANDOM GIF</h2>
        {load && <Spinner/>}
        {
            !load && <img src={gif}></img>
        }
        <button className='w-10/12 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg' onClick={()=>{getData()}}> GENERATE </button>
    </div>
  )
}

export default Random