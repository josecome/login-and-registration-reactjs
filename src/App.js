import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Label from './components/Label';
import Login from './views/Login';


function App() {
  return (
    <div>
      <Header 
        title="Login and Registration System"
      />
      <Login />
      <Footer />
    </div>

  );
}

export default App;
