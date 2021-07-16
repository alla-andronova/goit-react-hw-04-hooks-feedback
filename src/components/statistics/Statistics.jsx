import React from 'react';
import PropTypes from 'prop-types';
import Section from '../section/Section';
import s from './Statistics.module.css';

const Statistics = ({ feedbacks, total, positivePercentage }) => {
  return (
    <Section title="Statistics">
      <ul className={s.list}>
        {Object.entries(feedbacks).map(([k, v]) => (
          <li key={k} className={s.item}>
            {k} : <span className={s.wrapper}> {v}</span>
          </li>
        ))}
        <li className={s.item}>
          Total : <span className={s.wrapper}>{total}</span>
        </li>
        <li className={s.item}>
          % Positive Feedback :{' '}
          <span className={s.wrapper}>{positivePercentage}</span>
        </li>
      </ul>
    </Section>
  );
};

Statistics.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
