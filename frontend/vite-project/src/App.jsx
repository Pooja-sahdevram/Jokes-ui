import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  axios
    .get("/api/jokes")
    .then((response) => {
      setJokes(response.data);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <>
      <h1>Jokes</h1>
      {jokes.map((element) => (
        <div>
          {element.id}
          <h3>{element.titile}</h3>
          <h4>{element.content}</h4>
        </div>
      ))}
    </>
  );
}

export default App;
