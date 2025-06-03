import React from 'react';
import '../css/Contactus_mini_chckbox.css';

function Contactus_mini_chckbox({ lable1, lable2, onCheckboxChange, checkedOptions = {} }) {
  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (onCheckboxChange) {
      onCheckboxChange(value, checked);
    }
  };

  return (
    <div className='contactus_mini_chckbox_container_1'>
      <label className='chckbox_container_1_mini'>
        <span className='Checkbox_title'>{lable1}</span>
        <input
          className='CheckBox_input'
          type="checkbox"
          value={lable1}
          checked={checkedOptions[lable1] || false}
          onChange={handleChange}
        />
        <span className="custom-icon"></span>
      </label>
      <label className='chckbox_container_1_mini'>
        <span className='Checkbox_title'>{lable2}</span>
        <input
          className='CheckBox_input'
          type="checkbox"
          value={lable2}
          checked={checkedOptions[lable2] || false}
          onChange={handleChange}
        />
        <span className="custom-icon"></span>
      </label>
    </div>
  );
}

export default Contactus_mini_chckbox;
