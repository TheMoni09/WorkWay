// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>  {/* Change from Switch to Routes */}
          <Route path="/" element={<Home />} />           {/* Use element prop instead of component prop */}
          <Route path="/login" element={<Login />} />     {/* Use element prop */}
          <Route path="/register" element={<Register />} /> {/* Use element prop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
