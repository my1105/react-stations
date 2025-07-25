import { DogImage } from "./DogImage";


export function Description({ dogUrl, setDogUrl }) {
  const handleClick = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDogUrl(data.message));
  };

  return (
    <div>
      <p>下に犬の画像が表示されます</p>
      <DogImage imageUrl={dogUrl} />
      <button onClick={handleClick}>更新</button>
    </div>
  );
}
