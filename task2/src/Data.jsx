import { useContext } from "react";
import { DogContext } from "./context";

function Data() {
  const dogContext = useContext(DogContext);
  const dogUrl = dogContext ? dogContext.message : "";
  console.log(dogUrl);
  return <>{dogUrl && <img src={dogUrl} alt="An image of a dog." />}</>;
}

export default Data;
