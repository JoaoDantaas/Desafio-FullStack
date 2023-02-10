import React from "react";
import { GlobalStyle } from "./styles";
import { useEffect, useState } from "react";
import api from "./service/api";
import axios from "axios";

function App() {
  const [values, setValues] = useState();

  useEffect(() => {
    const simulate = async () => {
      await axios
        .get("http://localhost:8000/contact")
        .then((response) => {
          console.log(response.data);
          setValues(values);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    simulate();
  }, [setValues, values]);
  return (
    <>
      <GlobalStyle />
      <h1>oiiiii</h1>
    </>
  );
}

export default App;
