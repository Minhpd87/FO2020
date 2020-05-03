import React, { useState } from "react";
import ReactDOM from "react-dom";
import Course from "./components/Course";

const App = (props) => {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  //Example of part1c
  const [counter, setCounter] = useState(0);

  // setTimeout(() => setCounter(counter + 1), 1000);
  const increase = () => {
    setCounter(counter + 1);
  };

  const Display = (props) => {
    return <div>{props.counter}</div>;
  };

  return (
    <div style={{ padding: 50, border: "1px solid black", borderRadius: 5 }}>
      <Course course={course} />
      <hr />
      <Display counter={counter} />
      <button onClick={increase}>Plus</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
