import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Description } from "./Description";
import { DogListContainer } from "./DogListContainer";


export function App() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDogUrl(data.message));
  }, []);

  return (
    <>
      <Header />
      <Description dogUrl={dogUrl} setDogUrl={setDogUrl} />
      <DogListContainer />
    </>
  );
}



