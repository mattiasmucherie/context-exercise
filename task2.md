Instructions:

1. Create a new React project using Vite by running the following command in your terminal:

   ```bash
   npm create vite@latest
   ```

1. Create a new file called "context.jsx" in the "src" directory.
1. In "context.jsx", import the `createContext`, `useState`, and `useEffect` hooks from React. Then, create a new context using `createContext` and export it.
1. In "context.jsx", create a new function called "fetchData" that fetches data from an API using the fetch API and returns the data.
1. In "context.jsx", create a new state variable called "data" using `useState` and initialize it to an empty array.
1. In "context.jsx", use the `useEffect` hook to call the "fetchData" function when the component mounts. When the data is returned, update the "data" state variable with the fetched data.
1. Wrap your entire app with the context provider component from the context you created in "context.jsx". Pass in the "data" state variable as a value prop.
1. Create a new file called "Data.jsx" in the "src" directory.
1. In "Data.jsx", import the useContext hook from React and import the context you created in "context.jsx".
1. In "Data.jsx", create a new variable called "data" by calling useContext and passing in the context you created in "context.jsx".
1. Render the "data" variable in "Data.jsx".
1. Verify that the data is fetched from the API and shared between "context.jsx" and "Data.jsx" by observing the data render in "Data.jsx".
