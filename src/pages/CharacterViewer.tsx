import { useState, useEffect } from 'react';
import { strongestCharacters, fetchCharacterData } from '../api/apiFetch';
import EquipmentGrid from '../components/EquipmentGrid';
import CharacterDropdown from '../components/CharacterDropdown';
import { useNavigate } from 'react-router-dom';
// import PrettyJson from './helpers/PrettyJson';

const CharacterViewer = () => {
  const [characterData, setCharacterData] = useState<CharacterData>();
  const [selectedCharacterOption, setSelectedCharacter] = useState(
    strongestCharacters[0].name
  );

  const navigate = useNavigate();

  useEffect(() => {
    const accountName = localStorage.getItem('accountName');
    if (selectedCharacterOption) {
      const getData = async () => {
        const data = await fetchCharacterData({
          accountName: accountName,
          characterName: selectedCharacterOption,
        });
        setCharacterData(data);
      };
      getData();
    }
  }, [selectedCharacterOption]);

  const character = characterData?.character;
  const items = characterData?.items;
  const charLevel = character?.level;

  return (
    <>
      {!characterData && (
        <div className="justify-self-center bg-main-vertical py-[30px] px-[50px]">
          Loading character data...
        </div>
      )}
      {characterData?.hasError && (
        <div className="justify-self-center bg-main-vertical py-[30px] px-[50px]">
          {characterData.error}
        </div>
      )}

      {characterData && (
        <div className="justify-self-center bg-main-vertical py-[30px] px-[50px]">
          <button
            onClick={() => navigate('/')}
            className="bg-black border hover:bg-gray-800  focus:outline-none rounded-lg text-sm px-[10px] py-[2px] mb-[8px]"
          >
            {'<'}
          </button>
          <CharacterDropdown
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
              {items.map((item: any, index: number) => (
                <div className="flex items-center mt-5" key={index}>
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
    </>
  );
};

export default CharacterViewer;
