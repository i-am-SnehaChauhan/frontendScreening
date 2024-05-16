import React from 'react';
import './Header.css';
import HeaderImg from '../../Assets/Header.png';
import HeaderImgMobile from '../../Assets/HeaderMobile.png'; // Import mobile image

const Header = () => {
  return (
    <header className="header">
      <picture>
        <source media="(max-width: 398px)" srcSet={HeaderImgMobile} />
        <img src={HeaderImg} alt="header" />
      </picture>
      <div className="text-overlay">
        <h1>News</h1>
      </div>
    </header>
  );
};

export default Header;
