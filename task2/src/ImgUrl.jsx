import { useContext } from "react";
import { DogContext } from "./context";

function ImgUrl() {
  const dogContext = useContext(DogContext);
  return (
    <div>
      {dogContext ? (
        <a href={dogContext.message}>Link to dog image</a>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ImgUrl;
