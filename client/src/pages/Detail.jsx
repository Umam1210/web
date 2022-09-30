import React from 'react'
import Navbarlogin from '../components/NavbarLogin'
import image from '../image/air-terjun.jpg'

import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import { API } from '../config/api'

function Detail() {

  let { id } = useParams();
    let { data } = useQuery('detailCache', async () => {
        const response = await API.get('/artikel/' + id);
        console.log("ini data", response)
        return response.data.data;
    });

  return (
    <>
    <Navbarlogin />
    <div className='d-flex mb-3 my-4 mx-5'>
        <h2 className='me-auto p-2'>
          {data?.title}  
        </h2>
        <h6 className='p-2'>Khaerul Umam</h6>
    </div>
        <span style={{color:"#3B97D3"}} className=" mx-5"> 12 Oktober 2025</span>
        <div>
        <img src={data?.image} alt="" className='rounded mx-5 my-4' width={"97%"} />
        </div>
        <p className='mx-5'>{data?.desc}</p>
    </>


  )
}

export default Detail