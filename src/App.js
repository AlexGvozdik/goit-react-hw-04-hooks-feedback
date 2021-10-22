import './App.css';
import React, { useState } from 'react'
import Section from './components/Section/Section.jsx';
import Notification from './components/Notification/Notification';
import FeedBackOpt from './components/FeedBackOpt/FeedBackOpt';
import Statistics from './components/Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = name => {
    switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

   const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
      const arrFeedback = ['good','neutral','bad']
const onReset = () => {
      setGood(0)
      setNeutral(0)
      setBad(0)
    }
  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedBackOpt
          btnNames={arrFeedback}
          onLeaveFeedback={handleClick}
          reset={onReset}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification notice={'No feedback given'} />
        )}
      </Section>
    </>
  );
}