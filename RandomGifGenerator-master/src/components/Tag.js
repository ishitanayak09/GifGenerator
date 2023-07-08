import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
    

    const [formData,setFormData]=useState('car')

    const {gif,load,getData}=useGif();

    function changeHandler(event){
        setFormData(event.target.value);
    }

  return (
    <div className="w-1/2 bg-blue-500 center rounded-lg border border-black flex flex-col items-center gap-y-10 mt-[15px]">
        <h2 className="text-2xl mt-[15px] underline uppercase font-bold">A {formData} GIF</h2>
        {load && <Spinner/>}
        {
            !load && <img src={gif}></img>
        }
        <input className="w-10/12 text-lg py-2 rounded-lb mb-[2px] text-center" name="gifname" value={formData} onChange={changeHandler}></input>
        <button className='w-10/12 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg' onClick={()=>{getData(formData)}}> GENERATE </button>
    </div>
  )
}

export default Tag