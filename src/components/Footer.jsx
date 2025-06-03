import React from 'react'
import "../css/Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container'>
      <div className='text-footer'><span>
        All Rights Reserved
      </span>
        <span>

          <Link to="guidedoc" style={{textDecoration:"none",color:"white"}} >Guide Doc</Link>
          <br />          <Link to="https://styleuai.com/Terms.html" style={{textDecoration:"none",color:"white"}} >Terms & conditions</Link>
          <br />

          <Link to="https://styleuai.com/privacypolicy.html" style={{textDecoration:"none",color:"white"}} >Privacy Policy</Link>
        </span></div>
      <div className='text-footer'>www.mysideteam.com</div>
    </div>
  )
}

export default Footer