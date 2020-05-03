import React from "react";

//Components
import Note from "./components/Note";

const App = (props) => {
  const { notes } = props;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((item) => (
          <Note key={item.id} note={item} />
        ))}
      </ul>
    </div>
  );
};

export default App;
