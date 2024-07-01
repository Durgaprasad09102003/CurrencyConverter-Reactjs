import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="durgaprasad09102003.github.io/CurrencyConverter-Reactjs/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
