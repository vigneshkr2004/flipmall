import React from 'react'

function About() {
  return (
    <div className='about-container'>
        <div className='main'>
            <h2>About Us</h2>
            <div className='title'>
                <img className="flip-logo rounded-circle" src="src/assets/fm.png" alt="filp-image" />
                <b> FlipMall </b>
            </div>
            <p>Welcome to All</p>
            <p>Purchase with Happy</p>
            
        </div>
        <div className='contact'>
            <h2>CONTACT & ADDRESS</h2>
            <p><i className="bi bi-geo-alt"></i>FlipMall, kuruthi nagar, 43/98 Main Road, Chennai - 600021, Tamil Nadu, India</p>
            <p><i className="bi bi-telephone"></i>301-8976-8927</p>
            <p><i className="bi bi-envelope"></i>flipmall@gmail.com</p>
        </div>
    </div>
  )
}

export default About