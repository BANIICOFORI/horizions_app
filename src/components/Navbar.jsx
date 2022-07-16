
import React from 'react'

 const Navbar =()=> {
  return (
    	<div class="container navber-fixed-top">
		<nav class="navbar navbar-expand-lg navbar-light navbg">
		<a class="navbar-brand" href="#">
			<img src="img/images.png" width="100px" height="30" alt=""/>
		  </a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarScroll">
		  <ul class="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll navposition" style={{maxHeight:" 100px;"}}>
			<li class="nav-item active">
			  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#"><b>About</b><span></span></a>
			  </li>
			
			<li class="nav-item">
				<a class="nav-link" href="#"><b>Contact</b><span ></span></a>
			</li>
		  </ul>
		</div>
	  </nav>
	  </div>   
    
  )
}
export default Navbar;