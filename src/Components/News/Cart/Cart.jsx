import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Cart.css'; // Import Cart component CSS file

const Cart = (props) => {
  const { date, title } = props;

  return (
    <div className='Cart'>
      <img src={props.cartImg} alt="Imag" />
      <h6>{date}</h6>
      <h2>{title}</h2>
      <div className='Learn-button'>
        <h1>Learn More <FaArrowRight /></h1>
      </div>
    </div>
  );
}

export default Cart;
