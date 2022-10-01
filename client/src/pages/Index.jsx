import React from 'react'
import '../css/home.css'
import Journey from '../components/Journey'
import book from '../image/Bookmark2.png'

import { Button, Card, Row, Form, InputGroup, } from 'react-bootstrap'
import CardBookmark from '../components/Card'
import Navbarlogin from '../components/NavbarLogin'

import { Link } from "react-router-dom";
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useQuery } from 'react-query'
import { API } from '../config/api'
import { useState } from 'react'


function Index() {

    const [search, setSearch] = useState('');

    const state = useContext(UserContext)
    console.log("state", state)
    let { data } = useQuery('artikelsCache', async () => {
        const response = await API.get('/artikels');
        // console.log("ini response",response)
        return response.data.data;
    });
    console.log("ini", data);

    return (
        <>
            <div className='Index'>
                <Navbarlogin />
            </div>

            <div>
                <Journey />
                <div className="input-group px-5">
                <Form  className='w-100'>
                        <InputGroup className='my-3 w-100'>

                            {/* onChange for search */}
                            <Form.Control
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder='Search here...'
                                className='w-100'
                            />
                        </InputGroup>
                    </Form>
                </div>
                <div>
                    {/* <CardBookmark /> */}
                    <Row xs={1} md={4} className="mx-5 px-0">
                        {data?.filter((item) => {
                            return search.toLowerCase() === ''
                                ? item
                                : item.title.toLowerCase().includes(search);
                        }).map((item, id) => {
                            return (
                                <Card style={{ width: '18rem' }} className="my-4 mx-5">
                                    <img src={book} alt="" className='position-absolute top-0 end-0 m-3' />
                                    <Link to={`/detail/${item.id}`} className=''>
                                        <Card.Img variant="top" src={item?.image} className="pt-2" />
                                        <Card.Body>
                                            <Card.Title>{item?.title}</Card.Title>
                                            <Card.Text>
                                                {item?.desc}
                                            </Card.Text>
                                        </Card.Body>
                                    </Link>
                                </Card>

                            )
                        })}
                    </Row>
                </div>
         </div>
      
        </>
    )
}

export default Index