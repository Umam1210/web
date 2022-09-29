import React from 'react'
import Navbarlogin from '../components/NavbarLogin'
import image from '../image/air-terjun.jpg'

function Detail() {
  return (
    <>
    <Navbarlogin />
    <div className='d-flex mb-3 my-4 mx-5'>
        <h2 className='me-auto p-2'>
          Bersemayam di tanah Dewata  
        </h2>
        <h6 className='p-2'>Khaerul Umam</h6>
    </div>
        <span style={{color:"#3B97D3"}} className=" mx-5"> 12 Oktober 2025</span>
        <div>
        <img src={image} alt="" className='rounded mx-5 my-4' width={"97%"} />
        </div>
        <p className='mx-5'>tanah dewata</p>
    </>


  )
}

export default Detail