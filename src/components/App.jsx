import React, { Component } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnClick = e => {
    const { name } = e.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((this.state.good / totalFeedback) * 100);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    return (
      <>
        <FeedbackOptions
          feedbacks={this.state}
          handleOnClick={this.handleOnClick}
        />

        {totalFeedback > 0 ? (
          <Statistics
            feedbacks={this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
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
}
