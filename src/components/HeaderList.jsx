import React from 'react';
import './../css/HeaderList.css';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

function HeaderList() {
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
    <ul className='header-list'>
      {/* Route Navigation */}
      <li>
        <RouterLink style={{ textDecoration: 'none', color: 'black' }} to="/pricing">
          Pricing
        </RouterLink>
      </li>

      {/* Scroll or Navigate to Contact */}
      <li onClick={handleContactClick}>
        
          
          
      
          Contact

      </li>
    </ul>
  );
}

export default HeaderList;
