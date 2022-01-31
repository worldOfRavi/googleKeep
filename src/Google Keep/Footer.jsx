import React from 'react';

const Footer = () => {
    let date = new Date().getFullYear();
  return <>
        <p className='footer'>Copyright &copy; {date}</p>
  </>;
};

export default Footer;
