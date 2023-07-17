import React, { useState } from 'react';
import img from './assets/images/tennisGirl.png';
import './App.css';
import { CSSTransition } from 'react-transition-group';

const App = () => {
  const currentDate = new Date();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentMonthIndex = currentDate.getMonth();
  const currentMonth = monthNames[currentMonthIndex];
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='card-container'>
      <div className='card-content'>
        <div className='card-container-img'>
          <img src={img} alt='Tennis Girl' />
        </div>
        <div className='card-container-data'>
          {currentDay} {currentMonth} {currentYear}
        </div>
        <div className='card-container-text'>
          <p>
            Interdum proin amet nibh tortor sed vulputate mattis. Ridiculus porta ipsum neque ut vel vitae et.
          </p>
        </div>
        <button className='card-container-button' onClick={openModal}>Details</button>
      </div>

      <CSSTransition
        in={isModalOpen}
        timeout={300}
        classNames='modal-transition'
        unmountOnExit
      >
        <div className='modal'>
          <div className='modal-content'>
            <h2>Tennis</h2>
            <p>
              Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). The object of the game is to score points by hitting the ball over the net and into the opponent's court in such a way that they are unable to return it properly.
            </p>
            <button className='close-button' onClick={closeModal}>Close</button>
          </div>
        </div>
      </CSSTransition>
      
      <CSSTransition
        in={isModalOpen}
        timeout={300}
        classNames='overlay-transition'
        unmountOnExit
      >
        <div className='overlay' onClick={closeModal} />
      </CSSTransition>
    </div>
  );
}

export default App;
