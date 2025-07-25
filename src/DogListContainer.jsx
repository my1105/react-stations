import { useEffect, useState } from "react";
import DogList from "./DogList";

export function DogListContainer() { 
  const [breed, setBreed] = useState("affenpinscher");
  const [imageUrls, setImageUrls] = useState([]);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => setBreeds(Object.keys(data.message)));
  }, []);

  const handleClick = () => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/12`)
      .then((res) => res.json())
      .then((data) => setImageUrls(data.message));
  };

  return (
    <div>
      <select value={breed} onChange={(e) => setBreed(e.target.value)}>
        {breeds.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>表示</button>
      <DogList imageUrls={imageUrls} />
    </div>
  );
}
