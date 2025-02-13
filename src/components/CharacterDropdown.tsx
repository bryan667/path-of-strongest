import React, { FC, useEffect, useState } from 'react';
import { fetchCharactersByRealm } from '../api/apiFetch';
import { isEmpty, sortBy, toLower } from 'lodash';

type TProps = {
  selectedOption: string;
  setSelectedOption: (args: string) => void;
};

const CharacterDropdown: FC<TProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  const [characterOptions, setCharacterOptions] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    const getCharacterOptions = async () => {
      const accountName = localStorage.getItem('accountName');
      const realm = localStorage.getItem('realm');
      const data = await fetchCharactersByRealm({ accountName, realm });

      if (!data?.error && !isEmpty(data)) {
        const sortedData = sortBy(data, d => d.league) || [];
        setCharacterOptions(sortedData);
        const latestCharacter = data.find((d: any) => {
          return toLower(d.league) === 'settlers';
        });
        setSelectedOption(latestCharacter?.name || sortedData[0].name);
      }
      console.log('data', data);
    };
    getCharacterOptions();
  }, []);

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
        {characterOptions.map(
          (char: { name: string; level: string; league: string }) => {
            return (
              <option className="text-black" key={char.name} value={char.name}>
                {`${char.name}  lvl ${char.level} - ${char.league}`}
              </option>
            );
          }
        )}
      </select>
    </div>
  );
};

export default CharacterDropdown;
