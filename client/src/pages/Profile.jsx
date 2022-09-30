import React from 'react'
import Navbarlogin from '../components/NavbarLogin'
import cat from '../image/cat.jpeg'

import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useQuery } from 'react-query'
import { API } from '../config/api'
import CardProfile from '../components/CardProfile';

function Profile() {

  const [state, dispatch] = useContext(UserContext)
  // let { id } = useParams();
  // console.log("state", state)
  let { data } = useQuery('usersCache', async () => {
      const response = await API.get('/check-auth');
      // console.log("ini response",response)
      return response.data.data;
    });

    // console.log(" ini data", data);


    const checkUser = async () => {
      try {
        const response = await API.get('/check-auth');
    
        // If the token incorrect
        if (response.status === 404) {
          return dispatch({
            type: 'AUTH_ERROR',
          });
        }
    
        // Get user data
        let payload = response.data.data.user;
        // Get token from local storage
        payload.token = localStorage.token;
    
        // Send data to useContext
        dispatch({
          type: 'USER_SUCCESS',
          payload,
        });
      } catch (error) {
        console.log(error);
      }
    };
    
    useEffect(() => {
      if (localStorage.token) {
        checkUser();}
    }, [])



  return (
    <>
    <Navbarlogin />
    <h2>Profile</h2>
    <div className="d-flex justify-content-center" >
        <img src={cat} alt="" width={"200px"} height={"200px"} className="rounded-circle border border-primary" />
    </div>
    <div className="d-flex justify-content-center">
       <h3>{data?.name}</h3>
    </div>
    <div className="d-flex justify-content-center">
       <h5>{data?.email}</h5>
    </div>

    <CardProfile />

    </>
  )
}

export default Profile