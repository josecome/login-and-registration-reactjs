import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Login from './views/Login';
import Logout from './views/Logout';
import Registration from './views/Registration';
import { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import axios from 'axios'

function App() {
  
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(false)

  const requestLogin = async (email, password) => {         
    setEmail(email)
    setPassword(password)
    let link = ''
    let type_of_request = ''
    token ? type_of_request = 'pass' : type_of_request = 'tnk'
    const v = { "email": email, "password": password }
    type_of_request === 'pass' ? link = 'login/' : link = 'user/'
    const res = await axios.post('http://127.0.0.1:8000/api/' + link, v,
      {
        headers: {
            Accept: 'application/json',
            //'Content-Type': 'application/json',
            Authorization: `Bearer ${ localStorage.getItem('token') }`
        }
      }
    )
    console.log(res)

    if (res.data.loggedin === 1) {
      try{ 
        localStorage.removeItem("token") 
      } catch(e) {
        console.log('Error: ' + e.message)
      }
      localStorage.setItem("token", res.data.token)
    } else if (res.data === 'loggedin') {
      setIsLoggedin(true)
    }   
    
    if(res.data.loggedin === 1) {
      setIsLoggedin(true)
    }
    console.log('a: ' + isLoggedin)
  }

  useEffect(() => {
    if(localStorage.getItem("token") !== '') {
      if(!isLoggedin && !token){ 
        requestLogin('tnk') 
        setToken(true)        
      }
    }    
  }, [isLoggedin]);
  
  const logOutUser = () => {
    localStorage.removeItem('token');
    setIsLoggedin(false)
  }

  return (   
    <Router>
    <div className="App">
      <div>
      <Header 
        title="Login and Registration System"
      />
      <Routes>
        <Route path="/" element={ isLoggedin ? <Home /> : <Navigate replace to={"/login"} /> }/>
        <Route path='/create_account' element={<Registration />} />
        <Route path="/login" element={<Login userAuth={ requestLogin }  loginStatus={isLoggedin}/>}/>
        <Route path="/logout" element={<Logout logOutUser={ logOutUser }/>}/>
      </Routes>
      <Footer />          
      </div>
    </div>      
  </Router> 
  );
}

export default App;
