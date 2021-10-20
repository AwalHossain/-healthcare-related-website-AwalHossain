import  { useEffect, useState } from 'react';
//Custom hook form json data
const useServiceces = () => {
    const [info, setInfo] =useState([]);
    // Fetching api from github page
    useEffect(()=>{
        fetch('https://awalhossain.github.io/host-file/service.json')
        .then(resp => resp.json())
        .then(data => setInfo(data))
    },[])
    return [info, setInfo]
};

export default useServiceces;