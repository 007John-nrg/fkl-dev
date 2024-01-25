import React from 'react'
import './components.css'
import OpenHours from './OpenHours'

const Contact = () => {
  return (
    <div className="contactBox">
      <div className="sectionTitle">
        <h5>CONTACT US</h5>
      </div>
      <OpenHours />
    </div>
  )
}

export default Contact