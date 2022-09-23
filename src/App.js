import React, { Component }  from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Header from './components/Header';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;