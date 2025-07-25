import { useEffect, useState } from "react";

export function App() {
  const [dogUrl, setDogUrl] = useState("http://localhost:3000/"); 

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDogUrl(data.message))
      .catch((err) => console.error("画像取得エラー:", err));
  }, []);

  const handleUpdateClick = () => {
    console.log("ボタンがクリックされました！");
    setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg");
  };

  return (
    <div>
      <header>
        <h1>犬の画像を表示するサイトです</h1>
      </header>
      <img src={dogUrl} alt="ランダムな犬" />
      <br />
      <button onClick={handleUpdateClick}>更新</button>
    </div>
  );
}