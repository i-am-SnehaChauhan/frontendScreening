import React from 'react';
import './Cart.css';
import { FaArrowRight } from 'react-icons/fa';

const Cart = (props) => {
  const { date, title, buttonText } = props;

  return (
    <>
      <div className='Cart-div'>
        <img src={props.cartImg} alt="" /> 
        <h6>{date}</h6>
        <h2>{title}</h2>
        <div className='Learn-button'>
          <h1>{buttonText} <FaArrowRight /></h1>
        </div>
      </div>
    </>
  );
}

export default Cart;
