import React from 'react'
import Navbarlogin from '../components/NavbarLogin'
import cat from '../image/cat.jpeg'

function Profile() {
  return (
    <>
    <Navbarlogin />
    <h2>Profile</h2>
    <div className="d-flex justify-content-center" >
        <img src={cat} alt="" width={"200px"} height={"200px"} className="rounded-circle border border-primary" />
    </div>
    <div className="d-flex justify-content-center">
       <h3>Khaerul Umam</h3>
    </div>
    <div className="d-flex justify-content-center">
       <h5>khairulumam950@gmail.com</h5>
    </div>
    </>
  )
}

export default Profile