import React from 'react'

const Head = () => {
  return (
    <>
  <div className="navbar">
  <div className="logo">
    <a href="#">SHOEZTORE</a>
  </div>
  <div className="nav">
    <ul>
      <li><a href="#">STORE</a></li>
      <li><a href="#">COLLECTION</a></li>
      <li><a href="#">SERVICES</a></li>
      <li><a href="#">ABOUT US</a></li>
      <li><a href="#">CONTACT</a></li>
    </ul>
    <div className="menu">
      <i className="fa-solid fa-bars"></i>
    </div>
  </div>
  <a href="#" className="highlight">Get Started</a>
  <div className="dropdown-menu">
    <ul>
      <li><a href="#">STORE</a></li>
      <li><a href="#">COLLECTION</a></li>
      <li><a href="#">SERVICES</a></li>
      <li><a href="#">ABOUT US</a></li>
      <li><a href="#">CONTACT</a></li>
      <li><a href="#" className="highlight">Get Started</a></li>
    </ul>
  </div>
</div>
    </>
  )
}

export default Head