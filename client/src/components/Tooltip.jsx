import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import cat from '../image/cat.jpeg'
import profile from '../image/user 2.png'
import journey from '../image/daun.png'
import bookmark from '../image/Vector.png'
import logout from '../image/logout 1.png'
import { Link } from "react-router-dom";


function Tooltip() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <p onClick={handleClick} className="rounded" variant='light'>
        <img src={cat} alt="" width={"50px"} height={"50px"} className="rounded-circle border border-primary" />
      </p>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Link to="/profile">
          <Popover.Header as="h3">
            <img src={profile} alt="" className='me-3'/>
            Profile
          </Popover.Header>
          </Link>
          <Popover.Header as="h3">
            <Link to="/add-journey">
          <img src={journey} alt="" className='me-3'/>
            New Journey
            </Link>
            </Popover.Header>
          <Popover.Header as="h3">
            <Link to="/bookmark">
          <img src={bookmark} alt="" className='me-4'/>
            Bookmark
            </Link>
            </Popover.Header>
          <Popover.Body>
            <Link to="/">
          <img src={logout} alt="" className='me-3'/>
            <strong>Logout</strong>
            </Link>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  )
}

export default Tooltip