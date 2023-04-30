import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Login from './views/Login';
import Logout from './views/Logout';
import Registration from './views/Registration';
import Label from './components/Label';

import { useSelector, useDispatch } from 'react-redux'
import { LoginUser, LoginUserByToken } from './features/auth/storeAuth'

const dispatch = useDispatch()

const loginStatus = async () => {
  dispatch(LoginUserByToken(localStorage.getItem('token')))
  return useSelector((state) => state.storeauth.isLoggedin)
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => loginStatus() !== null
  );

  useEffect(() => {
    localStorage.setItem('logged_user', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  
  const logIn = () => setIsLoggedIn(true);
  return (   
    <Router>
    <div className="App">
      <div>
      <Header 
        title="Login and Registration System"
      />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to='/login'/>}/>
        <Route path='/create_account' element={<Registration />} />
        <Route path="/login" element={<Login onLogIn={ logIn } />}/>
      </Routes>
      <Footer />          
      </div>
    </div>      
  </Router> 

  );
}

export default App;
