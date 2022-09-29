import React from 'react'
import Navbarlogin from '../components/NavbarLogin'
import { Form, InputGroup, FloatingLabel, Button } from "react-bootstrap";

function AddJourney() {
    return (
        <>
            <Navbarlogin />
            <div className='mx-5'>
            <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      name="title"
                      // value={title}
                      placeholder="Title"
                    //   onChange={handleChange}
                   
                    />
                  </Form.Group>

            <InputGroup className="">
                <Form.Control
                    type="file"
                    name="image"
                    //  value={image}
                    // onChange={handleChange}

                />
                <InputGroup.Text id="basic-addon1">
                    {/* <img src={icon} alt="" style={{ height: "20px" }} /> */}
                </InputGroup.Text>
            </InputGroup>
            <FloatingLabel className="my-3" controlId="floatingTextarea2" label="Description" >
                <Form.Control
                  as="textarea"
                  type="text"
                  name="desc"
                  // value={desc}
                  placeholder="desc"
                //   onChange={handleChange}
                  style={{ height: '100px' }}

                />
              </FloatingLabel>
              </div>
        </>
    )
}

export default AddJourney