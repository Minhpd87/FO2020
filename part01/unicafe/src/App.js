import React, { useState } from "react";

//1.6 to 1.11
const Button = (props) => {
  const { text, handleClick } = props;

  return <button onClick={handleClick}>{text}</button>;
};

const Stats = (props) => {
  const { good, neutral, bad } = props;
  const sum = good + bad + neutral;

  if (sum > 0) {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td> {good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td> {neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td> {bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td> {sum}</td>
            </tr>
            <tr>
              <td>average</td>
              <td> {((good - bad) / sum).toFixed(1)}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td> {((good / sum) * 100).toFixed(1)} %</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
  return (
    <>
      <h3>statistics</h3>
      <div>no feedback has given</div>
    </>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHanle = () => {
    setGood(good + 1);
  };

  const badHandle = () => {
    setBad(bad + 1);
  };

  const neutralHandle = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h3>give feedback</h3>
      <Button text="good" handleClick={goodHanle} />
      <Button text="neutral" handleClick={neutralHandle} />
      <Button text="bad" handleClick={badHandle} />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
