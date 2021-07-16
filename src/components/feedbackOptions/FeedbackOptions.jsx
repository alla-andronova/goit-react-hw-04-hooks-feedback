import React from 'react';
import PropTypes from 'prop-types';
import Section from '../section/Section';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ feedbacks, handleOnClick }) => {
  return (
    <Section title="Please leave feedback">
      <div className={s.wrapper}>
        {Object.entries(feedbacks).map(([k]) => (
          <button
            key={k}
            type="button"
            name={k}
            onClick={handleOnClick}
            className={s.btn}
          >
            {k}
          </button>
        ))}
      </div>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  handleOnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
