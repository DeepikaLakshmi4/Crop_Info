import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
function Nav()
{ 
    return(
<div class="topnav">
  
  <Link>Blog</Link>
  <Link>Contact</Link>
  <Link>About</Link>
  <Link to="/predict">Find your crop</Link>
  <Link to="/">Home</Link>
  
  
 
</div>
    )
}
export default Nav;