import '../../../styles/footerHome.css'
import React from 'react'

const FooterHome = () => {
  return (
    <div>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Home</h4>
            <p>So what makes us so Pure?</p>
            <p>So what makes us so Different?</p>
            <p>Our Marriage Testimonials</p>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <p>Contact Us</p>
            <p>Help Centre</p>
          </div>
          <div className="footer-column featured-on">
            <h4>We have featured on:</h4>
            <p>RamadanTV</p>
            <p>Islam TV</p>
            <p>IQRA</p>
          </div>
        </div>
      </div>
    </footer>  
    </div>
  )
}
export default FooterHome
