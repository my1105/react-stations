import { useEffect, useState } from "react";
import { BreedsSelect } from "./BreedsSelect";

export function DogListContainer() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        const breedList = Object.keys(data.message);
        setBreeds(breedList);
      })
      .catch((error) => {
        console.error("犬種の取得に失敗しました:", error);
      });
  }, []);

  return (
    <div>
      <h2>犬種一覧</h2>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />
      <p>選択中の犬種：{selectedBreed}</p>
    </div>
  );
}
