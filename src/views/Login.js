
import Form from '../components/Form';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Login = ({ userAuth, loginStatus }) => {
  const navigate = useNavigate();
  useEffect(() => {    
    if(loginStatus) {
      navigate('/')
    }
  }, [loginStatus]);

  const loginRequest = (email, password) => {
    userAuth(email, password)
  }
  return (
     <Form loginUser={ loginRequest } />
  );
}


export default Login