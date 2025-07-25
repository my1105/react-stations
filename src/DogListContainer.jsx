import { useEffect, useState } from "react";

export function DogListContainer() {
  const [breeds, setBreeds] = useState([]);

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
  }, []); // 初回のみ実行

  return (
    <div>
      <h2>犬種一覧</h2>
      <ul>
        {breeds.map((breed) => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
    </div>
  );
}
