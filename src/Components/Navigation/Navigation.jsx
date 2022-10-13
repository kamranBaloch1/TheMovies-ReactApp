import { color } from '@mui/system';
import React from 'react';
import request from "../Request/requests.js"
import "./navigation.css"

function Navigation({setSelectedOption}) {
  return (
    <div className=''>


<nav style={{
  backgroundColor:"linear-gradient(to right,#051421, #042727)",
}} class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#" onClick={()=>setSelectedOption(request.fetchTrending)}>The Movies</a>
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white"  aria-current="page" href="#" onClick={()=>setSelectedOption(request.fetchTrending)}>Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#" onClick={()=>setSelectedOption(request.fetchTopRated)}>Top Rated</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#" onClick={()=>setSelectedOption(request.fetchActionMovies)}>Action</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#" onClick={()=>setSelectedOption(request.fetchHorrorMovies)}>Horror</a>
        
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#" onClick={()=>setSelectedOption(request.fetchRomanceMovies)}>Romance</a>
        </li>
        <li class="nav-item"> 
        <a class="nav-link active text-white" aria-current="page" href="#" onClick={()=>setSelectedOption(request.fetchSciFi)}>Sci-fi</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active text-white" aria-current="page" href="#" onClick={()=>setSelectedOption(request.fetchWestern)}>Westren</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active text-white" aria-current="page" href="#" onClick={()=>setSelectedOption(request.fetchAnimation)}>Animation</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active text-white" aria-current="page" href="#" onClick={()=>setSelectedOption(request.fetchTV)}>TV Movie</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>



      
    </div>
  )
}

export default Navigation
