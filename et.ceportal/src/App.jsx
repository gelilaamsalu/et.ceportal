import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import Nav from "./components/nav";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Card />
    </>
  );
}

export default App;
