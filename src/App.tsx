import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrettyJson from './helpers/PrettyJson';
import { strongestCharacters, fetchCharacterData } from './api/apiFetch';
import EquipmentGrid from './components/EquipmentGrid';
import CustomDropdown from './components/CustomDropdown';

const { VITE_DEFAULT_ACCOUNT_NAME } = import.meta.env;

const CharacterViewer = () => {
  const [characterData, setCharacterData] = useState<CharacterData>();
  const [selectedCharacterOption, setSelectedCharacter] = useState(
    strongestCharacters[0].name
  );

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCharacterData({
        accountName: VITE_DEFAULT_ACCOUNT_NAME,
        characterName: selectedCharacterOption,
      });
      setCharacterData(data);
    };
    getData();
  }, [selectedCharacterOption]);

  const character = characterData?.character;
  const items = characterData?.items;
  const charLevel = character?.level;

  return (
    <div className="app-main">
      <div className="bg-main-opaque">
        {!characterData && <div>Loading character data...</div>}
        {characterData?.hasError && <div>{characterData.error}</div>}

        {characterData && (
          <div className="justify-self-center bg-main-vertical py-[30px] px-[50px]">
            <CustomDropdown
              selectedOption={selectedCharacterOption}
              setSelectedOption={setSelectedCharacter}
            />
            <h1 className="mt-4 mb-1 text-4xl title-item gold-text1">
              {character?.name}
            </h1>
            {charLevel && (
              <h2 className="gold-text2 mb-3">{`Level ${character.level} ${character.class}`}</h2>
            )}
            {items && items.length > 0 ? (
              <div>
                <EquipmentGrid items={items} />
                {items.map((item: any) => (
                  <div className="flex items-center mt-5">
                    <img
                      src={item.icon}
                      alt="Profile"
                      className="rounded-full mr-4" // Adjust size and spacing
                    />
                    <div key={item.id}>
                      <div className="title-item gold-text1">
                        {`${item.name} ${item.typeLine}`}
                      </div>
                      <div className="gold-text2">{item.baseType}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No items found.</p>
            )}
          </div>
        )}

        {/* {import.meta.env.MODE === 'development' && <PrettyJson json={items} />} */}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterViewer />} />
      </Routes>
    </Router>
  );
};

export default App;
