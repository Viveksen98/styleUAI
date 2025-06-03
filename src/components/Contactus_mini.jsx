import React from 'react'
import '../css/Contactus_mini.css'
function Contactus_mini({icon_path, title, description}) {
  return (
    <div className='contactus_mini_container'>
        <div className='contactus_mini_container_1'>
            <img className='contactus_mini_container_1_img'  src={icon_path} alt='contactus_mini' />
        </div>
        <div className='contactus_mini_container_2'>
            <div className='Mini_Header'>
                {title}

            </div>
            <div className='Mini_discription'>
                {description}

            </div>
        </div>
    </div>
  )
}

export default Contactus_mini