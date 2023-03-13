import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DogContext = createContext();

export const DogProvider = (props) => {
  const [data, setData] = useState(null);
  const fetchData = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DogContext.Provider value={data}>{props.children}</DogContext.Provider>
  );
};
