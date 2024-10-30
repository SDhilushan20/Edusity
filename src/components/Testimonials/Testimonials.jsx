import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideWidth = 25; // Each slide takes 25% of the total width (4 slides)
  const maxSlide = -75;  // Max translation to prevent moving past the last slide
  const minSlide = 0;    // Min translation to prevent moving before the first slide

  const slideForward = () => {
    if (tx > maxSlide) {
      tx -= slideWidth;
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  const slideBackward = () => {
    if (tx < minSlide) {
      tx += slideWidth;
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="next" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="back" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_1} alt="user 1" />
                <div>
                  <h3>William Jackson 1</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_2} alt="user 2" />
                <div>
                  <h3>William Jackson 2</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_3} alt="user 3" />
                <div>
                  <h3>William Jackson 3</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_4} alt="user 4" />
                <div>
                  <h3>William Jackson 4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made...</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
