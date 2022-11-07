import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section
          title={'Please leave feedback'}
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.addFeedback}
            />
          }
        ></Section>
        <Section  title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
