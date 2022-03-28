import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Pages/Input';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";  
import DataShow from './Pages/DataShow';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
    <Route path="/" element={<Input />} />
    <Route path="data" element={<DataShow />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
