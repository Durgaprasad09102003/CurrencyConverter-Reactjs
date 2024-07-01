import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Main from './Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Currency-Converter" element={ <Navigate to='/Main' />} />
          <Route path="Main" element={ <Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
