import React, { useState } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = {
    good,
    neutral,
    bad,
  };
  const totalFeedback = good + neutral + bad;

  const handleOnClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  return (
    <>
      <FeedbackOptions feedbacks={feedback} handleOnClick={handleOnClick} />

      {totalFeedback > 0 ? (
        <Statistics
          feedbacks={feedback}
          total={totalFeedback}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <p
          style={{
            textAlign: 'center',
            fontSize: 'larger',
          }}
        >
          No feedback given.
        </p>
      )}
    </>
  );
}
