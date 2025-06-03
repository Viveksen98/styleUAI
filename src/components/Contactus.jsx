import React from 'react';
import '../css/Contactus.css';
import Contactus_mini from './Contactus_mini';
import Form from './Form';

function Contactus() {
  return (
    <div className='contactus_container'>
      <div className='contactus_container_1'>
        <div style={{display:"flex",flexDirection:"column"}}>
          <span className='Contactus_small_Header'>Contact Us</span>
          <span className='Contactus_Main_Header'>Get In Touch With Us</span>
        </div>

        <div className='contactus_container_1_mini'>
          <Contactus_mini icon_path="/images/images/Frame 11808726.svg" title="Location" description="Plot 121, Sector 44, Gurgaon - 122002, India" />
          <Contactus_mini icon_path="/images/images/Frame 11808727.svg" title="Email Address" description="hello@styleuai.com" />
          <Contactus_mini icon_path="/images/images/Frame 11808728.svg" title="Phone Number" description="+91-9717990863" />
        </div>
      </div>

      <div className='contactus_container_2'>
        <Form />
      </div>
    </div>
  );
}

export default Contactus;
