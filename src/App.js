import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

// import "bootstrap" from "bootstrap";

function App() {
  const [added, setAdded] = useState(null);

  const addCard = e => {
    console.log(e);
    setAdded(e);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <Form addCard={addCard} />
        </div>
        <div className="col">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
