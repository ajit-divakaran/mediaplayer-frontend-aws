// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className='container-fluid p-3'>
        <div className="row">
            <div className="col-md-4">
                <h4 className='text-warning'>
                <FontAwesomeIcon icon="fa-solid fa-video" />
                Media player
                </h4>
                <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, omnis quis optio reiciendis doloribus debitis distinctio at ab consequuntur nulla inventore unde quia pariatur nihil.</p>
            </div>
            <div className="col-md-2">
                <h4>Links</h4>
                <ul>
                    <li style={{listStyle:'none'}}><a className='text-decoration-none' href="">Landing Page</a></li>
                    <li style={{listStyle:'none'}}><a className='text-decoration-none' href="">Home Page</a></li>
                    <li style={{listStyle:'none'}}><a className='text-decoration-none' href="">Watch History</a></li>
                </ul>
            </div>
            <div className="col-md-2">
            <h4>Guides</h4>
                <ul >
                    <li style={{listStyle:'none'}}><a href="" className='text-decoration-none'>React</a></li>
                    <li style={{listStyle:'none'}}><a href="" className='text-decoration-none'>React Bootstrap</a></li>
                    <li style={{listStyle:'none'}}><a href="" className='text-decoration-none'>Bootswatch</a></li>
                </ul>
            </div>
            <div className="col-md-4">
                <h4>Contact Us</h4>
                <div className='d-flex mt-4'>
                    <input type="text" placeholder='Email ID' className='form-comtrol rounded' />
                    <button className='btn btn-warning ms-3'>Subscribe</button>
                </div>
                <div className="d-flex justify-content-between mt-4">
                <FontAwesomeIcon icon={faInstagram} />
<FontAwesomeIcon icon={faFacebook} />
<FontAwesomeIcon icon={faTwitter} />
<FontAwesomeIcon icon={faLinkedin} />
<FontAwesomeIcon icon={faWhatsapp} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer