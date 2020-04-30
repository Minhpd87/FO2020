import React, { useState } from "react";

const Button = (props) => {
  const { text, handleClick } = props;
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(props.anecdotes.length).fill(0));

  const randomQuote = (quoteArray) => {
    const length = quoteArray.length;
    setSelected((Math.random() * length).toFixed(0));
  };

  const voteHandle = () => {
    const newVote = [...vote];
    newVote[selected] += 1;
    setVote(newVote);
  };

  const getQuote = () => {
    const maxVote = Math.max(...vote);
    return vote.indexOf(maxVote);
  };

  return (
    <div>
      <div>
        <h3>Anecdote of the day</h3>
        {props.anecdotes[selected]}
        <p>has {vote[selected]} votes</p>
        <div>
          <Button text="vote" handleClick={voteHandle} />
          <Button
            text="next anecdote"
            handleClick={() => randomQuote(props.anecdotes)}
          />
        </div>
      </div>
      <div>
        <h3>Anecdote with most votes</h3>
        {props.anecdotes[getQuote()]}
        <p>has {vote[getQuote()]} votes</p>
      </div>
    </div>
  );
};

export default App;
