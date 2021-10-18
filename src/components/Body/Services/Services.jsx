import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [info, setInfo] =useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(resp => resp.json())
        .then(data => setInfo(data))
    },[])
    return (
        <div>
        <div className="px-5">
            <main class="page-content">
            {
                info.slice(0,6).map(loadData => <Service data={loadData}></Service>)
            }
            </main>
        </div>
              

        </div>
    );
};

export default Services;