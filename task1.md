1. Create a new React project using Vite by running the following command in your terminal:

   ```bash
   npm create vite@latest
   ```

1. Create a new file called "context.jsx" in the "src" directory.

   ```js
   // src/context.jsx
   import React, { createContext, useState } from "react";

   // Create a new context
   export const CountContext = createContext();

   // Create a context provider component
   export const CountProvider = ({ children }) => {
     const [count, setCount] = useState(0);

     return (
       <CountContext.Provider value={{ count, setCount }}>
         {children}
       </CountContext.Provider>
     );
   };
   ```

1. In "App.jsx", import the useContext hook from React and import the context you created in "context.jsx".

   ```javascript
   // src/App.jsx
   import React, { useContext } from "react";
   import { CountContext } from "./context";
   ```

1. In "App.jsx", create a new state variable called "count" using useState and initialize it to 0.

   ```javascript
   // src/App.jsx
   import { useState, useContext } from "react";
   import { CountContext } from "./context";

   function App() {
     const [count, setCount] = useState(0);

     return (
       <div className="App">
         <h1>Count: {count}</h1>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }

   export default App;
   ```

1. Wrap your entire app with the context provider component from the context you created in "context.js". Pass in the "count" state variable as a value prop.

   ```javascript
   // src/main.jsx
   import React from "react";
   import ReactDOM from "react-dom";
   import App from "./App";
   import { CountProvider } from "./context";

   ReactDOM.render(
     <CountProvider>
       <App />
     </CountProvider>,
     document.getElementById("root")
   );
   ```

1. Create a new file called "Counter.jsx" in the "src" directory.

   ```javascript
   // src/Counter.jsx
   import { useContext } from "react";
   import { CountContext } from "./context";

   function Counter() {
     const { count, setCount } = useContext(CountContext);

     return (
       <div>
         <h2>Counter</h2>
         <h3>Count: {count}</h3>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }

   export default Counter;
   ```

1. Render the "Counter.jsx" component in "App.jsx".

   ```javascript
   // src/App.jsx
   import { useState, useContext } from "react";
   import { CountContext } from "./context";
   import Counter from "./Counter";

   function App() {
     const { count, setCount } = useContext(CountContext);

     return (
       <div className="App">
         <h1>Count: {count}</h1>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <Counter />
       </div>
     );
   }

   export default App;
   ```

1. Verify that the "count" variable is shared between "App.jsx" and "Counter.jsx" by clicking the button and observing the count increment.
