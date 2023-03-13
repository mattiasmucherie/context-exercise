import { useContext } from "react";
import { CountContext } from "./context";

function Counter() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <h2>Counter</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase Context</button>
    </div>
  );
}

export default Counter;
