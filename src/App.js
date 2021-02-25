import React, { Component } from 'react'

import './App.css';

import Section from "./components/Statistics/Section ";
import FeedbackOptions from "./components/Statistics/FeedbackOptions";
import Statistics from './components/Statistics/Statistics'

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    persentage: 0
  }

  heandleFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.total + 1
    }))
  }

  countPositiveFeedbackPercentage = () => {
    this.setState((state) => {
      return { persentage: state.good * 100 / state.total }
    })
  }

  render() {
    const { good, neutral, bad, total, persentage } = this.state;
    const persentageOfFeedback = Math.round(persentage);

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            heandleFeedback={this.heandleFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positiveFeedback={persentageOfFeedback} />
        </Section>
      </div>
    );
  }
}

export default App;
