import React from "react";

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </>
  );
};

const Header = (props) => {
  return <h2>{props.course.name}</h2>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Total = (props) => {
  const { course } = props;
  return (
    <p>
      Number of exercises{" "}
      {course.parts.reduce((sum, part) => {
        return sum + part.exercises;
      }, 0)}
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <>
      {course.map((courseInfo) => {
        return (
          <div key={courseInfo.id}>
            <Header course={courseInfo} />
            <Content course={courseInfo} />
            <Total course={courseInfo} />
          </div>
        );
      })}
    </>
  );
};

export default Course;
