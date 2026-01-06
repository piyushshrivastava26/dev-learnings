import { useState } from "react";
import "./App.css";

import Card from "./Components/cardComp";

function App() {
  const [count, setCount] = useState(0);

  const anObj = {
    name: "Cracker",
    age: 19,
    work: {
      first: "code",
      second: "Crack",
      third: "Code",
    },
  };

  return (
    <>
      <h2>props | react.js - library</h2>
      <br />
      <hr />
      <br />

      <Card coderName = "Piyush"/>
      <Card />
      <Card coderName = "monsteerMind"/>

    </>
  );
}

export default App;
