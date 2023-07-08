import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif,setGif]=useState(''); 
    const [load,setLoad]=useState(false);

    async function getData(tag)
    {
        setLoad(true);
        const response=await axios.get(tag ? `${url}&tag=${tag}` : url);
        setGif(response.data.data.images.downsized_large.url);
        setLoad(false);
    }

    useEffect(()=>{
        getData('Car');
    },[])

    return {load,gif,getData};
}

export default useGif