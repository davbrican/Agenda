import React, { useEffect } from 'react';
import Login from '../components/Login';
import Signin from '../components/Signin';
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from "react-router-dom";

const Home = () => {

  const { login, isAuthenticated } = useStateContext();

  let navigate = useNavigate(); 
  useEffect(() => {
    if (isAuthenticated) {
      let path = `agenda`; 
      navigate(path);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <br />
      <br />
      {(login) ? <Login /> : <Signin />}
    </div>
  )
}

export default Home