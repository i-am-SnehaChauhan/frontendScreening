import React from 'react';
import Cart from '../Cart/Cart';
const NewsGrid = ({ cartData }) => {
    return (
      <div className='news-grid'>
        {cartData.map((item, index) => (
          <Cart key={index} {...item} />
        ))}
      </div>
    );
  }



const NewsCart = () => {
  const cartData = [
    { id: 1, cartImg: 'image1.jpg', date: '27/09/2003', title: 'Title 1', buttonText: 'Button 1' },
    { id: 2, cartImg: 'image2.jpg', date: '28/09/2003', title: 'Title 2', buttonText: 'Button 2' },
    { id: 3, cartImg: 'image3.jpg', date: '29/09/2003', title: 'Title 3', buttonText: 'Button 3' },
    // Add more data objects as needed
  ];

  return (
    <div className='NewsCart-div'>
      <NewsGrid cartData={cartData} />
    </div>
  );
}

export default NewsCart;
