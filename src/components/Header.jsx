import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <div style={{display:'flex', gap:'2rem', alignItems:'center'}} className="ms-4 mt-2">
      <FontAwesomeIcon icon={faVideo} className='fa-2x' style={{color:"#fe8300f"}}/>
      <h2>Watch History</h2>
    </div>
  ) 
}

export default Header