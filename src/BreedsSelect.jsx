export function BreedsSelect({ breeds, selectedBreed, setSelectedBreed }) {
  const handleChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  return (
    <div>
      <h3>犬種を選択してください</h3>
      <select value={selectedBreed} onChange={handleChange}>
        <option value="">-- 選択してください --</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
}
