import  { useEffect, useState } from 'react';
//Custom hook form json data
const useServiceces = () => {
    const [info, setInfo] =useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(resp => resp.json())
        .then(data => setInfo(data))
    },[])
    return [info, setInfo]
};

export default useServiceces;