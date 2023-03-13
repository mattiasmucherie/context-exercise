import "./App.css";
import { useContext, useState } from "react";
import { CountContext } from "./context";
import Counter from "./Counter";

function App() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}> increase</button>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
