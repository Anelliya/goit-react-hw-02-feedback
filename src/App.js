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

  heandleGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  heandleNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()

  }
  heandleBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
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
          <FeedbackOptions heandleGoodFeedback={() => this.heandleGoodFeedback()}
            heandleBadFeedback={this.heandleBadFeedback}
            heandleNeutralFeedback={this.heandleNeutralFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positiveFeedback={persentageOfFeedback} />
        </Section>
      </div>
    );
  }
}

export default App;
