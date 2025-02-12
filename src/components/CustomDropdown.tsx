import React, { FC } from 'react';
import { strongestCharacters } from '../api/apiFetch';

type TProps = {
  selectedOption: string;
  setSelectedOption: (args: string) => void;
};

const CustomDropdown: FC<TProps> = ({ selectedOption, setSelectedOption }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-100%">
      <label htmlFor="dropdown" className="block text-sm font-medium mb-2">
        Strongest characters:
      </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        className="block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {strongestCharacters.map((char: { name: string; level: string }) => {
          return (
            <option key={char.name} value={char.name}>
              {`${char.name}  lvl ${char.level}`}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CustomDropdown;
