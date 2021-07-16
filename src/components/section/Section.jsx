import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <p
        style={{ textAlign: 'center', fontSize: 'larger', fontWeight: 'bold' }}
      >
        {title}
      </p>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
