import React from 'react'
import '../css/home.css'
import Navbar from '../components/Navbar'
import text from '../image/text1.png'
import text2 from '../image/text2.png'
import Journey from '../components/Journey'

import { Button } from 'react-bootstrap'
import CardBookmark from '../components/Card'

function Home() {
    return (
        <>
            <div className='Home'>
                <Navbar />
                <div>
                    <img src={text} alt="" width={"40%"} style={{ marginLeft: "96px", marginTop: "90px" }} />
                </div>
                <div>
                    <img src={text2} alt=""  width={"40%"}  style={{ marginLeft: "96px", marginTop: "30px" }} />
                </div>
            </div>

            <div>
                <Journey />
                <div className="input-group px-5 ">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                   
                        <Button>search</Button>
                   
                </div>
                <div>
                    <CardBookmark />
                </div>
            </div>
        </>
    )
}

export default Home