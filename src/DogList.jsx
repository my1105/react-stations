export default function DogList({ imageUrls }) {
  return (
    <div>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`dog-${index}`} width={200} />
      ))}
    </div>
  );
}
