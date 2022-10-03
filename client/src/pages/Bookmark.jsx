import React from 'react'
import CardBookmark from '../components/Card'
import Navbarlogin from '../components/NavbarLogin'

function Bookmark() {
  return (
    <>
      <Navbarlogin />
      <h1 className='my-3 mx-5'>Bookmark</h1>
      <CardBookmark />
    </>
  )
}

export default Bookmark