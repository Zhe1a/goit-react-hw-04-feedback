import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import Statistics from './Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onClick = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(evl => evl + 1);
        break;
      case 'bad':
        setBad(evl => evl + 1);
        break;
      case 'neutral':
        setNeutral(evl => evl + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedback = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };
  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onClick={onClick}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedback()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
export default App;
