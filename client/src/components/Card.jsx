import React from 'react'
import {Card, Row} from 'react-bootstrap'
import image from '../image/air-terjun.jpg'
import { Link } from "react-router-dom";
import book from '../image/Bookmark2.png'

function CardBookmark() {
  return (
    <>
    <Row xs={1} md={4} className="mx-5 px-0">
    <Card style={{ width: '18rem' }} className="my-4">
      <Link to="/detail" className=''>
      <Card.Img variant="top" src={image} className="pt-2"/>
      <img src={book} alt="" className='my-2' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Link>
    </Card>
    </Row>
    </>
  )
}

export default CardBookmark