import React from 'react'
import './SidebarOption.css';

function SidebarOption({ option , Icon }) {
  return (
    <div className='sidebar_option'>
        {Icon && <Icon className="sidebarOption_icon"/>}
        {option}
    </div>
  )
}

export default SidebarOption