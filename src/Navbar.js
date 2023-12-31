import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="/">NewsHub</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item"> <a className="nav-link text-white" href="/business">Business</a> </li> 
        <li className="nav-item"> <a className="nav-link text-white" href="/entertainment">Entertainment</a> </li> 
        <li className="nav-item"> <a className="nav-link text-white" href="/general">General</a> </li> 
        <li className="nav-item"> <a className="nav-link text-white" href="/health">Health</a> </li> 
        <li className="nav-item"> <a className="nav-link text-white" href="/science">Science</a> </li>  
        <li className="nav-item"> <a className="nav-link text-white" href="/sports">Sports</a> </li>  
        <li className="nav-item"> <a className="nav-link text-white" href="/technology">Technology</a> </li>  
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}
