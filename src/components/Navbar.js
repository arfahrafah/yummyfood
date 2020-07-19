import React from 'react'
import { Link } from 'react-router-dom' 

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <Link className="navbar-brand" to="/">YummyFood</Link>
    <ul class="navbar-nav ml-auto">
    	<li class="nav-item"><a class="nav-link" href=""> Home <span class="sr-only">(current)</span></a></li>
    	<li class="nav-item"><a class="nav-link" href=""> About Us <span class="sr-only">(current)</span></a></li>
    	<li class="nav-item"><a class="nav-link" href="">Search <span class="sr-only">(current)</span></a></li>
    </ul>
  </nav>

  
)

export default Navbar