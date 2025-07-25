import PropTypes from 'prop-types';

export default function BreedsSelect({ breeds, selectedBreed, setSelectedBreed }) {
  return (
    <div>
      <h3>犬種を選択してください</h3>
      <select
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
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

BreedsSelect.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedBreed: PropTypes.string.isRequired,
  setSelectedBreed: PropTypes.func.isRequired,
};
