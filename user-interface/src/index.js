import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Front,Footer} from './App';
import Nav from './Nav';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Predict from './Predict';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes> 
    <Route path="/" element={<><Nav/><Front/><Footer/></>}/>
    <Route path="/predict" element={<><Nav/><Predict/><Footer/></>}/>
    
    
  </Routes>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

