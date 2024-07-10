import React from 'react'
import './Footer.css'
 const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src="https://img.freepik.com/premium-vector/shopping-bag-illustration-vector_643279-153.jpg" alt=" "/>
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src=" https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt=" "/>
                </div>
                <div className="footer-icons-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png" alt=" "/>
                </div>
                <div className="footer-icons-container">
                <img src="https://www.freeiconspng.com/uploads/whatsapp-icon-0.png" alt=" "/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @2023 - All Right Reserved</p>
        </div>
        </div>
    
  )
}
export default Footer