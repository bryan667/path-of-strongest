const { VITE_API_URL, VITE_DEFAULT_ACCOUNT_NAME, VITE_DEFAULT_CHARACTER_NAME } =
  import.meta.env;

export const fetchCharacterData = async ({
  accountName,
  characterName,
}: {
  accountName?: string;
  characterName?: string;
}) => {
  const encodedAccountName = encodeURIComponent(
    accountName || VITE_DEFAULT_ACCOUNT_NAME
  );
  const charNameVar = characterName || VITE_DEFAULT_CHARACTER_NAME;

  try {
    const response = await fetch(
      `${VITE_API_URL}/api/poeOne/getItems?accountName=${encodedAccountName}&character=${charNameVar}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching character data:', error);
    return { error, hasError: true };
  }
};

// export const fetchCharacters = async () => {
//   return strongestCharacters;
// };

export const strongestCharacters = [
  { name: 'BoyFrenzyWowo', level: '99' },
  { name: 'IsThisHexblastWowo', level: '96' },
  { name: 'WhereIsMirrorWowo', level: '98' },
  { name: 'DespiseHeresyWowo', level: '99' },
  { name: 'RighteousFireShadowowo', level: '98' },
  { name: 'BgyTanod', level: '93' },
  { name: 'CracklingGrandfather', level: '93' },
];
