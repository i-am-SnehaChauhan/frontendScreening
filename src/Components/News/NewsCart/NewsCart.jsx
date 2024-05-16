import React from 'react';
import './NewsCart.css';
import Cart from '../Cart/Cart';
import image1 from '../../../Assets/image1.png';
import image2 from '../../../Assets/image2.png';
import image3 from '../../../Assets/image3.png';


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
  const cartData1 = [
    { id: 1, cartImg: image1, date: '27/09/2003', title: 'Forem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, cartImg: image2, date: '28/09/2003', title: 'Forem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, cartImg: image3, date: '29/09/2003', title: 'Forem ipsum dolor sit amet, consectetur adipiscing elit.' },
    // Add more data objects as needed
  ];
   
  const cartData2 = [
    { id: 1, cartImg: image1, date: '27/09/2003', title: 'Forem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, cartImg: image2, date: '28/09/2003', title: 'Forem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, cartImg: image3, date: '29/09/2003', title: 'Forem ipsum dolor sit amet, consectetur adipiscing elit.' },
    // Add more data objects as needed
  ];
  return (
    <>
    <div className='NewsCart-div'>
      <NewsGrid cartData={cartData1} />
    </div>
    <div className='NewsCart-div'>
      <NewsGrid cartData={cartData2} />
    </div>
    </>
  );
}

export default NewsCart;
