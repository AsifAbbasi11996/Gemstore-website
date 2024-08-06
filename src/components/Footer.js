import React from "react"
import { Link } from "react-router-dom"
import "../assets/css/Footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="links">
            <div className="company flex">
              <p>company</p>
              <Link to="">Gemstone Benefits</Link>
              <Link to="">Bracelets Benefits</Link>
              <Link to="">Rudraksha Benefits</Link>
              <Link to="">Gems Recommendation</Link>
              <Link to="">Rudraksha Recommendation</Link>
              <Link to="">Bracelet Recommendation</Link>
            </div>
            <div className="support flex">
              <p>support</p>
              <Link to="">About us</Link>
              <Link to="">Contact us</Link>
              <Link to="">Know your Gems</Link>
              <Link to="">Bulk Order</Link>
            </div>
            <div className="contactus flex">
              <p>contact us</p>
              <div className="address">
                <p>Company Name:- Sewa Life Sciences</p>
                <p>Email :- support@gemsmantra.com</p>
                <p>Contact :- +917236936901</p>
                <p>Address:- Kakadeo, Kanpur ( U.P )</p>
              </div>
            </div>
            <div className="quicklinks flex">
              <p>quick links</p>
              <Link to="">Refund Policy</Link>
              <Link to="">Shipping Policy</Link>
              <Link to="">Privacy Policy</Link>
              <Link to="">Terms and Conditions</Link>
              <Link to="">Customer reviews</Link>
            </div>
          </div>

          <div className="copyright">
            <p>copyright &copy; gemstore</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
