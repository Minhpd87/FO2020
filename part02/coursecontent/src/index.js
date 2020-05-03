import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    return <h1>{props.course.name}</h1>;
  };

  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    );
  };

  const Content = (props) => {
    return (
      <>
        <Part part={props.course.parts[0]} />
        <Part part={props.course.parts[1]} />
        <Part part={props.course.parts[2]} />
      </>
    );
  };

  const Total = (props) => {
    console.log(props);
    return (
      <p>
        Number of exercises{" "}
        {props.course.parts[0].exercises +
          props.course.parts[1].exercises +
          props.course.parts[2].exercises}
      </p>
    );
  };

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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <hr />
      <Display counter={counter} />
      <button onClick={increase}>Plus</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
