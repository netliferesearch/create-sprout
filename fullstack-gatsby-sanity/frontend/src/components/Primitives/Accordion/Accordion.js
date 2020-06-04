/*
  How this accordion was made:
  https://medium.com/skillthrive/build-a-react-accordion-component-from-scratch-using-react-hooks-a71d3d91324b

  <Accordion stitle="Egenskaper">
    CONTENT
  </Accordion>
*/

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './Accordion.scss';

const Accordion = ({ children, title = '' }) => {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState('0');

  const content = useRef(null);

  function toggleAccordion() {
    setIsActive(!isActive);
    setHeight(isActive ? '0' : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion">
      <button className={`accordion__button${isActive ? ' active' : ''}`} onClick={toggleAccordion}>
        <p className="accordion__title">{title}</p>
      </button>
      <div ref={content} style={{ maxHeight: `${height}` }} className="accordion__content">
        <div className="accordion__text">{children}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
};

export default Accordion;
