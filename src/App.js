import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Login from './views/Login';
import Label from './components/Label';


function App() {
  return (   
    <Router>
    <div className="App">
      <div>
      <Header 
        title="Login and Registration System"
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />          
      </div>
    </div>      
  </Router> 

  );
}

export default App;
