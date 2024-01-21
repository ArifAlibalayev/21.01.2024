import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './index.scss'

function Detailpage() {
    const [apiData, setApiData] = useState([]);

    const {id} =useParams()

    useEffect(() => {
      getData();
    }, []);
  
    async function getData() {
      const res = await fetch(`http://localhost:3100/${id}`);
      const data = await res.json();
      setApiData(data);
    }

  return (
    <section id='Detailpage'>
      <div className="detailImg">
        <img src={apiData.img} alt="" />
      </div>
      <div className="detailContent">
        <h2>{apiData.name}</h2>
        <p>{apiData.desc}</p>
      </div>
    </section>
  )
}

export default Detailpage