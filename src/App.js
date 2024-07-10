import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Modal from './pages/modal/modal';


function App() {
  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/country/:id" element={<Modal />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
