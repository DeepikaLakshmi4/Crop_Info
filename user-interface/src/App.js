import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

export function Front() {
  return (
    <>
    <div class="top">
    <div class="hero-image">
      <div class="hero-text">
        <h1 >Crop Predictor</h1>
        <p>A helpful tool to increase your yield</p>
      </div>
    </div>
    </div>
    <br/> 
    <br/>
    <center>

    <div class="predict">
      <Link to="/predict"><div class="predict-image">
      <div class="predict-text"><h3>Predict the best crop for you</h3></div>
      </div>
      </Link>
    </div>
    </center>
    </>
  );
}

export function Footer()
{
  return (
    <div class="footer">
      The crop predictor!!
    </div>
  )
}
