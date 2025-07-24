import { useEffect, useState } from "react";

export function App() {
  const [dogUrl, setDogUrl] = useState("http://localhost:3000/"); 

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDogUrl(data.message))
      .catch((err) => console.error("画像取得エラー:", err));
  }, []);

  return (
    <div>
      <header>
        <h1>犬の画像を表示するサイトです</h1>
      </header>
      <img src={dogUrl} alt="ランダムな犬" />
    </div>
  );
}
