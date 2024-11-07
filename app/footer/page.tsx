import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{ height: '25vh', backgroundColor: '#333', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <h3>Contact Me</h3>
      <p>Phone: +92 3293086256</p>
      <p>Email: subhankaladi@gmail.com</p>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
        <a href="https://www.facebook.com/subhanallahkaladi" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com/subhan_kaladi/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/subhan-kaladi-6242bb31b/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
          <FaLinkedin size={24} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
