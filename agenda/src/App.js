import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Agenda } from './pages';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
