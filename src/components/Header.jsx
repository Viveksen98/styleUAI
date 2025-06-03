import React, { useState } from 'react';
import '../css/Header.css';
import HeaderList from './HeaderList';
import BookDemo from './BookDemo';
import { ImCross } from "react-icons/im";
import { Link, Element } from 'react-scroll';
import Login from './Login';
import { IoMenu } from "react-icons/io5";
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';



function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (location.pathname === '/') {
      // Scroll directly to Contactus
      scroller.scrollTo('Contactus', {
        smooth: true,
        duration: 500,
      });
    } else {
      // Navigate to home and pass state to scroll after load
      navigate('/', { state: { scrollToContact: true } });
    }
  };

  return (
    <div className='header'>
      <div className='header-left'>
        <RouterLink to="/"  >
          <img src="/images/icones/STYLEUAI (2).png" alt="logo" />
        </RouterLink>
      </div>
      <div className='desktop-menu'>
        <HeaderList />
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: "1vh" }}>
        <a href='https://login.styleuai.com/' style={{ textDecoration: "none" }}>
          <BookDemo /></a>
      </div>
      <div className='Menu_div'>
        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen
            ? <ImCross size="5vw" />


            :
            <IoMenu size="11vw" />


          }
        </div>

        {isOpen && (
          <div>

            <ul className='mobile-menu'>
              <li>
                <RouterLink to="/pricing" style={{ textDecoration: "none", color: "black" }}>
                  Pricing
                </RouterLink>
              </li>

              <li onClick={handleContactClick}>
               
                  Contactus
                
              </li>

             
              <div className='login_button'>
                <a
                  href='https://login.styleuai.com/'
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Login
                </a>
              </div>
              <div className='Book_Now'>
                <a href='https://calendly.com/hello-styleuai/30min' style={{ textDecoration: "none", color: "white" }}>
                  Book Now</a>
              </div>

            </ul>

          </div>

        )}
      </div>
    </div>
  );
}

export default Header;
