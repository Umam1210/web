import React from 'react'
import '../css/home.css'
import Journey from '../components/Journey'

import { Button } from 'react-bootstrap'
import CardBookmark from '../components/Card'
import Navbarlogin from '../components/NavbarLogin'


function Index() {
    return (
        <>
            <div className='Index'>
                <Navbarlogin />
            </div>

            <div>
                <Journey />
                <div className="input-group px-5">
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    <Button>search</Button>
                </div>
                <div>
                    <CardBookmark />
                </div>
            </div>
        </>
    )
}

export default Index