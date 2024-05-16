import React from 'react';
import './About.css';
import LatestNews from '../../Assets/latestNews.png';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <div className='About-div'>
        <h1 className='heading'>Latest News</h1>
        <div className='About-container'>
            <div className='left-side'>
                <img src={LatestNews} alt="" />

            </div>
            <div className='right-side'>
                <div className='category'>
                <h6>27/09/2003</h6>
                <h2>Forem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                 
                <div className='Learn-button'>
                  <h1>Learn More <FaArrowRight /></h1>
                </div>
               </div>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default About