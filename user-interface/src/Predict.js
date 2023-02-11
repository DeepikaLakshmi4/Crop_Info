import React from 'react';
import './App.css';

function Predict(){
    return (
        <>
        <div class="second" >
         <h1>Find the best crop suitable for you!!</h1>
        <form class="form-predict" >
     <label for="state">State:</label><br/>
     <input type="text" id="state" name="state" /><br/>
     <label for="city">City:</label><br/>
     <input type="text" id="city" name="city" /><br/>
     <label for="date">Date:</label><br/>
     <input type="date" /> 
     <h3>Conditions : </h3>
     <label for="N">Nitrogen in soil:</label><br/>
     <input type="text" name="N" /><br/>
     <label for="P">Phosporous:</label><br/>
     <input type="text" name="P" /><br/>
     <label for="K">Potassium:</label><br/>
     <input type="text"  name="K" /><br/>
     <label for="temp">Temperature in Celsius:</label><br/>
     <input type="text"  name="temp" /><br/>
     <label for="humidity">Humidity:</label><br/>
     <input type="text"  name="humid" /><br/>
     <label for="php">PHP:</label><br/>
     <input type="text" name="php" /><br/>
     <label for="rainfall">Rainfall:</label><br/>
     <input type="text"  name="rainfall" /><br/>
     <label for="max">Maximum Price:</label><br/>
     <input type="text"  name="max" /><br/>
     <label for="min">Minimum Price:</label><br/>
     <input type="text"  name="min" /><br/>
     
     
    
    <button onClick="validate()"> Submit</button>

        </form>
       
        </div>
        </>
      
    )
}
export default Predict;